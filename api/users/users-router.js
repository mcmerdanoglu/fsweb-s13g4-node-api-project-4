const router = require("express").Router();
const mw = require("./users-middleware");
const usersModel = require("./users-model");

router.get("/users", (req, res, next) => {
  try {
    const allUsers = usersModel.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/register",
  mw.validatePayload,
  mw.validateUserNameIsUnique,
  (req, res, next) => {
    try {
      const insertedUser = usersModel.insertUser({
        username: req.body.username,
        password: req.body.password,
      });
      res.status(201).json(insertedUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login", mw.validateLogin, (req, res, next) => {
  try {
    res.json({ message: `Seni burada görmek ne güzel ${req.body.username}` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
