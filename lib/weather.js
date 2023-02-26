import axios from "axios";
import { xml2json } from "xml-js";

export const getWeather = async () => {
  let weather = [];
  let error;
  await axios
    .get("http://tsag-agaar.gov.mn/forecast_xml")
    .then((res) => {
      weather = xml2json(res.data, { compact: true, spaces: 4 });
    })
    .catch((err) => {
      error = err.status;
    });

  return {
    weather,
    error,
  };
};
