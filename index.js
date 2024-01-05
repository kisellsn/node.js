import http from "http";
import { parse } from "url";
import { createReadStream } from "fs";
import { createServer, IncomingMessage, ServerResponse } from "http";

const port = process.env.PORT || 3000;

// Функція обробки маршрутів
function handleRequest(req, res) {
  const { pathname, query } = parse(req.url || "", true);

  // Підтримка OPTIONS методу для всіх маршрутів
  if (req.method === "OPTIONS") {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  // Обробка граціозного завершення роботи сервера
  if (pathname === "/shutdown" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Server shutting down...");
    server.close(() => {
      console.log("Server closed.");
      process.exit(0);
    });
    return;
  }

  // Визначення Content-Type залежно від маршруту
  let contentType = "";
  if (pathname === "/") {
    contentType = "text/plain; charset=utf-8";
    res.end("Home Page");
  } else if (pathname === "/profile") {
    contentType = "application/json; charset=utf-8";
    const responseData = { message: "Your Profile" };
    res.end(JSON.stringify(responseData));
  } else if (pathname === "/about") {
    contentType = "application/xml; charset=utf-8";
    const responseData = "<message>About us</message>";
    res.end(responseData);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Сторінку не знайдено");
    return;
  }

  // Встановлення заголовків відповіді
  res.writeHead(200, {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
  });
}

// Створення сервера
const server = createServer(handleRequest);

// Слухання на заданому порті
server.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});

// Обробка події граціозного завершення
process.on("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
