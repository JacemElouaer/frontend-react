import axios from  'axios';   
const  Employees_API_BASE_URL =  'http://localhost:9090/api/v1/employees'

class  EmployeeService {
    getEmployees() {
        return  axios.get(Employees_API_BASE_URL); 
    }
}
export  default new EmployeeService(); 