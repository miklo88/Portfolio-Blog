import React, { useState, useEffect } from "react";
// STYLES
import "./Design.scss";
//PHOTOS
import paginate_one from "../../stockPhotos/ML/Bar/JULEPV1.0.jpg";
import paginate_four from "../../stockPhotos/ML/Bar/PENECILLINV1.2_1_2.jpg";
import paginate_five from "../../stockPhotos/ML/Bar/theflemingv2.2.jpg";
import paginate_eight from "../../stockPhotos/ML/Advertising_Print/stella_summer_18.jpg";
import paginate_nine from "../../stockPhotos/ML/Advertising_Print/banquettesv1.1 copy.jpg";

// import two from "../../stockPhotos/ML/Eat/shrimp-po-boy.jpg";
// import three from "../../stockPhotos/ML/Advertising_Print/hopper.jpg";
// import six from "../../stockPhotos/Photography/didier.jpg";
// import seven from "../../stockPhotos/Photography/metropolis.jpg";
import ten from "../../stockPhotos/ML/Coffee/coffee_L_logo.jpg";

var paginationPhotos = [
  paginate_one,
  paginate_four,
  paginate_five,
  paginate_eight,
  paginate_nine,
];
var randomPhoto;
randomPhoto =
  paginationPhotos[Math.floor(Math.random() * paginationPhotos.length)];

function Design() {
  //useEffect acting as page render.
  const [photo, setPhoto] = useState();
  useEffect(() => {
    // const element = <img className='loaded-photo' src={ten} alt='' />;
    setPhoto(ten);
    return photo;
  });

  return (
    <section className='container'>
      <h1 className='title'>Design</h1>
      <img className='random-photos' src={randomPhoto} alt='' />
      <img className='loaded-photo' src={photo} alt='' />
    </section>
  );
}

export default Design;
