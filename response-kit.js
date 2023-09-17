const messageResponse = {
  100: {
    statusCode: 100,
    message: "Continue",
    description:
      "This interim status code means the server received the initial request, and the client should continue.",
  },
  101: {
    statusCode: 101,
    message: "Switching protocols",
    description:
      "This code is a response to an Upgrade header field request and states the protocol the server will switch to.",
  },
  102: {
    statusCode: 102,
    message: "Processing",
    description:
      "This response indicates the server received and is processing the request, but no response is yet available.",
  },
  103: {
    statusCode: 103,
    message: "Early hints",
    description:
      "This code is used with the Link header and allows the browser to preload resources while the server prepares a response.",
  },
  200: {
    statusCode: 200,
    message: "Success",
    description:
      "This is the standard response for successful HTTP requests. The actual meaning of the response depends on the request method used:",
  },
  201: {
    statusCode: 201,
    message: "Created",
    description:
      "The request succeeded and a new resource was created. This is usually the response after POST or PUT requests.",
  },
  202: {
    statusCode: 202,
    message: "Accepted",
    description:
      "The request was accepted but is still in progress. It’s used for cases where another server handles the request or for batch processing.",
  },
  203: {
    statusCode: 203,
    message: "Non-Authoritative Information",
    description:
      "The data returned isn’t from the origin server. Instead, it’s a modified version collected from a third party.",
  },
  204: {
    statusCode: 204,
    message: "No Content",
    description:
      "The request was successfully processed, but there is no content. The headers may be useful.",
  },
  205: {
    statusCode: 205,
    message: "Reset Content",
    description:
      "The server fulfilled the request but asked the user to reset the document.",
  },
  206: {
    statusCode: 206,
    message: "Partial Content",
    description:
      "The server is delivering part of the resource. This response is used when the client sends a Range header to request only part of a resource.",
  },
  207: {
    statusCode: 207,
    message: "Multi-Status",
    description:
      "Provides the statuses of multiple resources, depending on how many sub-requests were made.",
  },
  208: {
    statusCode: 208,
    message: "Already Reported",
    description:
      "The members of a DAV:propstat element have already been listed and won’t be included again.",
  },
  226: {
    statusCode: 226,
    message: "IM used",
    description:
      "The server completed a GET request. And the response indicates one or more instance-manipulation results.",
  },
  300: {
    statusCode: 300,
    message: "Multiple Choice",
    description:
      "The request has more than one possible response, and the user should choose one of them.",
  },
  301: {
    statusCode: 301,
    message: "Moved Permanently",
    description:
      "This redirect status code indicates the requested resource has permanently moved to a new URL. The browser displays the new URL.",
  },
  302: {
    statusCode: 302,
    message: "Found",
    description:
      "Previously known as 'Moved Temporarily,' this code indicates the requested resource has temporarily moved to a new URL.",
  },
  303: {
    statusCode: 303,
    message: "See Other",
    description:
      "The server redirects the user to the requested resource with a GET request at another URL.",
  },
  304: {
    statusCode: 304,
    message: "Not Modified",
    description:
      "Used for caching purposes. The response hasn’t been modified, so the client can continue to use the same cached version of the requested resource.",
  },
  307: {
    statusCode: 307,
    message: "Temporary Redirect",
    description:
      "The requested resource temporarily moved to a different URL. The only difference vis-a-vis the 302 code is the user must not change the HTTP method used.",
  },
  308: {
    statusCode: 308,
    message: "Permanent Redirect",
    description:
      "The requested resource permanently moved to a different URL. The difference between this code and 301 is the user must not change the HTTP request method.",
  },
  400: {
    statusCode: 400,
    message: "Bad Request",
    description:
      "The server can’t or won’t process the request due to a client error. For example, invalid request message framing, deceptive request routing, size too large, etc.",
  },
  401: {
    statusCode: 401,
    message: "Unauthorized",
    description:
      "The user doesn’t have valid authentication credentials to get the requested resource.",
  },
  402: {
    statusCode: 402,
    message: "Payment Required",
    description:
      "Reserved for future use; it was initially intended for digital payment systems. It’s very rarely used, and no standard convention regulates it.",
  },
  403: {
    statusCode: 403,
    message: "Forbidden",
    description:
      "The client doesn’t have access rights to the content. For example, it may require a password. Unlike the 401 HTTP error code, the server does know the client’s identity.",
  },
  404: {
    statusCode: 404,
    message: "Not Found",
    description:
      "The server can’t find the requested resource, and no redirection has been set. 404 errors can harm your SEO efforts.",
  },
  405: {
    statusCode: 405,
    message: "Method Not Allowed",
    description:
      "The server supports the request method, but the target resource doesn’t.",
  },
  406: {
    statusCode: 406,
    message: "Not Acceptable",
    description:
      "The server doesn’t find any content that satisfies the criteria given by the user according to the Accept headers requested.",
  },
  407: {
    statusCode: 407,
    message: "Proxy Authentication Required",
    description:
      "This is similar to a 401, but a proxy must authenticate the client to continue.",
  },
  408: {
    statusCode: 408,
    message: "Request Timeout",
    description:
      "The server timed out waiting because the client didn’t produce a request within the allotted time.",
  },
  409: {
    statusCode: 409,
    message: "Conflict",
    description:
      "The server can’t fulfill the request because there’s a conflict with the resource. It’ll display information about the problem so the client can fix it and resubmit.",
  },
  410: {
    statusCode: 410,
    message: "Gone",
    description:
      "The content requested has been permanently deleted from the server and will not be reinstated.",
  },
  411: {
    statusCode: 411,
    message: "Length Required",
    description:
      "The server rejects the request because it requires a defined Content-Length header field.",
  },
  412: {
    statusCode: 412,
    message: "Precondition Failed",
    description:
      "The client indicates preconditions in the header fields that the server fails to meet.",
  },
  413: {
    statusCode: 413,
    message: "Payload Too Large",
    description:
      "The client’s request is larger than the server’s defined limits, and the server refuses to process it.",
  },
  414: {
    statusCode: 414,
    message: "URI Too Long",
    description:
      "The URI (Uniform Resource Identifier) requested by the client is too long for the server to process.",
  },
  415: {
    statusCode: 415,
    message: "Unsupported Media Type",
    description: "The request uses a media format the server does not support.",
  },
  416: {
    statusCode: 416,
    message: "Range Not Satisfiable",
    description:
      "The server can’t fulfill the value indicated in the request’s Range header field.",
  },
  417: {
    statusCode: 417,
    message: "Expectation Failed",
    description:
      "The server can’t meet the requirements indicated by the Expect request header field.",
  },
  421: {
    statusCode: 421,
    message: "Misdirected Request",
    description:
      "The client sends a request to a server that can’t produce a response.",
  },
  422: {
    statusCode: 422,
    message: "Unprocessable Entity",
    description:
      "The client correctly sends the request, but the server can’t process it because of semantic errors or similar issues.",
  },
  423: {
    statusCode: 423,
    message: "Locked",
    description: "The requested method’s resource is locked and inaccessible.",
  },
  424: {
    statusCode: 424,
    message: "Failed Dependency",
    description:
      "The request failed because a request the initial request depended on also failed.",
  },
  425: {
    statusCode: 425,
    message: "Too Early",
    description:
      "The server is unwilling to process a request that might be replayed.",
  },
  426: {
    statusCode: 426,
    message: "Update Required",
    description:
      "The server refuses to process the request using the current protocol unless the client upgrades to a different protocol.",
  },
  428: {
    statusCode: 428,
    message: "Precondition Required",
    description: "The server needs the request to be conditional.",
  },
  429: {
    statusCode: 429,
    message: "Too Many Requests",
    description:
      "The user sends too many requests in a certain amount of time.",
  },
  431: {
    statusCode: 431,
    message: "Request Header Fields Too Large",
    description:
      "The server can’t process the request because the header fields are too large.",
  },
  451: {
    statusCode: 451,
    message: "Unavailable for Legal Reasons",
    description:
      "The user requests a resource the server can’t legally provide.",
  },
  500: {
    statusCode: 500,
    message: "Internal Server Error",
    description:
      "The server has encountered an unexpected error and cannot complete the request.",
  },
  501: {
    statusCode: 501,
    message: "Not Implemented",
    description:
      "The server can’t fulfill the request or doesn’t recognize the request method.",
  },
  502: {
    statusCode: 502,
    message: "Bad Gateway",
    description:
      "The server acts as a gateway and gets an invalid response from an inbound host.",
  },
  503: {
    statusCode: 503,
    message: "Service Unavailable",
    description:
      "The server is unable to process the request. This often occurs when a server is overloaded or down for maintenance.",
  },
  504: {
    statusCode: 504,
    message: "Gateway Timeout",
    description:
      "The server was acting as a gateway or proxy and timed out, waiting for a response.",
  },
  505: {
    statusCode: 505,
    message: "HTTP Version Not Supported",
    description: "The server doesn’t support the HTTP version in the request.",
  },
  506: {
    statusCode: 506,
    message: "Variant Also Negotiates",
    description: "The server has an internal configuration error.",
  },
  507: {
    statusCode: 507,
    message: "Insufficient Storage",
    description:
      "The server doesn’t have enough storage to process the request successfully.",
  },
  508: {
    statusCode: 508,
    message: "Loop Detected",
    description:
      "The server detects an infinite loop while processing the request.",
  },
  511: {
    statusCode: 511,
    message: "Network Authentication Required",
    description:
      "The client must be authenticated to access the network. The error should include a link where the user can submit credentials.",
  },
};


module.exports = messageResponse;