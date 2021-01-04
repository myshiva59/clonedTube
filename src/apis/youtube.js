import axios from "axios";
const KEY = "AIzaSyCJeFSiMlZUczLgYWTa6oqtq9z4XOnngmw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY
  }
});
