const path = require("path");
const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024
  }
});

const presetPrompts = {
  meadow: "lush meadow lighting, fresh greens, watercolor skies, soft cel shading, gentle sunlight, cozy storybook mood",
  sunset: "golden-hour glow, amber sunlight, warm highlights, cinematic horizon colors, painterly evening atmosphere",
  forest: "quiet forest palette, mossy greens, misty air, natural textures, calm fantasy ambience, delicate brushwork",
  dream: "dreamlike clouds, airy pastel palette, magical depth, whimsical atmosphere, soft haze, ethereal painted background"
};

app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    hasApiKey: Boolean(process.env.OPENAI_API_KEY)
  });
});

app.post("/api/transform", upload.single("photo"), async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "OPENAI_API_KEY is missing. Add it to a .env file before generating images."
    });
  }

  if (!req.file) {
    return res.status(400).json({
      error: "Please upload an image first."
    });
  }

  const preset = req.body.preset || "meadow";
  const subject = (req.body.subject || "").trim();
  const details = (req.body.details || "").trim();
  const preserveIdentity = req.body.preserveIdentity !== "false";

  const promptParts = [
    "Transform this uploaded photo into a whimsical hand-painted anime film frame.",
    preserveIdentity
      ? "Keep the person's face, pose, clothing, body proportions, and overall identity recognizable."
      : "Keep the main subject recognizable while allowing more stylized reinterpretation.",
    "Preserve the original composition and camera angle unless a stronger composition naturally improves the result.",
    "Use expressive eyes, soft watercolor-style backgrounds, delicate cel shading, gentle outlines, painterly textures, and cinematic storybook lighting.",
    `Visual direction: ${presetPrompts[preset] || presetPrompts.meadow}.`,
    "Avoid plastic skin, warped hands, extra fingers, deformed eyes, oversharpening, text artifacts, and low-detail backgrounds."
  ];

  if (subject) {
    promptParts.push(`Important subject emphasis: ${subject}.`);
  }

  if (details) {
    promptParts.push(`Extra creative guidance: ${details}.`);
  }

  const prompt = promptParts.join(" ");

  try {
    const form = new FormData();
    form.set("model", "gpt-image-1.5");
    form.set("prompt", prompt);
    form.set("quality", "high");
    form.set(
      "image[]",
      new File([req.file.buffer], req.file.originalname || "upload.png", {
        type: req.file.mimetype || "image/png"
      })
    );

    const response = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: form
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || "Image generation failed."
      });
    }

    const imageBase64 = data?.data?.[0]?.b64_json;

    if (!imageBase64) {
      return res.status(502).json({
        error: "The API returned no image data."
      });
    }

    return res.json({
      image: `data:image/png;base64,${imageBase64}`,
      revisedPrompt: prompt,
      requestId: response.headers.get("x-request-id")
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Unexpected server error."
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
