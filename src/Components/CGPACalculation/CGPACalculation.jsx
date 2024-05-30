import { useState } from "react";
import CGPACalculationResult from "../CGPACalculationResult/CGPACalculationResult.jsx";
import "./CGPACalculation.css";

function CGPACalculation() {
    const [subjectAdd, setSubjectAdd] = useState([]);

    const [subject, setSubject] = useState("");
    const [credit, setCredit] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubject = (event) => {
        setSubject(event.target.value);
    };

    const handleCredit = (event) => {
        setCredit(event.target.value);
    };

    const handleGrade = (event) => {
        setGrade(event.target.value);
    };

    const Add = () => {
        if (subject && credit && grade) {
            setSubjectAdd([...subjectAdd, { subject: subject, credit: credit, grade: grade }]);
        }
    };

    const Clear = () => {
        setSubjectAdd([]);
    };

    return (
        <>
            <div className="col text-center d-flex justify-content-center align-items-center">
                <div>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroup-sizing-default">Subject</span>
                        <input type="text" className="form-control" onChange={handleSubject} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Credit</span>
                        <select className="form-select" onChange={handleCredit} aria-label="Default select example">
                            <option>Credit</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Grade</span>
                        <select className="form-select" onChange={handleGrade} aria-label="Default select example">
                            <option>Grade</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D+">D+</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="ClickButton">
                        <button type="button" className="btn btn-dark" onClick={Add}>Add</button>
                        <button type="button" className="btn btn-danger" onClick={Clear}>Clear</button>
                    </div>
                </div>
            </div>

            <div className="col">
                <CGPACalculationResult subjectAdd={subjectAdd} />
            </div>
        </>
    );
}

export default CGPACalculation;