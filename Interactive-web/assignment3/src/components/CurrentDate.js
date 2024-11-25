function CurrentDate() {
  const dateToday = () => {
    const today = new Date();
    return `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
  };
  return (
    <div className="comp">
      <p>The date today is {dateToday()}</p>
    </div>
  );
}

export default CurrentDate;
