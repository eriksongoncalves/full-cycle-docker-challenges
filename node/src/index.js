const express = require("express");
// const mysql = require("mysql2/promise");

const app = express();

// const connection = await mysql.createConnection({
// 	host: "db",
// 	user: "root",
// 	password: "fullcycle",
// 	database: "nodedb",
// });

// await connection.execute(
// 	"CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), PRIMARY KEY(id))",
// 	() => {
// 		console.log(">>> Tabela criada com sucesso!!");
// 	}
// );

// connection.end();

app.get("/", async (_, res) => {
	// const [rows] = await connection.execute('SELECT * FROM people');
	// connection.end();

	// console.log('>>> SELECT RESULT ', rows);

	res.send("<h1>Hello Docker</h1>");
});

app.listen("3000", () => {
	console.log("Server is running on port 3000");
});
