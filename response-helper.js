const ResKit = require("./response-kit");
const { ResData } = require("./response-data");

const ResHelper = ({ status, data, error }) => {
  let result = {
    statusCode: status || 500,
    message: "",
    success: true,
  };

  result.statusCode <= 199 || result.statusCode >= 225
    ? ((result.description = ResKit[result.statusCode].description),
      (result.success = false))
    : null;

  result.message = data?.message || ResKit[result.statusCode].message;

  const typeData = typeof data;
  typeData === "object"
    ? (result.data = ResData(data))
    : (result.data = data || error || null);

  return result;
};

module.exports = {ResHelper};