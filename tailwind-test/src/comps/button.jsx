const Button = (props) => {
  return (
    <Button
      onClick={props.handleClick}
      className={`${
        props.isSmall ? "h-[32px] py-1 px-3 text-xs" : "h-[40px] py-2 px-4 "
      } ${
        props.isGRay
          ? " bg-[#f3f4f6] text-[#363636]"
          : "bg-[#3c82f6] text-white"
      } rounded-md`}
    >
      {props.text}
    </Button>
  );
};
export default Button;
