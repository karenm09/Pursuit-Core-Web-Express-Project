const Class = require('./Class');
const Student = require('./Student');

class School {
  constructor() {
    this.classes = {
      Physics:{name: "Physics", teacher: "Henry Roman", students: [{name: "Karen", city: "Brooklyn", age: 21, grade: 55}, {name: "Will", city: "Philly", age: 51, grade: 90}]},
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
    return newClass
  }

  /**
   * Enroll student in class
   * 
   * @param {string} className - Name of the class
   * @param {Student} student - Student object
   * @return {Student} Enrolled student
   */
  enrollStudent(className, student) {
    // Your code here
    let newStudent = new Student (student.name,student.age, student.city, student.grade)
    console.log(newStudent)
    console.log(this.classes[className])
    this.classes[className].students.push(newStudent)
    console.log(this.classes[className].students)
   return newStudent
  }




  /**
   * Get all students enrolled in a class
   * 
   * @param {string} className - Name of the class
   * @return {Student[]} Array of Student objects
   */
  getStudentsByClass(className) {
    // Your code here
    return this.classes[className].students
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
  getStudentsByClassWithFilter(className) {
    // Your code here
    let studentArr = this.classes[className].students;
    let failArr = studentArr.filter(student => {
        return student.grade <= 70
    })
    return failArr
  }

}



module.exports = School;
