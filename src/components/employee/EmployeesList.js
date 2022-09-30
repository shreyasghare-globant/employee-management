import {
    useEffect,
    useState,
} from "react";

import { useDispatch } from "react-redux";

import {
    setAllEmployeesSelectedStatus,
    setEmployeesSelectedStatus,
    startEmployeesSelectedStatus
} from "../../redux/Actions";

import EmployeeData from "./EmployeeData";
import Pagination from "../UI/Pagination";
import Checkbox from "../UI/CheckBox";

const EmployeesList = (props) => {

    const {
        allEmployees
    } = props;

    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const dispatcher = useDispatch();

    const selectAll = 
        <Checkbox 
            checkedStatus={selectAllChecked}
            setCheckedStatus={(val)=> setSelectAllChecked(val)}
        />

    const headerLabel = [selectAll, 'Name', 'Email', 'Address', 'Phone', 'Actions'];

    const sortedEmployees = [...allEmployees].sort((a, b) => {
        return b.id - a.id;
    });

    const totalEntries = allEmployees.length;

    const endIndex = currentPage * pageSize;

    const startIndex = endIndex - pageSize;

    const currentEmployees = 
        sortedEmployees
            .slice(startIndex, endIndex)
            .map(employee => ({...employee}));

    useEffect(()=> {
        if(selectAllChecked) {
            currentEmployees.forEach(employee =>
                dispatcher(setEmployeesSelectedStatus({
                    ...employee,
                    id: employee.id,
                    isChecked: true,
                })));
        } else {
            dispatcher(setAllEmployeesSelectedStatus(false));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectAllChecked]);

    const currentPageChangeHandler = (page) => {
        setSelectAllChecked(false);
        setCurrentPage(page)
    }

    const pageSizeChangeHandler = (size) => {
        setCurrentPage(1);
        setPageSize(size);
    }

    const setCheckedStatusHandler = (isChecked, employee) => {

        dispatcher(startEmployeesSelectedStatus({
            ...employee,
            isChecked,
        }))
    }

    return (
        <>
            <table className="employee-list-container">
                <thead className="employee-list-container__header">
                    <tr key="header" className="employee-list-container__header">
                    {
                        headerLabel.map((label, i) =>
                                <td key = {i}>{label}</td>
                        )
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        Boolean(currentEmployees.length) &&
                        currentEmployees.map(
                            employee =>
                                <EmployeeData
                                    key = {employee.id}
                                    employee = {employee}
                                    setCheckedStatus = {(status, emp) => setCheckedStatusHandler(status, emp)}
                                />
                        )
                    }
                </tbody>
            </table>
            {
                Boolean(currentEmployees.length) &&
                <div className="employee-list-container__footer">
                    <Pagination 
                        pageSize = {pageSize}
                        totalEntries = {totalEntries}
                        setCurrentPage = {(page) => currentPageChangeHandler(page)}
                        setPageSize = {(size) => pageSizeChangeHandler(size)}
                        currentPage = {currentPage}
                    />
                </div>
            }

            {
                !Boolean(currentEmployees.length) &&
                <div className="align-center">No employess to show.</div>
            }
        </>
    )
}

export default EmployeesList;
