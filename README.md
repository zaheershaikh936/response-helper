# Better Response Helper

The "Better Response Helper" is a utility library that simplifies and standardizes the way responses received from a backend server are processed and managed in client-side applications. In modern web development, it's crucial to have a consistent approach to parsing and handling responses to ensure a seamless user experience and efficient error management. This library provides a set of tools and best practices to achieve just that.

## Features

- Unified Response Handling: Achieve a uniform response processing workflow across your client-side codebase, ensuring a consistent user experience regardless of the data source.
- Error Management: Easily detect and handle errors in a standardized way. This library provides mechanisms to handle common error types, making it straightforward to communicate error messages to users and take appropriate actions.
- Data Transformation: Streamline the transformation of response data into usable formats, such as parsing JSON or handling different content types, without having to rewrite code for each API call.
- Status Code Interpretation: Automatically interpret HTTP status codes and define actions to be taken for different statuses, whether it's a successful response, redirection, or an error.
- Customization: Adapt the response handling process to your specific application needs while maintaining a common structure across your codebase.

## Getting Started

To start using the "Better Response Helper" library in your client-side application, follow the installation and usage instructions provided in the documentation. The documentation includes comprehensive examples and configuration options to help you integrate the library into your project smoothly.

## Usage/Examples

### Response Structure

**Data on Success:**

```json
{
    "statusCode": 100 to 511,
    "message": "some message here",
    "success": true or false,
    "data": data
}
```
**Data on Failure:**

```json
{
    "statusCode": 100 to 511,
    "message": "some message here",
    "success": true or false,
    "description": "some description why the API failed",
    "data": data
}
```
### Configuration Options
The latest enhancement introduces configuration options for the ResHelper function. Users can now customize the behavior of the library by providing a configuration object, allowing for flexibility in defining default values for status codes, messages, and success statuses.

### Example Usage

**Basic Usage with Default Configuration**

```javascript
const { ResHelper, defaultConfig } = require("better-response-helper");

// Using the default configuration

const result = ResHelper({ status: 404 });
console.log(result);

// Output: { statusCode: 404, message: 'Not Found', success: false, data: null, description: 'The server can’t find the requested resource, and no redirection has been set. 404 errors can harm your SEO efforts.' }
```
**Custom Configuration**
```javascript


const { ResHelper, defaultConfig } = require("better-response-helper");

// Custom configuration
const customConfig = {
  defaultStatusCode: 503,
  defaultMessage: "Service Unavailable",
  defaultSuccess: false,
};

// Using the custom configuration
const result = ResHelper({ status: 503 }, customConfig);
console.log(result);
// Output: { statusCode: 503, message: 'Service Unavailable', success: false, data: null, description: 'The server is unable to process the request. This often occurs when a server is overloaded or down for maintenance.' }
```
## Contributing

Contributions are always welcome!

For contributions always welcome.

Please adhere to this project's `code of conduct`.

Contributing
We welcome contributions from the community! 
If you have suggestions, bug reports, or would like to contribute code, please read our Contribution Guidelines to get started.
## Acknowledgements

We extend our appreciation to the open-source community and all contributors who have made this library possible. Your support and feedback drive our commitment to continuously improve and maintain this project.
## License

[MIT](https://choosealicense.com/licenses/mit/)

This library is open-source and distributed under the MIT. You are encouraged to use it in your projects and share any enhancements or modifications with the community.
## Authors

- [@Zaheer](https://github.com/zaheershaikh936)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
