const exp=require("express")
const projectApp=exp.Router()
projectApp.use(exp.json())

const {getEmpOfProject,getProjOfEmployee,getEmpOnBench}=require("../Controllers/project.controller")

projectApp.get("/project-assignment-api/:pid",getEmpOfProject)

projectApp.get("/employee-assignment-api/:eid",getProjOfEmployee)

projectApp.get("/bench",getEmpOnBench)
module.exports=projectApp