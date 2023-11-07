const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./vars/config.env" });


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then(()=> console.log('connected successfully'))

const port = 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
