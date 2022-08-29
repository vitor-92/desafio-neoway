import http from "k6/http";
import { Counter } from "k6/metrics";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '10s', target: 5 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    http_req_failed: ["rate < 0.1"],
    http_req_duration: ['p(90) < 200', 'p(95) < 150'],
  },
};

export const requests = new Counter("http_reqs");
export default function () {
  http.get("https://serverest.dev/usuarios");
}
