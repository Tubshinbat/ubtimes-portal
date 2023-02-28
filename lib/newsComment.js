import base from "lib/base";
import fetcher from "fetcher";
import axios from "axios-base";

export const getComments = async (query) => {
  let comments = [];
  let error = null;
  let pagination = {};

  const res = await fetcher(`${base.apiUrl}/newscomments?${query}`);

  if (res) {
    comments = res.data;
    pagination = res.pagination;
  }
  return { comments, pagination, error };
};

export const getCountComment = async (query) => {
  let count = 0;
  let error = null;

  const res = await fetcher(`${base.apiUrl}/newscomments/count?${query}`);

  if (res) {
    count = res.data;
  }
  return { count };
};

export const addComment = async (data) => {
  let newComment = "";
  let pagination = null;
  let error = null;
  const result = await axios.post(`newscomments`, data);
  if (result.data) {
    newComment = result.data.data;
    pagination = result.data.pagination;
  } else {
    error = true;
  }
  return { error, newComment, pagination };
};
