const Common = require('./common');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

class Database extends Common {
    constructor() {
        super();
    }

    async connectAndQuery(data) {
        try {

            console.log("Reading rows from the Table...");
            let resultSet = await poolConnection.request().query(`SELECT TOP ${data} 
            [SalesOrderID]
                  ,[RevisionNumber]
                   ,[rowguid]
                  FROM [SalesLT].[SalesOrderHeader]`);

            console.log(`${resultSet.recordset.length} rows returned.`);

            let columns = "";
            for (var column in resultSet.recordset.columns) {
                columns += column + ", ";
            }


            let resultsArray = resultSet.recordset.map(row => {
                return {
                    SalesOrderID: row.SalesOrderID,
                    RevisionNumber: row.RevisionNumber,
                    rowguid: row.rowguid
                }
            });

            // write the results to a JSON file
            await writeFile('results.json', JSON.stringify(resultsArray, null, 2));
            console.log("Results written to results.json.");
            
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = {
    database: new Database(),
};