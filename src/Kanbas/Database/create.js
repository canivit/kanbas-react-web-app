// throw away code to generate data

const enrollments = [...Array(30).keys()].map((x) => {
  return {
    _id: x + 1,
    user: x + 1,
    course: (x % 3) + 1,
  };
});

const grades = [...Array(30).keys()]
  .flatMap((x) => {
    return [...Array(3).keys()].map((y) => {
      const course = (x % 3) + 1;
      let assignmentStart = 1;
      if (course === 2) {
        assignmentStart = 4;
      } else if (course === 3) {
        assignmentStart = 7;
      }

      const grade = Math.floor(Math.random() * 40) + 60;

      return {
        student: x + 1,
        assignment: assignmentStart + y,
        grade,
      };
    });
  })
  .map((x, i) => {
    return { _id: i + 1, ...x };
  });

console.log(JSON.stringify(grades));
// console.log(grades);
