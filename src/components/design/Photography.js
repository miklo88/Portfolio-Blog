import React from "react";
import "./Photography.scss";
import VisualCard from "./VisualCard";
//Photos
import one from "../../stockPhotos/Photography/metropolis.jpg";
import two from "../../stockPhotos/Photography/onesmallstep.jpg";
import three from "../../stockPhotos/Photography/missingpiece.jpg";
import four from "../../stockPhotos/Photography/discovery.jpg";
import five from "../../stockPhotos/Photography/puppers.jpg";

export default function Photography() {
  return (
    <div className='page-container'>
      <VisualCard
        divClassName='visual-container one'
        imgClassName='alpha'
        source={one}
        alt='Photo, Tenerife, Canary Islands Spain'
        pClassName='p-one'
        title='Metropolis'
        location='Tenerife, Canary Islands Spain'
      />
      <VisualCard
        divClassName='visual-container two'
        imgClassName='bravo'
        source={two}
        alt='Photo, Tiede Volcano, Canary Islands Spain'
        pClassName='p-two'
        title='Lunar'
        location='Tiede Volcano, Canary Islands Spain'
      />
      <VisualCard
        divClassName='visual-container three'
        imgClassName='charlie'
        source={three}
        alt='Photo, Tenerife, Canary Islands Spain'
        pClassName='p-three'
        title='Missing Piece'
        location='Tenerife, Canary Islands Spain'
      />
      <VisualCard
        divClassName='visual-container four'
        imgClassName='delta'
        source={four}
        alt='Photo, Tiede Volcano, Canary Islands Spain'
        pClassName='p-four'
        title='Discovery'
        location='Tiede Volcano, Canary Islands Spain'
      />
      <VisualCard
        divClassName='visual-container five'
        imgClassName='echo'
        source={five}
        alt='Photo, Wicker Park, Chicago IL'
        pClassName='p-five'
        title='Clocked out'
        location='Wicker Park, Chicago IL'
      />
    </div>
  );
}
