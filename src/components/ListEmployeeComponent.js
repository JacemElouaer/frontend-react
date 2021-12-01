import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)  
        this.state = {
                employees : []
        }        
    } 
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            console.log(res.data)
            this.setState({
                employees : res.data}) ;  
        })
    }
    
    render() {
        return (
            <div> 
                <h2 className="text-center"> Employees List </h2>
                <div className="row">
                    <table className="table table-striped table-bordered"> 
                        <thead>
                            <tr>
                                <th> Employee Firts Name</th>
                                <th> Employee last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions </th>
                            </tr>    

                        </thead> 
                        <tbody> 
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>  
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.email}</td>
                                        <td>

                                        </td>
                                    </tr>
                                )
                            }
                        
                        </tbody>  
                    </table>
                </div>
            </div>
        )
    }
}
export default ListEmployeeComponent