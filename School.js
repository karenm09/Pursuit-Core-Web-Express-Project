const Class = require('./Class');
const Student = require('./Student');

class School {
  constructor() {
    this.classes = {
      Physics:{name: "Physics", teacher: "Henry Roman", students: []},
      // className: Class Object
      //   physics: {} 
    }
  }

  /**
   * Add class to classes
   * 
   * @param {string} name - Name of the class
   * @param {string} teacher - Name of instructor 
   * @return {Class} Class object
   */
  addClass(name, teacher) {
    let newClass = new Class(name, teacher);
    this.classes[name] = newClass;
  }
  // addClass(name, teacher) {
  //   let newClass = new Class(name, teacher);
  //   if (!name || !teacher || this.classes[name]) {
  //     let returnObj = {
  //       "error": "Please fill out all the information or Class already exists",
  //       "timestamp": new Date()
  //     }
  //     return returnObj
  //   }
  //   else if (!this.classes[name]) {
  //     this.classes[name] = newClass;
  //     let returnObj = {
  //       "class": newClass,
  //       "message": "Created a new class",
  //       "timestamp": new Date()
  //     }
  //     return returnObj
  //   }
  // }

  /**
   * Enroll student in class
   * 
   * @param {string} className - Name of the class
   * @param {Student} student - Student object
   * @return {Student} Enrolled student
   */
  enrollStudent(className, student) {
    // Your code here
  let newScholar = new Student(student.name, student.city, student.age, student.grade)
  return this.classes[className].students.push(newScholar)
  }




  /**
   * Get all students enrolled in a class
   * 
   * @param {string} className - Name of the class
   * @return {Student[]} Array of Student objects
   */
  getStudentsByClass(className) {
    // Your code here
    // return this.classes[className].student
  }




  /**
   * Get all students and apply filters. If failing = true
   * return all students that are failing the class, 
   * that is all students whose grade is less than 70.
   * If a city is passed return students whose city match
   * the city passed. If both failing and city are passed
   * return students that are failing and that live in the
   * specified city
   * 
   * @param {string} className - Name of the class
   * @param {boolean} failing - Whether to return students that are failing the class or not
   * @param {string} city - Name of the city to match against students
   * @return {Student[]} Array of Student objects
   */
  getStudentsByClassWithFilter(className, failing, city) {
    // Your code here
  }

}

module.exports = School;
