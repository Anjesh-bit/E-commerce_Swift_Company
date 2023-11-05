const AppButton = (props) => {
  const { btnClass, btnText, onClick } = props;
  return (
    <button className={btnClass} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default AppButton;
