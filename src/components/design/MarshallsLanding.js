import React from "react";
import VisualCard from "./VisualCard";
import "./MarshallsLanding.scss";
// PHOTOS
import one from "../../stockPhotos/ML/Bar/PENECILLINV1.2_1_2.jpg";
import two from "../../stockPhotos/ML/Eat/littlegemv3.0.jpg";
import three from "../../stockPhotos/ML/Advertising_Print/rose_day.jpg";
import four from "../../stockPhotos/ML/Coffee/lattev2.jpg";

export default function MarshallsLanding() {
  return (
    <div className='ML-container'>
      <VisualCard
        divClassName='visual-container one'
        imgClassName='alpha'
        source={one}
        alt='class'
        pClassName='p-one'
        title='Bar Menu'
        location='Merchandise Mart, Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container two'
        imgClassName='bravo'
        source={two}
        alt='class'
        pClassName='p-two'
        title='Eat Menu'
        location='Merchandise Mart, Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container three'
        imgClassName='charlie'
        source={three}
        alt='class'
        pClassName='p-three'
        title='Graphics'
        location='Merchandise Mart, Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container four'
        imgClassName='delta'
        source={four}
        alt='class'
        pClassName='p-four'
        title='Coffee Bar'
        location='Merchandise Mart, Chicago, IL'
      />
    </div>
  );
}
