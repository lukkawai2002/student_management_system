import NavBar from "./Components/NavBar/NavBar.jsx"
import SubjectList from "./Components/SubjectList/SubjectList.jsx"
import AddAssessments from "./Components/AddAssessments/AddAssessments.jsx"
import NoteTaking from "./Components/NoteTaking/NoteTaking.jsx"
import PastAcademicResult from "./Components/PastAcademicResult/PastAcademicResult.jsx"
import CGPACalculation from "./Components/CGPACalculation/CGPACalculation.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {

  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>

      <div className="container text-center my-5" id="this_semester_subjects">
        <h1 className="display-1">This Semester Subjects</h1>
        <div className="row">
          <SubjectList />
        </div>
      </div>

      <hr />

      <div className="container text-center my-5" id="add_assessments">
        <h1 className="display-1">Add Assessments</h1>
        <AddAssessments />
      </div>

      <hr />

      <div className="container text-center my-5" id="note_taking">
        <h1 className="display-1">Note Taking</h1>
        <NoteTaking />
      </div>

      <hr />

      <div className="container text-center my-5" id="past_academic_results">
        <h1 className="display-1">Past Academic Results</h1>
        <PastAcademicResult />
      </div>

      <hr />

      <div className="container text-center my-5" id="cgpa_calculation">
        <h1 className="display-1">CGPA Calculation</h1>
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">A+</th>
              <th scope="col">A</th>
              <th scope="col">A-</th>
              <th scope="col">B+</th>
              <th scope="col">B</th>
              <th scope="col">B-</th>
              <th scope="col">C+</th>
              <th scope="col">C</th>
              <th scope="col">C-</th>
              <th scope="col">D+</th>
              <th scope="col">D</th>
              <th scope="col">F</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">4.3</td>
              <td>4.0</td>
              <td>3.7</td>
              <td>3.3</td>
              <td>3.0</td>
              <td>2.7</td>
              <td>2.3</td>
              <td>2.0</td>
              <td>1.7</td>
              <td>1.3</td>
              <td>1.0</td>
              <td>0.0</td>
            </tr>
          </tbody>
        </table>

        <div className="row my-5">
          <CGPACalculation />
        </div>
      </div>

      <div className="Footer" style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </>
  )
}

export default App
