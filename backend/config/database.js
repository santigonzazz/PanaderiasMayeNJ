const mongoose = require("mongoose");
require ('dotenv').config()
const URI = `mongodb+srv://${process.env.USERBD}:${process.env.PASSBD}@adso.cs4p9.mongodb.net/${process.env.BD}`;
mongoose.connect(URI)
.then(() => console.log("Base de datos conectada correctamente"))
.catch(err => console.error("Error al conectar la base de datos:", err));

module.exports = mongoose;