const studentModel = require("../models/student.model");

const getStudentLandingPage = (req, res) => {
  res.render("index", { name: "kunle", gender: "male" });
  // res.sendFile(__dirname + "/index.html")
  // console.log(__dirname);
};

const getStudentSignUpPage = (req, res) => {
  res.render("signup", { message: "" });
};

const postStudentSignUpPage = (req, res) => {
  // console.log(req.body);
  try{
      const {email, password} = req.body;
      let form = new studentModel({email, password})
      form
      .save()
      .then(() => {
        // res.render("signin")
        res.redirect("/student/signin");
        console.log("succesful");
      })
  } catch (error) {
    res.render("signup", { message: "this was not done successful" });
//       console.log("You have input error prob");
//       console.log(error);
  }

  // let form = new studentModel(req.body);
  // form
  //   .save()
  //   .then(() => {
  //     // res.render("signin")
  //     res.redirect("/student/signin");
  //     console.log("succesful");
  //   })
//     .catch((error) => {
//       res.render("signup", { message: "this was not done successful" });
//       console.log("You have input error prob");
//       console.log(error);
//     });
};

const getStudentSignInPage = (req, res) => {
  res.render("signin", { message: "" });
};
const postStudentSignInPage = (req, res) => {
  studentModel
    .findOne({ email: req.body.email })
    .then(() => {
      res.redirect("/student/dashboard");
    })
    .catch((err) => {
      console.log("can't find");
      console.log(err);
    });
};

const getDeleteStudent = (req, res) => {
  // alert("worj")
  console.log(req.body.userEmail);
  // studentModel.find({email:req.body})
  studentModel
    .findOneAndDelete({ email: req.body.userEmail })
    .then(() => {
      res.redirect("dashboard");
      console.log("have been able to delete");
    })
    .catch((err) => {
      console.log(err);
    });
};
const getEditStudent = (req, res) => {
  console.log(req.body);
  let { firstname, lastname, email, password } = req.body;
  // console.log(firstname);
  studentModel
    .findByIdAndUpdate(req.body.id, { firstname, lastname, email, password })
    .then((result) => {
      console.log("updated successfully");
      res.redirect("dashboard");
    })
    .catch((err) => {
      console.log("Can not update");
      console.log(err);
      res.redirect("dashboard");
    });
};

const getDashboard = (req, res) => {
  // to read from our database
  studentModel
    .find()
    .then((result) => {
      // console.log(result);
      res.render("dashboard", { result });
    })
    // res.render("dashboard")
    .catch((error) => {
      console.log(error);
      console.log("can not get the list from mongodb");
    });
};
const testApi = (req, res) =>{
  res.send({messge:[
    {Name:"kunle", school:"sqi"},
    {Name:"moni", school:"eleyele"}
  ],
    whoAreYou: "I'm the API"
  });
};

module.exports = {getStudentLandingPage, getStudentSignUpPage, postStudentSignUpPage, getStudentSignInPage, postStudentSignInPage, getDeleteStudent, getEditStudent, getDashboard, testApi};
