const Header = (props) => {
  return (
    <h3 className="capitalize text-orange-300 text-center text-xl">
      {props.header_name}
    </h3>
  );
};

export default Header;
