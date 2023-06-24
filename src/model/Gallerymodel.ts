import mongoose from "mongoose";

interface imageData{
    GalleryImage: string
}

interface images extends imageData, mongoose.Document{ }

const imageupload = new mongoose.Schema<imageData>(
    {
        GalleryImage: {
            type: String
        }
    },
    {timestamps: true}
)

const Gallerymodel = mongoose.model<images>("Images", imageupload)

export default Gallerymodel