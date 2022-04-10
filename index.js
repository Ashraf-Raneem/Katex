var express = require("express");
var path = require("path");
var app = express();

var cors = require("cors");

var port = 3000;
var app = express();
app.use(express.json());

app.use(cors());

var data = require("./config/Data");

app.get("/", (req, res) => {
    res.send("Hello World!");
});


// Gets the hero section data 
app.get("/api/hero", (req, res) => {
  res.send(data.hero);
});

// Gets all the wallet
app.get("/api/wallet", (req, res) => {
  res.send(data.walletData);
});

// Adds a new user
app.post("/api/wallet", (req, res) => {
  if (req.body) {
    let newUser = req.body;
    walletData.push(newUser);
    res.send(users);
  } else {
    res.status(404).send("Unable to process data");
  }
});

// Updates user data
app.put("/api/wallet/:id", (req, res) => {
  if (req.body) {
    const userIndex = walletData.findIndex((el) => el._id === req.params.id);
    if (!userIndex) {
      res.status(404).send("No user was found to update");
    }
    users[userIndex] = req.body;
    res.send(users);
  }
});

// Fetches users with id
app.get("/api/wallet/:id", (req, res) => {
  const user = walletData.find((el) => el._id === req.params.id);
  if (!user) {
    res.status(404).send("No user was found with that id");
  }
  res.send(user);
});

// Deletes a user
app.delete("/api/wallet/:id", (req, res) => {
  const userIndex = walletData.findIndex((el) => el._id === req.params.id);
  if (!userIndex) {
    return res.status(404).send("No user was found with that id");
  }
  users = walletData.filter((el) => el._id !== req.params.id);
  res.send(users);
});

// Have Node serve the files for our built React app
app.use(
  express.static(path.join(__dirname, ".","client","build"))
);
app.use(express.static("public"));

// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, ".", "client", "build", "index.html")
//   );
// });



app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});