import cds from '@sap/cds';
const {GET,POST,PATCH,axios,expect}=cds.test(__dirname+'/..');
import Emp from '../srv/EmployeeService/Employee';
axios.defaults.auth={username:'admin',password:'admin@123'};
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
        expect(req.data.empID).to.exist;
        expect(req.data.empID).to.have.length(10);
    })
});

describe('basic OData',()=>{
    it('$metadata',async()=>{
        const{headers,status}=await GET('/odata/v4/manage-employee/$metadata');
        expect(status).to.equal(200);
        expect(headers).to.contain(
            {
                'odata-version':'4.0'
            }
        );
    });
    it('GET Employee',async()=>{
        const{data}=await GET('/odata/v4/manage-employee/Employee');
        expect(data.value).to.be.an('array');
    });
    it('Create Employee',async()=>{
        const {status,data}=await POST('/odata/v4/manage-employee/Employee',{
            ID:cds.utils.uuid()
        });
        console.log(status);
    })
})
