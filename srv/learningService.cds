namespace employee.srv.LearningService;
using { employee.db.Employee as Emp } from '../db/Employee';
using { employee.db.Learning } from '../db/Learning';
using { employee.db.LearningMasterData } from '../db/LearningMD';
@(
    requires:['authenticated-user'],
    impl:'srv/LearningService/learningService.ts'
)
service LearningService {
    entity LearningMD as projection on LearningMasterData;
    entity Learnings as projection on Learning;
    @readonly entity Employee as projection on Emp;
}




