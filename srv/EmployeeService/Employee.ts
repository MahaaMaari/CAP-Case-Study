import {Request} from '@sap/cds';
import { courseType } from "#cds-models/employee/db";
class Employee {
    public entities: any;
    public testMode:boolean=false;
    constructor() {
    }
    public async beforeCreateActive(req:Request){
        await this.generateEmail(req);
        await this.setStatus(req);
        await this.addLearnings(req);
    }
    public async onAction(req:Request){
        switch(req.event){
            case 'inActive':
                await this.handleInactive(req);
                break;
            case 'addProject':
                await this.addProject(req);
        }
    }
    public async beforeCreateDraft(req:Request){
        await this.setEmployeeID(req);
    }
    public async beforeUpdateDraft(req:Request){
        await this.validateBankAcc(req);
    }
    public async afterDeleteActive(results:object[]|any,req:Request){
        await this.deleteLearnings(results,req);
    }
    private async addProject(req:Request){
        let empID_ID:any=req.params[0];
        await INSERT.into('Project').entries([{
            employeeID_ID:empID_ID['ID'],
            projectID_ID:req.data.projectID
        }]);
    }
    private async setEmployeeID(req:Request){
        let currentNumber:{currentNumber:number}=await SELECT.one.from('NumberRange').columns('currentNumber').where({name:'Employee'}) as {currentNumber:number};
        if(currentNumber){
            req.data.empID=`EMP${currentNumber.currentNumber.toString().padStart(7,'0')}`;
            console.log(req.data.empID);
            await UPDATE
            .entity('NumberRange')
            .set({currentNumber:currentNumber.currentNumber+1})
            .where({name:'Employee'});
        }
    }
    private async generateEmail(req: Request) {
        let firstName = String(req.data.firstName).trim();
        let lastName = String(req.data.lastName).trim();
        let email = `${firstName}.${lastName}`;
        console.log(email);
        let exists = await SELECT.from(this.entities?.Employee).columns(['emialID']).where({ emialID: { like: `%${email}%` } });
        console.log(exists);
        if (exists.length > 0) {
            let lastNumber;
            let greatestNumber = 0;
            for (let i of exists) {
                [, lastNumber] = i.emialID.split(`${req.data?.lastName}`);
                if (parseInt(lastNumber) > greatestNumber) {
                    greatestNumber = parseInt(lastNumber);
                }
            }
            if (greatestNumber > 0) {
                let Number = greatestNumber;
                Number += 1;
                email = `${email}${Number}`;
            }
            else {
                email = `${email}1`;
            }
        }
        email=email.toLowerCase();
        req.data.emialID = `${email}@company.com`;
    }
    private async setStatus(req: Request) {
        req.data.status_code = '03';
        req.data.annualLeavesGranted=20;
        req.data.deletable = false;
    }
    private async handleInactive(req:Request) {
        let empID = req.params[0];
        let { Employee } = this.entities;
        try{
        let subrc = await UPDATE.entity(Employee).with({
            status_code: '05',
            deletable: true
        }).where(empID);
    }
    catch(error){

    }
    req.notify('Employee Successfully set to Inactive');
    };
    private async addLearnings(req: Request) {
        let { Learnings, LearningMD } = this.entities;
        let learning= [];
        let cources= [];
        try {
            cources = await SELECT.from(LearningMD).where({ assignToType_code: courseType.Onboarding });
        }
        catch (error) {
            req.notify('No Learnings for onboarding exists');
        }
        for (let i of cources) {
            learning.push({
                employeeID_ID: req.data.ID,
                learningID_ID: i.ID,
                status_code: '01'
            });
        };
        await INSERT.into(Learnings).entries(learning);
    }
    private async validateBankAcc(req:Request){
        let bankAcc=req.data.bankAccountNumber;
        console.log(bankAcc)
        if (bankAcc && isNaN(bankAcc)){
            req.error('Please only enter valid bank account number','bankAccountNumber');
        }
        let existingAcc=await
        SELECT.one.from('Employee').where({bankAccountNumber:bankAcc}).columns(['bankAccountNumber']);
        if(existingAcc){
            req.error('The Bank account number already exists','bankAccountNumber');
        }
    }
    private isEmpty(obj:Object){
        return Object.keys(obj).length==0;
    }
    private async deleteLearnings(results:object[]|any,req:Request){
        let count=await DELETE.from('Learning').where({employeeID_ID:req.data.ID});
        if(count>0){
            req.info({
                message:'The corresponding Learnings for the customer have also been deleted',
                code:'204',
                target:req.target.name
            });
        }
    }
}
export default Employee;