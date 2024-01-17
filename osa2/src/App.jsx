import CoursesData from "./tasks/2_4_kurssitiedot_step9/src/components/CoursesData";
import ShowCourse from "./tasks/2_4_kurssitiedot_step9/src/components/Course"

const App = () => {
  return (
    <div>
      <h1> Web development curriculum </h1>
      {CoursesData.map(course =>
        <ShowCourse key={course.id} course={course}/> //course palauttaa päälistan koko datasta
      )} 
    </div>
  )
}
const course_id = CoursesData.map(course => course.id)
console.log('Course id',course_id)

const course_name = CoursesData.map(course=>course.name)
console.log('Course name',course_name)

const course_parts = CoursesData.map(course=>course.parts)
console.log('Course parts',course_parts)

export default App;
