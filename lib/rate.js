import axios from "axios";

export const getRate = async () => {
  let rates = [];
  let error;
  await axios
    .get("https://api.khanbank.com/v1/rates")
    .then((res) => {
      rates = res.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return {
    rates,
    error,
  };
};
