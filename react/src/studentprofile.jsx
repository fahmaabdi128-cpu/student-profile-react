import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfileStatus from "./ProfileStatus";

const StudentProfile = ({
  name,
  course,
  age,
  city,
  isGraduated,
}) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "15px" }}>
      <ProfileHeader name={name} course={course} />
      <ProfileDetails age={age} city={city} />
      <ProfileStatus isGraduated={isGraduated} />
    </div>
  );
};

export default StudentProfile;