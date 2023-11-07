const AppError = require("../utils/appError");
const catchAsync = require("./../utils/catchAsync");

const Student = require("./../models/studentModel");

exports.getAllStudents = catchAsync(async (req, res, next) => {
  const students = await Student.find();

  res.status(200).json({
    data: students,
  });
});

exports.addStudent = catchAsync(async (req, res, next) => {
  const newStudent = await Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    house: req.body.house,
  });

  res.status(201).json({
    data: newStudent,
  });
});

exports.deleteStudent = catchAsync(async (req, res, next) => {
    console.log('dsds')
  await Student.findByIdAndDelete(req.params.studentId);

  res.status(204).json({
    data: null,
  });
});
