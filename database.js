process.loadEnvFile();
const { mongoose, Product } = require("./product.js");

const uri = process.env.URI;
const db = process.env.DB;

const dbConnection = mongoose.connect(uri + db)
        .then(i=> console.log("Conexión a la base de datos!"))
        .catch(err => console.error("Error al conectar!" + err));

module.exports = {dbConnection};