const express = require("express");
const mysql = require('mysql');

const app = express();
const config = {
	host: "db",
	user: "root",
	password: "fullcycle",
	database: "nodedb",
};

const conn = mysql.createConnection(config);

conn.query("CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), PRIMARY KEY(id))");
conn.query("INSERT INTO people (name) VALUES ('Erikson'), ('FullCycle')");

app.get("/", async (_, res) => {

	const people = await new Promise(function(resolve, reject) {
		
		conn.query("SELECT * FROM people",
			function (error, results) {
				if (error) reject(error);

				resolve(results);
			}
		);
	});

	const out = `
		<h1>Full Cycle Rocks!</h1>

		<table>
			<thead>
				<tr>
					<th align="left" width="40px">ID</th>
					<th align="left">Nome</th>
				</tr>
			</thead>
			<tbody>
				${people.map((person) => `
					<tr>
						<td align="left">${person.id}</td>
						<td align="left">${person.name}</td>
					</tr>
				`).join('')}
			</tbody>
		</table>
	`;	

	res.send(out);
});

app.listen("3000", () => {
	console.log("Server is running on port 3000");
});
