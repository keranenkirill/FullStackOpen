const Header = (props) => {
  //Protip: voit kohdata ohjelmoidessasi ongelmia sen suhteen missä muodossa komponentin saamat propsit ovat.
  // Hyvä keino varmistua asiasta on tulostaa propsit konsoliin
  console.log(props);
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>{props.course.name}</p>
    </div>
  );
};
export default Header;
