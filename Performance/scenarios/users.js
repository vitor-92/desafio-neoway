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
    { duration: "20s", target: 5 },
  ],
  thresholds: {
    http_req_failed: ["rate < 0.1"], // http errors should be less than 0.1%
     // 90% of requests must finish within 400ms, 95% within 800, and 99.9% within 2s.
     http_req_duration: ['p(90) < 200', 'p(95) < 100', 'p(99.9) < 400'],
  },
};

export const requests = new Counter("http_reqs");
export default function () {
    http.get("https://serverest.dev/usuarios");
}
