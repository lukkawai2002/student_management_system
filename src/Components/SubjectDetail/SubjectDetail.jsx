import "./SubjectDetail.css";

function SubjectDetail(props) {

    return (
        <div className="SubjectDetailBox">
            <h4>{props.selectedSubject.subject}</h4><br />
            <p>Subject Code: {props.selectedSubject.subjectCode}</p><br />
            <p>Credit: {props.selectedSubject.credit}</p><br />
            <p>Lecturer: {props.selectedSubject.lecturer}</p><br />
            <p>Examination Required: {props.selectedSubject.examinationRequired === null ? null : (props.selectedSubject.examinationRequired ? "Yes" : "No")}</p><br />
            <p>Open-book Examination: {props.selectedSubject.openBook === null ? null : (props.selectedSubject.openBook ? "Yes" : "No")}</p><br />
        </div>
    );
}

SubjectDetail.defaultProps = {
    selectedSubject: {
        subject: "Subject",
        subjectCode: null,
        credit: null,
        lecturer: null,
        examinationRequired: null,
        openBook: null
    }
}

export default SubjectDetail;