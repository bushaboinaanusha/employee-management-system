function EmployeeList(props) {
    return (
        <div>
            <h2>
                Employee List
            </h2>
            {
                props.employees.map((employee) => (
                    <p key={employee.id}>
                        {employee.name}-{employee.department}-{employee.salary}
                    </p>
                ))}
        </div>
    );
}

export default EmployeeList;