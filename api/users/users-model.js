const { v4: uuidv4 } = require("uuid");

function getId() {
  return uuidv4();
}

let allUsers = [
  { id: getId(), username: "cem1", password: "1234" },
  { id: getId(), username: "cem2", password: "2345" },
];

function getAllUsers() {
  return allUsers;
}

function insertUser(user) {
  user.id = getId();
  allUsers.push(user);
  return user;
}

function login(user) {
  let existUser = null;
  for (let i = 0; i < allUsers.length; i++) {
    const item = allUsers[i];
    if (item.username === user.username && item.password === user.password) {
      existUser = item;
      break;
    }
  }
  return existUser;
}

module.exports = {
  getAllUsers,
  insertUser,
  login,
};
