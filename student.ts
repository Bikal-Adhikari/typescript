interface Student {
  id: number;
  name: string;
  email: string;
  courses: Course[];
}

interface Course {
  id: number;
  name: string;
  description: string;
  students: Student[];
}

interface Assignment {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  courseId: number;
  studentId: number;
}

class StudyManagementSystem {
  private students: Student[] = [];
  private courses: Course[] = [];
  private assignments: Assignment[] = [];

  addStudent(name: string, email: string): Student {
    const student: Student = {
      id: this.students.length + 1,
      name,
      email,
      courses: [],
    };
    this.students.push(student);
    return student;
  }

  addCourse(name: string, description: string): Course {
    const course: Course = {
      id: this.courses.length + 1,
      name,
      description,
      students: [],
    };
    this.courses.push(course);
    return course;
  }

  addAssignment(
    name: string,
    description: string,
    dueDate: Date,
    courseId: number,
    studentId: number
  ): Assignment {
    const assignment: Assignment = {
      id: this.assignments.length + 1,
      name,
      description,
      dueDate,
      courseId,
      studentId,
    };
    this.assignments.push(assignment);
    return assignment;
  }

  getStudent(id: number): Student | undefined {
    return this.students.find((student) => student.id === id);
  }

  getCourse(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }

  getAssignment(id: number): Assignment | undefined {
    return this.assignments.find((assignment) => assignment.id === id);
  }

  enrollStudentInCourse(studentId: number, courseId: number): void {
    const student = this.getStudent(studentId);
    const course = this.getCourse(courseId);
    if (student && course) {
      student.courses.push(course);
      course.students.push(student);
    }
  }

  submitAssignment(assignmentId: number, studentId: number): void {
    const assignment = this.getAssignment(assignmentId);
    const student = this.getStudent(studentId);
    if (assignment && student) {
      assignment.studentId = studentId;
    }
  }

  getAssignmentsForStudent(studentId: number): Assignment[] {
    return this.assignments.filter(
      (assignment) => assignment.studentId === studentId
    );
  }

  getAssignmentsForCourse(courseId: number): Assignment[] {
    return this.assignments.filter(
      (assignment) => assignment.courseId === courseId
    );
  }
}

const studyManagementSystem = new StudyManagementSystem();

// Example
const student1 = studyManagementSystem.addStudent(
  "John Doe",
  "john.doe@example.com"
);
const course1 = studyManagementSystem.addCourse(
  "Math 101",
  "Introduction to Mathematics"
);
const assignment1 = studyManagementSystem.addAssignment(
  "Assignment 1",
  "Solve the following equations",
  new Date("2023-02-15"),
  course1.id,
  student1.id
);

studyManagementSystem.enrollStudentInCourse(student1.id, course1.id);
studyManagementSystem.submitAssignment(assignment1.id, student1.id);

console.log(studyManagementSystem.getAssignmentsForStudent(student1.id));
console.log(studyManagementSystem.getAssignmentsForCourse(course1.id));
