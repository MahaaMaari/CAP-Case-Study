import cds from '@sap/cds';
const {GET,POST,PATCH,axios,expect}=cds.test(__dirname+'/..');
import Emp from '../srv/EmployeeService/Employee';
const EDIT=(url:string)=>{
    POST(url+'/ManageEmployee.draftEdit',{});
}
const SAVE=(url:string)=>{
    POST(url+'/ManageEmployee.draftActivate');
}
describe('Unit Tests for Employee',()=>{
    const handler={
        get(target:any,prop:string){
            return target[prop];
        }
        }
    let Employee:Emp;
    beforeEach(()=>{
        Employee=new Emp();
    });
    it('Generating Employee ID',async()=>{
        const proxy=new Proxy(Employee,handler);
        let req=new cds.Request({
            event:'CREATE',
            data:{empID:''}
        });
        await proxy.setEmployeeID(req);
        expect(req.data.empID).exist;
        expect(req.data.empID).to.have.length(10);
    })
})
