const ResKit = require("./response-kit");
const { ResData } = require("./response-data");

const defaultConfig = {
  defaultStatusCode: 500,
  defaultMessage: "Internal Server Error",
  defaultSuccess: false,
};

const ResHelper = ({ status, data, error }, config = {}) => {
  // Merge user config with default config
  const mergedConfig = { ...defaultConfig, ...config };

  let result = {
    statusCode: status || mergedConfig.defaultStatusCode,
    message: ""
    success: mergedConfig.defaultSuccess,
  };

  result.statusCode <= 199 || result.statusCode >= 225
    ? (
        (result.description = ResKit[resultstatusCode].description),
        (result.success = false)
      )
    : null;

  result.message = data?.message || ResKit[result.statusCode].message;

  const typeData = typeof data;
  typeData === "object"
    ? (result.data = ResData(data)) 
    : (result.data = data || error || null); 

  return result;
};

module.exports = { ResHelper, defaultConfig };
