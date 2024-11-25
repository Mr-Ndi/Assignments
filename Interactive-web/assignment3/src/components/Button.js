function Button({ text, color }) {
  return (
    <div className="comp" style={{ backgroundColor: color }}>
      {text}
    </div>
  );
}

export default Button;
