const ProfileHeader = ({ name, course }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
    </div>
  );
};

export default ProfileHeader;