import config from "./config"

export default {
  API_TEST: {
    path: config.getApiUrl() + "/api/testHelloWorld",
    resourceCode: "API_TEST",
    method: "GET",
    resIsJson: true,
  },
}
