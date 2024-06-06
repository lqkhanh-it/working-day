import axios from "axios";

export function query(after: number, limit = 10) {
  const host = window.location.origin;
  return axios.get(host + "/api/working-day", {
    params: {
      limit,
      after,
    },
  });
}
