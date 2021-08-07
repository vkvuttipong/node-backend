let { MESSAGES } = require("./responseCode");

class Response {
 create(returncode, data) {
  let responseBody = {
   code: null,
   message: null
  };
    responseBody.code = MESSAGES.MSG6.code
    responseBody.message = MESSAGES.MSG6.message
    responseBody.data = data
    

  return {
   "statusCode": 200,
   headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
   },
   body: JSON.stringify(data),
   isBase64Encoded: false
  };
 }
};

module.exports = {
 Response: new Response()
};
