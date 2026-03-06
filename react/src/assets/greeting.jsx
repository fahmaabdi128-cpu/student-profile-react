function Greeting({ IsloggedIn }){
    if (IsloggedIn) {
        return <h2>welcome back</h2>
    }
    return <h2>please log in</h2>
}


export default Greeting;

function Result({PassedExams}){
    if (PassedExams){
        return <h2>Well Done</h2>
    }
    return <h3>Retake the Exam</h3>
}
export default Result;