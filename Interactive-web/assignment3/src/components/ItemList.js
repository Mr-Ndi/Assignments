function ItemList() {
  const items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  return (
    <div className="comp">
      {items.map((i) => (
        <p>{i}</p>
      ))}
    </div>
  );
}

export default ItemList;
