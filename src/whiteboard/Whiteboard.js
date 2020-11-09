import React from "react";

import WhiteboardLanding from "./WhiteboardLanding";
import WhiteboardAbout from "./WhiteboardAbout";
import WhiteboardDesign from "./WhiteboardDesign";
import WhiteboardContact from "./WhiteboardContact";

function Footer() {
  //dictionary to goof around with.
  const footers = {
    1: <WhiteboardLanding />,
    2: <WhiteboardAbout />,
    3: <WhiteboardDesign />,
    4: <WhiteboardContact />,
  };
  console.log(footers);
  const proppasser = { one: 10, two: 20 };
  function name2() {
    return proppasser.one;
  }

  return (
    <>
      {/* {footers} */}
      <WhiteboardLanding name='FOOTER' name1='FOOTER1' name2={name2()} />
      {/* <WhiteboardAbout />
      <WhiteboardDesign />
      <WhiteboardContact /> */}
    </>
  );
}
export default Footer;

// multiple div layout skeleton layout ///
