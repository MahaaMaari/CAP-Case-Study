import { ApplicationService,Request } from "@sap/cds";
import E from "./Employee";
class EmployeeService extends ApplicationService{
    EmployeeHandler:E;
    constructor(...args:any[]){
        super(...args);
        this.EmployeeHandler=new E();
    }
    init(): Promise<void> {
        this.EmployeeHandler.entities=this.entities;
        this.on(['inActive','addProject'],'Employee',this.EmployeeHandler.onAction.bind(this.EmployeeHandler));
        this.before('CREATE','Employee',this.EmployeeHandler.beforeCreateActive.bind(this.EmployeeHandler));
        this.before('CREATE','Employee.drafts',this.EmployeeHandler.beforeCreateDraft.bind(this.EmployeeHandler));
        this.before('UPDATE','Employee.drafts',this.EmployeeHandler.beforeUpdateDraft.bind(this.EmployeeHandler));
        this.after('DELETE','Employee',this.EmployeeHandler.afterDeleteActive.bind(this.EmployeeHandler));
        return super.init();
    };
}
export default EmployeeService;