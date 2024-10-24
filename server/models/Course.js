import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  lectureNumber: { type: Number, required: true },
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  isFree: { type: Boolean, required: true },
});

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    lectures: [lectureSchema],
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
