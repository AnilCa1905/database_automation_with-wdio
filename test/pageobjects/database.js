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
            [AddressID]
      ,[AddressLine1]
      ,[City]
      ,[StateProvince]
      ,[CountryRegion]
      ,[PostalCode]
      ,[rowguid]
      ,[ModifiedDate]
  FROM [SalesLT].[Address]`);

            console.log(`${resultSet.recordset.length} rows returned.`);

            let columns = "";
            for (var column in resultSet.recordset.columns) {
                columns += column + ", ";
            }


            let resultsArray = resultSet.recordset.map(row => {
                return {
                    AddressID: row.AddressID,
                    AddressLine1: row.AddressID,
                    PostalCode: row.rowguid,
                    CountryRegion: row.CountryRegion,
                    rowguid:row.rowguid,
                    StateProvince:row.StateProvince,
                    City:row.City,
                    ModifiedDate:row.ModifiedDate

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