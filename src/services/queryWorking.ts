import axios from "axios";

export function query(after: number, limit = 10) {
  return axios.get("http://localhost:3000/api/working-day", {
    params: {
      limit,
      after,
    },
  });
}
