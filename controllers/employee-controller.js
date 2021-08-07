const empService = require('../service/employee-service');


//GET
const getAllEmpployee = async (req, res, next) => {

    let userID = 1;
    let result = await empService.getAllEmpployee(userID);

    console.log(JSON.stringify(result))

    res.json({ data: result });
};

//GET
const getAllEmpployeeByID = async (req, res, next) => {
    let id = req.params.id

    console.log(id);

    let userID = 1;
    let result = await empService.getAllEmpployee(userID);

 
    res.json({ data: result });
};

//POST  
const saveEmpployee = async(req, res, next) => {
 
    let firstname =req.body.firstname
    let lastname =req.body.lastname
    let age =req.body.age

    let result = await empService.saveEmpployee(userID);

    console.log(firstname);
    console.log(lastname);
    console.log(age);
    res.json({ message: null });
};

module.exports = {
    getAllEmpployee,
    saveEmpployee,
    getAllEmpployeeByID
};