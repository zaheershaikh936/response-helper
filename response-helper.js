const ResKit = require("./response-kit");

const ResHelper = ({ status, data }) =>{
  let result = {
    statusCode: status || 200,
    message: '',
    success: true,
  };

  result.statusCode <= 199 || result.statusCode >= 225
    ? ((result.description = ResKit[result.statusCode].description),
      (result.success = false))
    : null;
  result.message = data?.message || ResKit[result.statusCode].message;
  result.data = data || null;
  return result;
};

module.exports = {ResHelper};