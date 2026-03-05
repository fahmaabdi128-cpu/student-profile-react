import StudentProfile from "./StudentProfile";

function App() {
  return (
    <div>
      <StudentProfile
        name="Amina Yusuf"
        course="Software Engineering"
        age={22}
        city="Nairobi"
        isGraduated={false}
      />

      <StudentProfile
        name="Ali Hassan"
        course="Computer Science"
        age={25}
        city="Mombasa"
        isGraduated={true}
      />

      <StudentProfile
        name="Zahra Ahmed"
        course="Information Technology"
        age={20}
        city="Kisumu"
        isGraduated={false}
      />
    </div>
  );
}

export default App;