const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Total count of exercises: {props.total}</p>
    </div>
  );
};
export default Total;
