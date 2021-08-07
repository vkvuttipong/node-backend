require("dotenv").config();

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: 5432,
});

async function getEmployeesUserIdDB(user_id) {
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASS);
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_NAME);

  let result;
  try {
    const result = await pool.query(
      "SELECT  NAME,LASTNAME,RELIGION,POSITION,STATUS,RETRIEMENT_YEAR,EDUCATION,SUBJECT  " +
        "FROM EMPLOYEE "
      // [user_id]
    );
    return result;
  } catch (err) {
    throw err;
  }
}

async function saveEmpployeeDB(
  name,
  lastname,
  religion,
  position,
  status,
  retriement_year,
  education,
  subject
) {
  let result;
  try {
    const result = await pool.query(
      " INSERT INTO snd_store " +
        " (NAME,LASTNAME,RELIGION,POSITION, " +
        " STATUS,RETRIEMENT_YEAR,EDUCATION,SUBJECT)" +
        " values ($1,$2,$3,$4,$5," +
        " $6,$7,$8 ) " +
        " RETURNING id ",
      [
        name,
        lastname,
        religion,
        position,
        status,
        retriement_year,
        education,
        subject
      ]
    );
    return result;
  } catch (err) {
    throw err;
  }
}



module.exports = {
  getEmployeesUserIdDB,
  saveEmpployeeDB,
};




// async function UpdateStoredata(
//   store_id,
//   seller_id,
//   store_name,
//   active,
//   store_about,
//   open_time,
//   close_time,
//   update_on,
//   isorder_cn
// ) {
//   let result;
//   try {
//     const result = await pool.query(
//       " update snd_store " +
//         " set store_name = $3,isactive= $4,store_about= $5,open_time= $6,close_time= $7,update_on= $8 , isorder_cn =$9 " +
//         " where store_id = $1 and seller_id = $2",
//       [
//         store_id,
//         seller_id,
//         store_name,
//         active,
//         store_about,
//         open_time,
//         close_time,
//         update_on,
//         isorder_cn,
//       ]
//     );
//     return result;
//   } catch (err) {
//     throw err;
//   }
// }


// async function RemoveToken(user, type) {
//   let result;
//   try {
//     const result = await pool.query(
//       "delete from snd_token  " + "where  user_id =  $1 and type = $2",
//       [user, type]
//     );
//     return result;
//   } catch (err) {
//     throw err;
//   }
// }


