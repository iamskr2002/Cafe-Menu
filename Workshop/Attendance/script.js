document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the student attendance data from local storage or initialize an empty array
  let studentAttendanceData = JSON.parse(localStorage.getItem('studentAttendance')) || [];

  function displayStudentAttendance() {
    const studentsListDiv = document.getElementById('studentsList');
    studentsListDiv.innerHTML = '';

    studentAttendanceData.forEach(student => {
      const studentDiv = document.createElement('div');
      studentDiv.classList.add('student');
      studentDiv.innerHTML = `
        <span>${student.rollNumber} - ${student.name}</span>
        <button onclick="markAttendance(${student.rollNumber}, true)">Present</button>
        <button onclick="markAttendance(${student.rollNumber}, false)">Absent</button>
      `;
      studentsListDiv.appendChild(studentDiv);
    });
  }

  function markAttendance(rollNumber, isPresent) {
    const existingStudent = studentAttendanceData.find(student => student.rollNumber === rollNumber);

    if (existingStudent) {
      existingStudent.isPresent = isPresent;
    } else {
      const name = prompt('Enter student name:');
      if (name) {
        studentAttendanceData.push({ rollNumber, name, isPresent });
      }
    }

    localStorage.setItem('studentAttendance', JSON.stringify(studentAttendanceData));
    displayStudentAttendance();
  }

  displayStudentAttendance();
});
