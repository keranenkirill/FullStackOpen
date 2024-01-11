import course from "./tasks/2_2_kurssitiedot_step7/src/Course";
import Header from "./tasks/2_2_kurssitiedot_step7/src/Header";
import Content from "./tasks/2_2_kurssitiedot_step7/src/Content";
import Total from "./tasks/2_2_kurssitiedot_step7/src/Total";

const App = () => {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return (
    <div>
      <Header course={course} />
      <Content
        part1={course.parts[0].name}
        exercises1={course.parts[0].exercises}
      />
      <Content
        part2={course.parts[1].name}
        exercises2={course.parts[1].exercises}
      />
      <Content
        part3={course.parts[2].name}
        exercises3={course.parts[2].exercises}
      />
      <Total total={totalExercises} />
    </div>
  );
};
export default App;
