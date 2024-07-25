import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(
            "mongodb+srv://jordisonnicolas:gS!8BQnpfbM$ee%40@cluster0.qvgur0h.mongodb.net/",{
                useNewUrlParser:true,
                useUnifiedTopology: true,
            }
        );
        const url =`${db.connection.host}:${db.connect.port}`;
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.mensaje}`);
        process.exit(1);
    }
}

export default conectarDB;