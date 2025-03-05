import cds from '@sap/cds';
const { GET, POST, PATCH, axios, expect } = cds.test(__dirname + '/..');
import Emp from '../srv/EmployeeService/Employee';
axios.defaults.auth = { username: 'admin', password: 'admin@123' };
const EDIT = (url: string) => {
    POST(url + '/employee.srv.EmployeeService.ManageEmployee.draftEdit', {});
}
async function SAVE(url: string): Promise<any> {
    return await POST(url + '/employee.srv.EmployeeService.ManageEmployee.draftActivate');
}
describe('Unit Tests for Employee', () => {
    const handler = {
        get(target: any, prop: string) {
            return target[prop];
        }
    }
    let Employee: Emp;
    beforeEach(() => {
        Employee = new Emp();
    });
    it('Generating Employee ID', async () => {
        const proxy = new Proxy(Employee, handler);
        let req = new cds.Request({
            event: 'CREATE',
            data: { empID: '' }
        });
        await proxy.setEmployeeID(req);
        expect(req.data.empID).to.exist;
        expect(req.data.empID).to.have.length(10);
    })
});

describe('basic OData', () => {
    it('$metadata', async () => {
        const { headers, status } = await GET('/odata/v4/manage-employee/$metadata');
        expect(status).to.equal(200);
        expect(headers).to.contain(
            {
                'odata-version': '4.0'
            }
        );
    });
    it('GET Employee', async () => {
        const { data } = await GET('/odata/v4/manage-employee/Employee');
        expect(data.value).to.be.an('array');
    });
});
describe('Creation of Employee', () => {
    var emp_UUID: String = "";
    it('Create Employee Draft', async () => {
        const { status, data } = await POST('/odata/v4/manage-employee/Employee', {});
        emp_UUID = data.ID;
        expect(data.empID).to.be.ok;
        expect(data.status_code).to.equal('01');
        expect(data.annualLeavesGranted).to.equal(20);
    });
    it('Activate Employee without manadatory Fields', async () => {
        expect(emp_UUID).to.be.ok;
        await PATCH(`/odata/v4/manage-employee/Employee(ID='${emp_UUID}',IsActiveEntity=false)`, {});
        try {
            await SAVE(`/odata/v4/manage-employee/Employee(ID='${emp_UUID}',IsActiveEntity=false)`);
            fail('An exception should have been raised')
        }
        catch (e) {
            expect(e).to.be.ok;
        }

    })
    it('Activate Employee without errors', async () => {
        expect(emp_UUID).to.be.ok;
        await PATCH(`/odata/v4/manage-employee/Employee(ID='${emp_UUID}',IsActiveEntity=false)`, {
            firstName:"Unit",
            lastName:"Test",
            bankName:"Unit Test Bank",
            bankAccountNumber:"123456",
            bankCode:"TEST001"
        });
        try {
            const{status,data}=await SAVE(`/odata/v4/manage-employee/Employee(ID='${emp_UUID}',IsActiveEntity=false)`);
            expect(status).to.be.ok;
            console.log(status);
            console.dir(data);
        }
        catch (e) {
            fail('An exception should not have been raised')
        }

    })    
})
