import mongoose from "mongoose"

interface imageData{
    course: string,
    coverImage: string,
    name: string,
    section: string,
    summary: string
}

interface images extends imageData, mongoose.Document{ }

const imageupload = new mongoose.Schema<imageData>(
    {
        course: {
            type: String,
            required: [true, "course is required"]
        },
        coverImage: {
            type: String,
            required: [true, "image is required"]
        },
        name: {
            type: String,
            required: [true, "name is required"]
        },
        section: {
            type: String,
            required: [true, "section is required"]
        },
        summary: {
            type: String,
            required: [true, "summary is required"]
        }
    },
    {timestamps: true}
)

const imagemodel = mongoose.model<images>("myImages", imageupload)

export default imagemodel