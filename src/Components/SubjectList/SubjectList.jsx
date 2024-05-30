import { useState } from "react";
import SubjectDetail from "../SubjectDetail/SubjectDetail.jsx";

function SubjectList() {

    const subjects = [{ subject: "INFORMATION SYSTEMS AUDIT AND CONTROL", subjectCode: "COMP4127", credit: 3, lecturer: "Dr. Walter", examinationRequired: true, openBook: false },
    { subject: "DATA PROTECTION AND SECURITY", subjectCode: "COMP4136", credit: 3, lecturer: "Prof. Ajay Kumar", examinationRequired: true, openBook: false },
    { subject: "SERVICE AND CLOUD COMPUTING", subjectCode: "COMP4442", credit: 3, lecturer: "Dr. Zhang", examinationRequired: true, openBook: true },
    { subject: "CAPSTONE PROJECT", subjectCode: "EIE4117", credit: 6, lecturer: "Dr. Ho", examinationRequired: false, openBook: false },
    { subject: "INTRUSION DETECTION AND PENETRATION TEST", subjectCode: "EIE4118", credit: 3, lecturer: "Prof. Kaibo Hu", examinationRequired: true, openBook: false }
    ]

    const [activeIndex, setActiveIndex] = useState(null);

    const handleActiveIndex = (index) => {

        setActiveIndex(index);
    }

    const selectedSubject = subjects[activeIndex];

    return (
        <>
            <div className="col text-center d-flex justify-content-center align-items-center">
                <ul className="list-group">
                    {subjects.map((subject, index) => (
                        <li key={index} className={index === activeIndex ? "list-group-item active" : "list-group-item"} onClick={() => handleActiveIndex(index)}>{subjects[index].subject}</li>
                    ))}
                </ul>
            </div>
            <div className="col">
                <SubjectDetail selectedSubject={selectedSubject} />
            </div>
        </>
    );
}

export default SubjectList