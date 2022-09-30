import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EmployeesList from "./employee/EmployeesList";
import Header from "./header/Header";
import Loading from "./UI/Loading";
import { initializeDatafromDatabase } from "../redux/Actions";

const Dashboard = () => {

    const isEmployeeLoading = useSelector(state => state.isEmployeeLoading);
    const allEmployees = useSelector(state => state.employee);

    const selectedEmployoyees =
        allEmployees
                .filter(employee => employee.isChecked)
    
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(initializeDatafromDatabase())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header selectedEmployoyees = {selectedEmployoyees}/>
            {
                !isEmployeeLoading &&
                <EmployeesList
                    allEmployees={allEmployees}
                />
            }
            {
                isEmployeeLoading &&
                <Loading />
            }
        </>
    )
}

export default Dashboard;
