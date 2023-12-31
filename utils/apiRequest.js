import { axiosBaseInstance } from "../axios";

// Custom returned data based on API:
// {
//   "message": "string",
//   "status": false,
//   "data": "object | array | string | number | boolean"
// }

// status:false indicates a failed response
export default async function apiRequest(type, url, data, config) {
  try {
    let resp;
    if (type == "post") {
      console.log("in post");
      resp = await axiosBaseInstance.post(url, data, config);
    }
    if (type == "get") {
      resp = await axiosBaseInstance.get(url);
    }
    if (type == "delete") {
      resp = await axiosBaseInstance.delete(url);
    }
    if (type == "put") {
      resp = await axiosBaseInstance.put(url, data, config);
    }
    if (type == "patch") {
      resp = await axiosBaseInstance.patch(url, data, config);
    }

    return { ...resp.data, status: true };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      console.log("in post datta util", error.response);
      return {
        ...error.response.data,
        status: false,
        message: error.response.data?.message ?? "Something went wrong. Pls try again later - No server error message",
        statusCode: error.response.status,
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("The request was made but no response was received", error.request);
      return { status: false, message: "Request was made but no response was received. Pls check your internet or try again." };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Something happened in setting up the request that triggered an Error", error.message);
      return { status: false, message: error.message };
    }
  }
}
