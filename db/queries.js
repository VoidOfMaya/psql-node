const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  //note the $1 in the query is a parameter else the query would lookl ike this:
  //await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
  //pg provides query parameterization to prevent SQL Injection attacks. Instead of passing user input directly,
  //  we pass it in an array as the second argument. pg handles the rest
}
async function searchForUser(searchValue){
  const {rows} = await pool.query(" SELECT username FROM usernames WHERE username LIKE $1", [`%${searchValue}%`]);
  return rows
}
async function deleteAllUsers (){
  await pool.query('DELETE FROM usernames');
}
module.exports = {
  getAllUsernames,
  insertUsername,
  searchForUser,
  deleteAllUsers
};