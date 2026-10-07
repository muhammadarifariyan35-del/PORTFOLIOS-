//! প্রবলেম ১: response.ok দিয়ে এরর হ্যান্ডলিং
async function fetchData(url) {
  let response = await fetch(url);
  if (response.ok) {
    console.log("Data fetched successfully!");
  } else {
    console.log(
      "Failed with status code and text: ",
      response.status,
      response.statusText,
    );
    return;
  }
  let data = await response.text();
  console.log(data);
}
fetchData("data.txt");

//! প্রবলেম ২: লোকাল JSON ফাইল পড়া
async function fetchJson(url) {
  let response = await fetch(url);
  let data = await response.json();

  data.forEach((element) => {
    console.log(`${element.username} is a ${element.role}`);
  });
}
fetchJson("user.json");
