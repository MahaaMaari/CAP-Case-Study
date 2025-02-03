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
<<<<<<< HEAD
axios.defaults.headers['content-type']='application/json';
axios.defaults.auth={username:'admin',password:'admin@123'};

describe('basic query',() => 
    {
        it('test',async()=>{
            const data=SELECT.from(Employee);
            expect(data).to.exist;
        })
     }
)
=======
describe('test1',()=>{
    it('Test1',async()=>{
        let data=(await SELECT.from(Employee));
        expect(data).to.exist;
    })
})
>>>>>>> 7afaa655e838d47afdfc1183cf3921a293f76249
