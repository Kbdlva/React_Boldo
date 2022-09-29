const express = require("express");
const jwt = require("jsonwebtoken");

const PORT = 60000;
const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const app = express();

const usersList = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  }
]

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, JWT_SECRET, (err, user) => {
          if (err) {
              return res.json({message: "Token is not valid"}).status(403);
          }
          if (!authorize(token)) {
            return res.json({message: "No Such user"}).status(404);
          }

          req.user = user;
          next()
      });
  } else {
      res.json({message: "Not Authorized"}).status(404);
  }
};

function authorize(token) {
  const userId = jwt.decode(token).userId;
  const user = usersList.find((user) => user.id === userId);
  if (user) return true;

  return false;
}

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = usersList[0]

  if (username === user.username && password === user.password) {
    return res.json({
      token: jwt.sign({ userId: user.id }, JWT_SECRET),
    });
  }

  return res
    .status(401)
    .json({ message: "The username and password your provided are invalid" });
});

app.get("/user/:id", authenticateJWT, (req, res) => {
  const user = usersList.find((user) => user.id === +req.params.id);
  if (user) {
    return res.json({user})
  }

  return res
    .status(404)
    .json({ message: "No such user"})
})

app.listen(PORT, () => {
  console.log(`API running on localhost: ${PORT}`);
});