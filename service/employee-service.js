const empDao = require('../dao/employee-dao');


async function getAllEmpployee() {
  var result = null;
  try {
    await empDao.getEmployeesUserIdDB();

    if (rsStoreQ.rowCount > 0) {
      objStoreQ = rsStoreQ.rows[0];
    }

    const data = [
      {
        firstname: "สมชาย",
        lastname: "เข็มกลัด",
        age: 20,
      },
      {
        firstname: "วีระศักดิ์",
        lastname: "โตเล็ก",
        religion: 30,
      },
    ];


      result =data

  } catch (err) {
    console.log(`getAllEmpployee : ${err}`);
  }
  return result;
}


async function saveEmpployee(name,lastname,religion,position,status,retriement_year,education,subje) {
  var result = null;
  try {
    await empDao.saveEmpployeeDB(name,lastname,religion,position,status,retriement_year,education,subje);
  } catch (err) {
    console.log(`getAllEmpployee : ${err}`);
  }
  return result;
}



module.exports = {
    getAllEmpployee,
    saveEmpployee
};