const middlewares: any[] = [];

if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");

  middlewares.push(createLogger({ collapsed: true }));
}

export default middlewares;
