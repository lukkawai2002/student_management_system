import "./AssessmentBox.css"

function AssessmentBox(props) {

    return (
        <div>
            {props.AddAssessment.map((assessment, index) => (
                <div key={index} className="AssessmentBox">
                    <img className="AssessmentBoxImg" src={assessment.iconURL} /><br /><br />
                    <p id="SubjectTitle">{assessment.SelectSubject}</p>
                    <p>{assessment.AssessmentTitle}</p>
                    <p>Group Project: {assessment.GroupProject ? 'Yes' : 'No'}</p>
                    <p>Number of Member: {assessment.NumberOfMember === null ? "Not Available" : assessment.NumberOfMember}</p>
                    <p>Due Date: {assessment.DueDate}</p>
                    <p>Requirements: {assessment.Requirements}</p>
                </div>
            ))}
        </div>
    );
}

export default AssessmentBox;