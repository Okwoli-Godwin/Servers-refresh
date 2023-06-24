import mongoose from "mongoose";

interface imageData{
    Image: string
}

interface images extends imageData, mongoose.Document{ }

const imageupload = new mongoose.Schema<imageData>(
    {
        Image: {
            type: String
        }
    },
    {timestamps: true}
)

const Gallerymodel = mongoose.model<images>("Images", imageupload)

export default Gallerymodel