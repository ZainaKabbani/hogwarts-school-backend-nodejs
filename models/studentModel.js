const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "student first name is required"],
  },
  lastName: {
    type: String,
    required: [true, "student last name is required"],
  },
  house: {
    type: String,
    enum: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    required: [true, "student house is required"],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
