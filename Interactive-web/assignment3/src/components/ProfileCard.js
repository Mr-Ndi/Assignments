function ProfileCard({ name, age, email }) {
  return (
    <div className="comp">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default ProfileCard;
