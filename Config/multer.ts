import multer from "multer"
import {Request} from "express"

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
    ) => {
        cb(null, "uploads")
    },

    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FilenameCallback
    ) => {
        cb(null, file.originalname)
    }
})


const coverUpload = multer({ storage: storage }).single("coverImage");

export { coverUpload };
