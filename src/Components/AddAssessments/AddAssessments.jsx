import { useState } from "react";
import "./AddAssessments.css"
import AssessmentBox from "../AssessmentBox/AssessmentBox";
import AssessmentImportanceCount from "../AssessmentImportanceCount/AssessmentImportanceCount";

function AddAssessments() {

    const [iconURL, setIconURL] = useState("src/assets/1.png");
    const [index, setIndex] = useState(1);

    const [SelectSubject, setSelectSubject] = useState();
    const [AssessmentTitle, setAssessmentTitle] = useState();
    const [GroupProject, setGroupProject] = useState(true);
    const [NumberOfMember, setNumberOfMember] = useState(null);
    const [DueDate, setDueDate] = useState();
    const [Requirements, setRequirements] = useState();

    const [AddAssessment, setAddAssessment] = useState([]);

    const [countIndexOne, setCountIndexOne] = useState(0);
    const [countIndexTwo, setCountIndexTwo] = useState(0);
    const [countIndexThree, setCountIndexThree] = useState(0);
    const [countIndexFour, setCountIndexFour] = useState(0);
    const [countIndexFive, setCountIndexFive] = useState(0);

    const handleAddAssessment = () => {
        if ((SelectSubject && AssessmentTitle && GroupProject && NumberOfMember && DueDate && Requirements) || (SelectSubject && AssessmentTitle && GroupProject === false && NumberOfMember === null && DueDate && Requirements)) {
            setAddAssessment([...AddAssessment, { iconURL: iconURL, SelectSubject: SelectSubject, AssessmentTitle: AssessmentTitle, GroupProject: GroupProject, NumberOfMember: NumberOfMember, DueDate: DueDate, Requirements: Requirements }])

            switch (index) {
                case 1:
                    setCountIndexOne(c => c + 1);
                    break;
                case 2:
                    setCountIndexTwo(c => c + 1);
                    break;
                case 3:
                    setCountIndexThree(c => c + 1);
                    break;
                case 4:
                    setCountIndexFour(c => c + 1);
                    break;
                case 5:
                    setCountIndexFive(c => c + 1);
                    break;
                default:
                    return null;
            }
        }
    }

    const handleNextIconURL = () => {
        let newIndex = index + 1;
        if (newIndex > 5) {
            newIndex = 1;
        }
        setIndex(newIndex);
        setIconURL(`src/assets/${newIndex}.png`);
    }

    const handlePreviousIconURL = () => {
        let newIndex = index - 1;
        if (newIndex <= 0) {
            newIndex = 5;
        }
        setIndex(newIndex);
        setIconURL(`src/assets/${newIndex}.png`);
    }

    const handleSelectSubject = (event) => {
        setSelectSubject(event.target.value)
    }

    const handleAssessmentTitle = (event) => {
        setAssessmentTitle(event.target.value)
    }

    const handleGroupProject = (event) => {
        if (event.target.value === "Yes") {
            setGroupProject(true)
            setNumberOfMember("")
        }
        else {
            setGroupProject(false)
            setNumberOfMember(null)
        }
    }

    const handleNumberOfMember = (event) => {
        setNumberOfMember(event.target.value)
    }

    const handleDueDate = (event) => {
        setDueDate(event.target.value)
    }

    const handleRequirements = (event) => {
        setRequirements(event.target.value)
    }

    const clearAll = () => {
        setAddAssessment([])
        setCountIndexOne(0);
        setCountIndexTwo(0);
        setCountIndexThree(0);
        setCountIndexFour(0);
        setCountIndexFive(0);
    }

    return (
        <>
            <div className="AddAssessment">
                <div className="AddAssessmentDetail container text-center">
                    <div className="row">
                        <div className="col align-self-center">
                            <h1 className="display-4">Importance Level</h1><br />
                            <img src={iconURL} /><br />
                            <div className="iconButton">
                                <button type="button" className="btn btn-primary" onClick={handlePreviousIconURL}>Previous</button>
                                <button type="button" className="btn btn-secondary" onClick={handleNextIconURL}>Next</button>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="text-start">
                                    <h4>Subject</h4>
                                </div>
                                <select className="form-select" onChange={handleSelectSubject} id="selectSubject" aria-label="Default select example">
                                    <option value="">Select the Subject</option>
                                    <option value="COMP4127 INFORMATION SYSTEMS AUDIT AND CONTROL">COMP4127 INFORMATION SYSTEMS AUDIT AND CONTROL</option>
                                    <option value="COMP4136 DATA PROTECTION AND SECURITY">COMP4136 DATA PROTECTION AND SECURITY</option>
                                    <option value="COMP4442 SERVICE AND CLOUD COMPUTING">COMP4442 SERVICE AND CLOUD COMPUTING</option>
                                    <option value="EIE4117 CAPSTONE PROJECT">EIE4117 CAPSTONE PROJECT</option>
                                    <option value="EIE4118 INTRUSION DETECTION AND PENETRATION TEST">EIE4118 INTRUSION DETECTION AND PENETRATION TEST</option>
                                </select><br /><br />
                                <div className="text-start">
                                    <h4>Assessment Title</h4>
                                </div>
                                <input type="text" className="form-control" onChange={handleAssessmentTitle} /><br /><br />
                                <div className="text-start">
                                    <h4>Group Project</h4>
                                </div>
                                <select className="form-select" onChange={handleGroupProject} aria-label="Default select example">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select><br /><br />
                                <div className="text-start">
                                    <h4>Number of Member</h4>
                                </div>
                                <select className="form-select" onChange={handleNumberOfMember} aria-label="Default select example" disabled={!GroupProject} key={GroupProject}>
                                    <option value="">Number</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select><br /><br />
                                <div className="text-start">
                                    <h4>Due Date</h4>
                                </div>
                                <input type="date" onChange={handleDueDate} /><br /><br />
                                <div className="text-start">
                                    <h4>Requirements</h4>
                                </div>
                                <textarea className="form-control" rows="5" onChange={handleRequirements}></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-warning mt-5" onClick={handleAddAssessment}>Add</button>
                </div>
            </div>
            <button className="clear-button btn btn-danger mt-5" onClick={clearAll}>Clear All</button>


            <div className="AddAssessmentDetailBox">
                <AssessmentBox AddAssessment={AddAssessment} />
            </div>


            <div className="AssessmentImportanceCount">
                <AssessmentImportanceCount countIndexOne={countIndexOne} countIndexTwo={countIndexTwo} countIndexThree={countIndexThree} countIndexFour={countIndexFour} countIndexFive={countIndexFive} />
            </div>
        </>
    );
}

export default AddAssessments