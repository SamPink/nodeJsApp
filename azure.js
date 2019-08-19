// Import the mssql package
var sql = require("mssql");

var string1 = '';

// Create a configuration object for our Azure SQL connection parameters
var dbConfig = {
 server: "samsql1.database.windows.net", // Use your SQL server name
 database: "samsql", // Database to connect to
 user: "sam", // Use your username
 password: "1Etsbqyuw!", // Use your password
 port: 1433,
 // Since we're on Windows Azure, we need to set the following options
 options: {
       encrypt: true
   }
};

// This function connects to a SQL server, executes a SELECT statement,
// and displays the results in the console.

// Create connection instance
var conn = new sql.ConnectionPool(dbConfig);

conn.connect()
// Successfull connection
.then(function () {

    // Create request instance, passing in connection instance
    var req = new sql.Request(conn);

    // Call mssql's query method passing in params
    req.query("SELECT [Display] FROM [dbo].[Table_1]")
    .then(function (recordset) {
    console.log(recordset.recordset[0].Display);
    string1 = recordset.recordset[0].Display
    conn.close();
    })
    // Handle sql statement execution errors
    .catch(function (err) {
    console.log(err);
    conn.close();
    })
})
// Handle connection errors
.catch(function (err) {
    console.log(err);
    conn.close();
});


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);