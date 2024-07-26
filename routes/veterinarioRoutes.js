import express from "express"
const router = express.Router();
import { perfil, registrar } from "../controllers/veterinarioControllers.js";


router.get("/",registrar);

router.get("/perfil",perfil);

export default router;