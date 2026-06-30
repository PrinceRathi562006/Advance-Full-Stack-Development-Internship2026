const ComponentFour = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.id}</h1>
      ))}
    </div>
  );
};

export default ComponentFour;