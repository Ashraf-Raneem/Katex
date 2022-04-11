var express = require("express");
var path = require("path");
var app = express();
var cors = require("cors");

var port = 3000;
var app = express();
app.use(express.json());

app.use(cors());

var data = require("./config/Data");
var walletData = data.walletData;
var hero = data.hero;

// Gets the hero section data 
app.get("/api/hero", (req, res) => {
  res.send(hero);
});

// Gets all the wallet
app.get("/api/wallet", (req, res) => {
  res.send(walletData);
});

// Updates hero section description
app.post("/api/hero/desc",(req,res) => {
  if (req.body){
    let heroBody = req.body;
    hero.text = heroBody.text;
    res.send(hero);
  } else {
    res.status(404).send("Unable to process data");
  }
})

// Adds a wallet
app.post("/api/wallet", (req, res) => {
  if (req.body) {
    let newWallet = req.body;
    walletData.push(newWallet);
    res.send(walletData);
  } else {
    res.status(404).send("Unable to process data");
  }
});

// Deletes a wallet
app.delete("/api/wallet/:id", (req, res) => {
  const walletIndex = walletData.find((el) => el.id === req.params.id);
  if (!walletIndex) {
    return res.status(404).send("No wallet was found with that id");
  }
  walletData = walletData.filter((el) => el.id !== req.params.id);
  res.send(walletData);
});

// Have Node serve the files for our built React app
app.use(
  express.static(path.join(__dirname, ".","client","build"))
);
app.use(express.static("public"));

app.use('/images', express.static('./images'));

//All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, ".", "client", "build", "index.html")
  );
});



app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});