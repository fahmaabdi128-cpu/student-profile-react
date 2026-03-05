const ProfileStatus = ({ isGraduated }) => {
  return (
    <div>
      {isGraduated ? (
        <p>Graduated</p>
      ) : (
        <p>Currently Studying</p>
      )}
    </div>
  );
};

export default ProfileStatus;