// setup actions
import axios from "axios";

const baseUrl = "http://18.116.45.202/db/";

function singular(s) {
  return s.slice(0, -1);
}

export const getData = (collection) => (dispatch) => {
  console.log(baseUrl + collection);
  axios
    .get(baseUrl + collection)
    .then((res) => {
      dispatch({ type: "get" + collection, payload: res.data });
      console.log(res.data);
      dispatch({ type: "setSuccess", payload: "true" });
    })
    .catch((error) => {
      console.log(collection, "| get error : ", error); //Logs a string: Error: Request failed with status code 404
      dispatch({ type: "setSuccess", payload: "false" });
    });
};

export const addData = (collection, announcement) => (dispatch) => {
  console.log(baseUrl + collection);
  axios
    .post(baseUrl + collection, announcement)
    .then((res) => {
      dispatch({ type: "add" + singular(collection), payload: res.data });
      dispatch({ type: "setSuccess", payload: "true" });
    })
    .catch((error) => {
      console.log(collection, "| add error : ", error); //Logs a string: Error: Request failed with status code 404
      dispatch({ type: "setSuccess", payload: "false" });
    });
};

export const updateData = (collection, data) => (dispatch) => {
  axios
    .put(baseUrl + collection + "/" + data._id, data)
    .then((res) => {
      dispatch({ type: "update" + singular(collection), payload: data });
      dispatch({ type: "setSuccess", payload: "true" });
    })
    .catch((error) => {
      console.log(collection, "| update error : ", error); //Logs a string: Error: Request failed with status code 404
      dispatch({ type: "setSuccess", payload: "false" });
    });
};

export const deleteData = (collection, id) => (dispatch) => {
  axios
    .delete(baseUrl + collection + "/" + id)
    .then((res) => {
      dispatch({ type: "delete" + singular(collection), payload: id });
      dispatch({ type: "setSuccess", payload: "true" });
    })
    .catch((error) => {
      console.log(collection, "| delete error : ", error); //Logs a string: Error: Request failed with status code 404
      dispatch({ type: "setSuccess", payload: "false" });
    });
};

export const setSuccess = (payload) => {
  return { type: "setSuccess", payload: payload };
};

export const setLoading = () => {
  return {
    type: "setLoading",
  };
};
