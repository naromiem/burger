const connection = require("../config/connection.js");


 function printQuestionMarks(num) {
  const arr = [];

  for (const i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
function objToSql(ob) {
  const arr = [];

  for (const key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

const orm = {
  selectAll: function(tableInput, cb) {
    const dbQuery= "SELECT * FROM " + tableInput + ";";
    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insert: function(table, cols, vals, cb) {
    const dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + " VALUES (" + printQuestionMarks(val.length) + ")";
    console.log (dbQuery)

    connection.query(dbQuery, vals, function (err,res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
    },

    update: function(table, objColVals, condition, cb) {
             const dbQuery = "UPDATE " + table +" SET ";
            dbQuery += objToSql(objColVals);
            dbQuery += " WHERE ";
            dbQuery += condition;
        
            console.log (dbQuery)

    connection.query(dbQuery, vals, function (err,res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
},
  deleteOne: function(table, condition, cb) {
    const dbQuery = "DELETE FROM " + table + "WHERE "+ condition;

    console.log (dbQuery)

    connection.query(dbQuery, vals, function (err,res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
  }
};

module.exports = orm;
