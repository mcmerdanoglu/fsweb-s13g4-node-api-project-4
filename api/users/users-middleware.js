const usersModel = require("./users-model");

function validatePayload(req, res, next) {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "girilen alanları kontrol ediniz" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateUserNameIsUnique(req, res, next) {
  try {
    let { username } = req.body;
    const isExist = usersModel
      .getAllUsers()
      .find((item) => item.username === username);
    if (isExist) {
      res.status(400).json({ message: "Aynı adlı kullanıcı zaten mevcut." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateLogin(req, res, next) {
  try {
    let { username, password } = req.body;
    const isExist = usersModel
      .getAllUsers()
      .find((item) => item.username === username && item.password == password);
    if (!isExist) {
      res.status(400).json({ message: "Giriş bilgilerinizde hata var." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { validatePayload, validateUserNameIsUnique, validateLogin };
