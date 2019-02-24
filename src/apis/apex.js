import axios from "axios";

const apexAPI = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/apex/v1/standard/profile/",
  headers: { "TRN-Api-Key": "ad1916d0-09c2-4cfc-bc96-e130950ec3f2" }
});

export default apexAPI;
