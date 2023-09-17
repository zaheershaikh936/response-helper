const { ResHelper } = require("./index");

const response = {
  status: 200,
  data: {
    message: "some message here",
    status: 500,
  },
};
const result = ResHelper(response);

console.log(result);
