import cds from '@sap/cds';
import { Employee } from '#cds-models/employee/srv/EmployeeService/ManageEmployee';
import { describe } from 'node:test';
const {GET,POST,PATCH,axios,expect}=cds.test(__dirname+'/..');
const EDIT=(url:string)=>{
    POST(url+'/ManageEmployee.draftEdit',{});
}
const SAVE=(url:string)=>{
    POST(url+'/ManageEmployee.draftActivate');
}
describe('test1',()=>{
    it('Test1',async()=>{
        let data=(await SELECT.from(Employee));
        expect(data).to.exist;
    })
})