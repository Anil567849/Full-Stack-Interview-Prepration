const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost/harrykart");
  console.log("we are connected")
}

const kittySchema = new mongoose.Schema({
  name: String,
});

var Kitten = mongoose.model("Kitten", kittySchema);

var silence = new Kitten({ name: "Silence" });
// console.log(silence.name);
// silence.speak();


silence.save();

const kittens = Kitten.find();
console.log(kittens);


  
  
