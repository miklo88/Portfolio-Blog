import React from "react";
import { matchPath } from "react-router";
import { useParams } from "react-router-dom";
import WhiteboardLanding from "./WhiteboardLanding";
import WhiteboardAbout from "./WhiteboardAbout";
import WhiteboardDesign from "./WhiteboardDesign";
import WhiteboardContact from "./WhiteboardContact";
const landing = matchPath("/landing", {
  path: "/components/router/Router.js",
  exact: true,
  strict: false,
});
const about = matchPath("/about", {
  path: "/components/router/Router.js",
  exact: true,
  strict: false,
});
const design = matchPath("/design", {
  path: "/components/router/Router.js",
  exact: true,
  strict: false,
});
const contact = matchPath("/contact", {
  path: "/components/router/Router.js",
  exact: true,
  strict: false,
});
function Footer() {
  let { id } = useParams();
  console.log("useParams", useParams());
  // checking params path against matchPath
  let footerMenu;
  if (id === landing) {
    footerMenu = <WhiteboardLanding />;
  } else if (id === about) {
    footerMenu = <WhiteboardAbout />;
  } else if (id === design) {
    footerMenu = <WhiteboardDesign />;
  } else if (id === contact) {
    footerMenu = <WhiteboardContact />;
  } else {
    footerMenu = <WhiteboardLanding />;
  }

  return (
    <>
      <>{console.log({ id })}</>
      <div>hook: {id}</div>
      {/* <WhiteboardLanding /> */}
      {/* {console.log(footerMenu)} */}
      {footerMenu}
    </>
  );
}
export default Footer;

// multiple div layout skeleton layout ///
