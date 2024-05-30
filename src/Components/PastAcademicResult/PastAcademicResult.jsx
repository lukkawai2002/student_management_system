import { useState } from "react";

function PastAcademicResult() {

    const Semester1_2022_2023 = [{ subjectCode: "AMA3100", subjectTitle: "NUMBER, COMBINATORICS AND STATISTICS", credit: 3, grade: "A+" },
    { subjectCode: "COMP3335", subjectTitle: "DATABASE SECURITY", credit: 3, grade: "B" },
    { subjectCode: "EIE1Q01", subjectTitle: "ESSENTIAL COMPONENTS OF GENERAL EDUCATION", credit: 0, grade: "P" },
    { subjectCode: "EIE3120", subjectTitle: "NETWORK TECHNOLOGIES AND SECURITY", credit: 3, grade: "A-" },
    { subjectCode: "EIE3333", subjectTitle: "DATA AND COMPUTER COMMUNICATIONS", credit: 3, grade: "A-" },
    { subjectCode: "ELC1A09", subjectTitle: "LANGUAGE FOR THE WORKPLACE OF THE FUTURE", credit: 3, grade: "B" }
    ]

    const Semester1_2022_2023_CGPA = "3.54";

    const Semester2_2022_2023 = [{ subjectCode: "COMP3334", subjectTitle: "COMPUTER SYSTEMS SECURITY", credit: 3, grade: "B+" },
    { subjectCode: "COMP3421", subjectTitle: "WEB APPLICATION DESIGN AND DEVELOPMENT", credit: 3, grade: "B" },
    { subjectCode: "COMP3512", subjectTitle: "LEGAL ASPECTS, PROFESSIONALISM AND ETHICS OF COMPUTING", credit: 3, grade: "B" },
    { subjectCode: "EIE3117", subjectTitle: "INTEGRATED PROJECT", credit: 3, grade: "B+" },
    { subjectCode: "EIE4116", subjectTitle: "SURVEILLANCE STUDIES AND TECHNOLOGIES", credit: 3, grade: "A-" },
    { subjectCode: "ELC3531", subjectTitle: "PROFESSIONAL COMMUNICATION IN ENGLISH FOR ENGINEERING STUDENTS", credit: 2, grade: "B" }
    ]

    const Semester2_2022_2023_CGPA = "3.38";

    const Semester1_2023_2024 = [{ subjectCode: "CHC1M38P", subjectTitle: "INTRODUCTORY HISTORY OF CHINA", credit: 3, grade: "B+" },
    { subjectCode: "CLC3241P", subjectTitle: "PROFESSIONAL COMMUNICATION IN CHINESE", credit: 2, grade: "B-" },
    { subjectCode: "COMP4334", subjectTitle: "PRINCIPLES AND PRACTICE OF INTERNET SECURITY", credit: 3, grade: "B" },
    { subjectCode: "CSE3S01", subjectTitle: "BUILT ENVIRONMENT ENHANCEMENT FOR UNDERPRIVILEGED COMMUNITIES", credit: 3, grade: "A-" },
    { subjectCode: "EIE4113", subjectTitle: "WIRELESS AND MOBILE SYSTEMS", credit: 3, grade: "A+" },
    { subjectCode: "EIE4117", subjectTitle: "CAPSTONE PROJECT", credit: 6, grade: "L*" }
    ];

    const Semester1_2023_2024_CGPA = "3.40";

    const getCGPA = () => {
        switch (selectYearSemester) {
            case "1":
                return Semester1_2022_2023_CGPA;
            case "2":
                return Semester2_2022_2023_CGPA;
            case "3":
                return Semester1_2023_2024_CGPA;
            default:
                return null;
        }
    }

    const [selectYearSemester, setSelectYearSemester] = useState("");

    const handleSelectChange = (event) => {
        setSelectYearSemester(event.target.value);
    }

    const getYearSemesterData = () => {
        switch (selectYearSemester) {
            case "1":
                return Semester1_2022_2023;
            case "2":
                return Semester2_2022_2023;
            case "3":
                return Semester1_2023_2024;
            default:
                return [];
        }
    }

    return (
        <div className="PastAcademicResult">
            <div className="YearSemesterFilter">
                <select value={selectYearSemester} onChange={handleSelectChange} className="form-select">
                    <option value="">Select the Year and Semester</option>
                    <option value="1">2022-2023 Semester 1</option>
                    <option value="2">2022-2023 Semester 2</option>
                    <option value="3">2023-2024 Semester 1</option>
                </select>
            </div><br /><br />
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Subject Code</th>
                        <th scope="col">Subject Title</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {getYearSemesterData().map((subject, index) => (
                        <tr key={index}>
                            <th scope="row">{subject.subjectCode}</th>
                            <td>{subject.subjectTitle}</td>
                            <td>{subject.credit}</td>
                            <td>{subject.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            <h3>CGPA: {getCGPA()}</h3>
        </div>
    );
}

export default PastAcademicResult