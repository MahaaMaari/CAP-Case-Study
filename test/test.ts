import cds from '@sap/cds';
import { Employee } from '#cds-models/employee/srv/EmployeeService/ManageEmployee';
const {GET,POST,PATCH,axios,expect}=cds.test(__dirname+'/..');
const EDIT=(url:string)=>{
    POST(url+'/ManageEmployee.draftEdit',{});
}