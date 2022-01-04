import React from "react";
import { useEffect } from "react";
import DesignCard from "./DesignCard.js";
// STYLES
import "./Design.scss";
//PHOTOS
import one from "../../stockPhotos/ML/Bar/JULEPV1.0.jpg";
import two from "../../stockPhotos/ML/Eat/shrimp-po-boy.jpg";
import three from "../../stockPhotos/ML/Advertising_Print/hopper.jpg";
import four from "../../stockPhotos/Illustration/doodle1.jpeg";
var photos = [one, two, three, four];
//need to iterate through these on a timed loop interval.
// then the one selected is the img src

function Design() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      console.log(photos.map((x) => x));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container'>
      {/* <div className='design-container'> */}
      <img src={one} alt='' />
      <p className='design-footnote'>
        Marshalls Landing<br></br>2019|Spring Cocktails<br></br>Mint Julep
      </p>
      {/* </div> */}

      <h1 className='title'>Graphic Design - Photography - Illustration</h1>
      {/* <DesignCard
        component={"/marshallslanding"}
        photo={two}
        photoTitle="- Marshall's Landing|DMK Restaurant Group -"
      />
      <DesignCard
        component={"/photography"}
        photo={three}
        photoTitle='- Freelance|Photography -'
      />
      <DesignCard
        component={"/illustration"}
        photo={four}
        photoTitle='- Freelance|Illustration -'
      /> */}
    </div>
  );
}

export default Design;

// import React from "react";
// import DesignCard from "./DesignCard.js";
// // STYLES
// import "./Design.scss";
// //PHOTOS
// import two from "../../stockPhotos/ML/Eat/shrimp-po-boy.jpg";
// import three from "../../stockPhotos/ML/Advertising_Print/hopper.jpg";
// import four from "../../stockPhotos/Illustration/doodle1.jpeg";

// function Design() {
//   return (
//     <>
//       <div className='design-container'>
//         <div className='message-container'>
//           <h1 className='design-title'>DESIGN</h1>
//           <span className='design-line'></span>
//         </div>
//         <p className='design-footnote'>
//           Marshalls Landing<br></br>2019|Spring Cocktails<br></br>Mint Julep
//         </p>
//       </div>

//       <h1 className='title'>Graphic Design|Photography|Illustration</h1>
//       <DesignCard
//         component={"/marshallslanding"}
//         photo={two}
//         photoTitle="- Marshall's Landing|DMK Restaurant Group -"
//       />
//       <DesignCard
//         component={"/photography"}
//         photo={three}
//         photoTitle='- Freelance|Photography -'
//       />
//       <DesignCard
//         component={"/illustration"}
//         photo={four}
//         photoTitle='- Freelance|Illustration -'
//       />
//     </>
//   );
// }

// export default Design;
