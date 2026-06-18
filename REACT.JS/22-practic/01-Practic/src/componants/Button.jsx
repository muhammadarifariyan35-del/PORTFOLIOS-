const Button = (props) => {
  return (
    <button className="bg-black text-[#33d9b2] px-5 py-1 rounded-xl font-extralight capitalize hover:bg-sky-900">
      {props.text}
    </button>
  );
};

export default Button;
