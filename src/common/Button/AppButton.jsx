const AppButton = (props) => {
  const { btnClass, btnText, onClick, disabled } = props;
  return (
    <button className={btnClass} onClick={onClick} disabled={disabled}>
      {btnText}
    </button>
  );
};

export default AppButton;
