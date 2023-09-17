const ResData = (data) => {
  delete data.message;
  delete data.Message;
  delete data.status;
  delete data.statusCode;
  return data;
};

module.exports = { ResData };
