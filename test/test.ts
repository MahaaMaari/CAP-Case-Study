import cds from '@sap/cds';
import Employee from '../srv/EmployeeService/Employee';
const {GET,POST,PATCH,axios,expect}=cds.test(__dirname+'/..');
const EDIT=(url:string)=>{
    POST(url+'/ManageEmployee.draftEdit',{});
}
const SAVE=(url:string)=>{
    POST(url+'/ManageEmployee.draftActivate');
}
describe('Unit tests for Employee', () => { 
    it('Generate Employee ID',()=>{
        
    })
})
