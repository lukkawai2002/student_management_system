import { useEffect, useState } from "react";
import "./CGPACalculationResult.css";

function CGPACalculationResult(props) {

    const [CGPA, setCGPA] = useState(0);

    useEffect(() => {
        let creditSum = 0;
        let gradeSum = 0;

        props.subjectAdd.forEach((subject) => {
            creditSum += Number(subject.credit);

            let gradeGPA = 0;

            switch (subject.grade) {
                case "A+":
                    gradeGPA = 4.3;
                    break;
                case "A":
                    gradeGPA = 4.0;
                    break;
                case "A-":
                    gradeGPA = 3.7;
                    break;
                case "B+":
                    gradeGPA = 3.3;
                    break;
                case "B":
                    gradeGPA = 3.0;
                    break;
                case "B-":
                    gradeGPA = 2.7;
                    break;
                case "C+":
                    gradeGPA = 2.3;
                    break;
                case "C":
                    gradeGPA = 2.0;
                    break;
                case "C-":
                    gradeGPA = 1.7;
                    break;
                case "D+":
                    gradeGPA = 1.3;
                    break;
                case "D":
                    gradeGPA = 1.0;
                    break;
                case "F":
                    gradeGPA = 0.0;
                    break;
                default:
                    gradeGPA = 0.0;
            }
            gradeSum += gradeGPA * Number(subject.credit);
        });

        setCGPA(gradeSum / creditSum);
    }, [props.subjectAdd]);

    return (
        <div className="SubjectDetailBox mt-5">
            <div className="detailBoxContent">
                <h1>Result</h1><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Subject</th>
                            <th scope="col">Credit</th>
                            <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.subjectAdd.map((subject, index) => (
                            <tr key={index}>
                                <th scope="row">{subject.subject}</th>
                                <td>{subject.credit}</td>
                                <td>{subject.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>CGPA: {CGPA ? CGPA.toFixed(2) : "0.0"}</h3>
            </div>
        </div>
    );
}

export default CGPACalculationResult;