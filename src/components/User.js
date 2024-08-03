const User = ({ name, location, contact }) => {
  return (
    <div className="user-card">
      <h1>name:{name}</h1>
      <h2>location:{location}</h2>
      <h2>contact:{contact}</h2>
    </div>
  );
};
export default User;
