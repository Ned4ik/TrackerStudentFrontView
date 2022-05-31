import axios from "axios";

export default axios.create({
  baseURL: "http://enallio-001-site1.itempurl.com/",
  headers: {
    "Content-type": "application/json",
  },
});
