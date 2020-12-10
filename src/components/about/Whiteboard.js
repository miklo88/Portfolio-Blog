import React from "react";

export default function Whiteboard() {
  const hello = "HOLA";

  // declaring an object
  const myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 };
  // breaking it down into an array - getting the keys
  const keys = Object.keys(myObj);
  console.log(keys);
  console.log(keys[2]);
  console.log(keys.length);
  // looping through keys
  //   comparing array entities
  for (const key of keys) {
    if (key === keys[6]) {
      console.log("found key:", key);
      // return key;
    } else if (key !== keys[6]) {
      continue;
    } else {
      console.log("error");
    }
  }

  //   // breaking it down by values - returns an array
  //   const values = Object.values(myObj);
  //   console.log(values);
  //   // breaking it down by key : values
  //   const entries = Object.entries(myObj);
  //   console.log(entries);
  //   // old school for in loop prior to ES6
  //   for (const property in myObj) {
  //     console.log(`${property}: ${myObj[property]}`);
  //   }
  function sayHi() {
    return hello;
  }

  // render component. just saying hi for now.
  return (
    <>
      <div>Hi! {sayHi()}</div>

      {/* <ul>The Keys : {keys}</ul>;<ul>The Values : {values}</ul>; */}
      {/* <ul>The Entries : {entries}</ul>; */}
    </>
  );
}
