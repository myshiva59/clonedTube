import axios from "axios";
const KEY = "AIzaSyDyu4ujWSPrAHyLDI19pbfeqdxPdIgDpSE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY
  }
});
