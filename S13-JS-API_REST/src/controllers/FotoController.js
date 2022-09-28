import multer from "multer";
import multerConfig from "../config/multerConfig";

import Foto from "../models/Foto";

const upload = multer(multerConfig).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const foto = Foto.create({ originalname, filename });

      return res.json(req.file);
    });
  }
}

export default new FotoController();
