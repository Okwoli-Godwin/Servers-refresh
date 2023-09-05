import multer from "multer";
import path from "path";
import { Express } from "express";
import { Request } from "express";


type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

const Storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback
  ) => {
    cb(null, path.join(__dirname, "../../uploads"));
  },

  filename: (req: Request, file: Express.Multer.File, cb: FilenameCallback) => {
    // Keep the original file name
    cb(null, file.originalname);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === "application/pdf") {
    // Accept only PDF files
    cb(null, true);
  } else {
    // Reject other file types
    cb(new Error("Invalid file type. Only PDF files are allowed."));
  }
};

const PdfUpload = multer({
  storage: Storage,
  fileFilter: fileFilter, // Add the file filter for PDF files
}).single("PDFFile");
export { PdfUpload };