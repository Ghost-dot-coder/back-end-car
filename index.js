// 1. Import json-server
const jsonServer = require("json-server");

// 2. Import cors
const cors = require("cors");

// 3. Create a server using json-server
const server = jsonServer.create();

// 4. Setup default middlewares (logger, static, cors, etc.)
const middlewares = jsonServer.defaults();

// 5. Setup router to use db.json
const router = jsonServer.router("db.json");

// 6. Apply middlewares
server.use(cors());
server.use(middlewares);

// 7. Use the router
server.use(router);

// 8. Define port
const PORT = process.env.PORT || 3000;

// 9. Start the server
server.listen(PORT, () => {
  console.log(`JSON Server running on port: ${PORT}`);
});
