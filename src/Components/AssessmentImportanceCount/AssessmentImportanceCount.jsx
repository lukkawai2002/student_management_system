
function AssessmentImportanceCount(props) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col" style={{width: "170px"}}>Importance Level</th>
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                    <th scope="col">4</th>
                    <th scope="col">5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Total:</th>
                    <td>{props.countIndexOne}</td>
                    <td>{props.countIndexTwo}</td>
                    <td>{props.countIndexThree}</td>
                    <td>{props.countIndexFour}</td>
                    <td>{props.countIndexFive}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default AssessmentImportanceCount