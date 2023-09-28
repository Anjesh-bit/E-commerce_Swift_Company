const AppButton = (props) => {
  const { btnClass, btnText } = props;
  return <button className={btnClass}>{btnText}</button>;
};

export default AppButton;
