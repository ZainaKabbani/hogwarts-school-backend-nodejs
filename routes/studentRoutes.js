const express = require("express");
const studentController = require("./../controllers/studentController");

const router = express.Router();

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.addStudent);

router.delete("/:studentId", studentController.deleteStudent);

module.exports = router;
