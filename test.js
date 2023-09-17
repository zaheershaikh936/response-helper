const { ResHelper } = require("./index");

const response = {
  status: 500,
  data: {
    message: "some message here",
  },
};
const result = ResHelper(response);

console.log(result);
