import Card from "./componants/card";

const App = () => {
  return (
    <div className="bg-[#6D214F] h-full  flex flex-wrap justify-center">
      <Card text="we are haiaring web developer" />
      <Card text="we are haiaring UI/UX desinger" />
      <Card text="we are haiaring copy writer" />
      <Card text="we are haiaring video Editor" />
    </div>
  );
};

export default App;
