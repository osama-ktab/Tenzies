import React from "react";
function Numbers(props) {
  // const [isheld, setisheld] = React.useState(props.isHeld);
  // function handleClick() {
  //   setisheld((prev) => !prev);
  // }
  // console.log(props.isheld);

  return (
    <button
      key={props.key}
      onClick={() => props.hold(props.id)}
      className={props.isHeld ? "held" : ""}>
      {props.value}
    </button>
  );
}
// function Numbers(props) {
//   return (
//     <button
//       onClick={() => props.handleClick(props.id)}
//       className={props.isHeld ? "clicked" : ""}>
//       {props.value}
//     </button>
//   );
// }

export default Numbers;
