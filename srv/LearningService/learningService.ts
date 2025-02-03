import { LearningMD } from "#cds-models/employee/srv/EmployeeService/ManageEmployee";
import { Request,ApplicationService } from "@sap/cds";

class LearningService extends ApplicationService{
    init(){
        this.before('DELETE','LearningMD',this.beforeDeleteMasterData);
        return super.init();
    }
    async beforeDeleteMasterData(req:Request){
        const {LearningMD}=this.entities;
        let data=await SELECT.from(LearningMD).columns(['count(to_Learnings.ID) as c']).where({ID:req.data.ID});
        if(data[0]?.c>0){
            req.reject('Cannot delete the learning as it has employees assigned');
        }
    }
}
export default LearningService;