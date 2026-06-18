import Button from "./Button";
import Header from "./header";

const card = (props) => {
  return (
    <div>
      <div className="bg-[#40407aa6] w-80 h-80 p-5 m-5  flex flex-col justify-between rounded-b-2xl rounded-r-3xl">
        <Header header_name="This is my new Heading" />
        <h1 className=" text-4xl text-pink-300 capitalize font-extrabold ">
          {props.text}
        </h1>
        <div className="flex justify-evenly">
          <Button text="Learn more" />
          <Button text="contact us" />
        </div>
      </div>
    </div>
  );
};

export default card;
