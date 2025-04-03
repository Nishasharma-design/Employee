import classes from "./EmployeeFilter.module.scss";

const EmployeeFilter = ({ onFilterChange }: { onFilterChange: (value: string) => void }) => {


    return (
        <div className={classes.filter_container}>
            <label>Filter by Contract Type:</label>
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">All</option>
                <option value="permanent">Permanent Staff</option>
                <option value="contract">Contract Staff</option>
            </select>
        </div>
    );

};

export default EmployeeFilter;