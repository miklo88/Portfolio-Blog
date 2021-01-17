import React from "react";
import "./Photography.scss";
import VisualCard from "./VisualCard";
import one from "../../stockPhotos/Photography/metropolis.jpg";
import two from "../../stockPhotos/Photography/onesmallstep.jpg";
import three from "../../stockPhotos/Photography/missingpiece.jpg";
import four from "../../stockPhotos/Photography/discovery.jpg";
import five from "../../stockPhotos/Photography/puppers.jpg";

export default function Photography() {
  return (
    <div className='page-container'>
      <VisualCard
        className='alpha'
        source={one}
        alt='Photo, Tenerife, Canary Islands Spain'
        title='Metropolis'
        location='Tenerife, Canary Islands Spain'
      />

      <VisualCard
        className='bravo'
        source={two}
        alt='Photo, Tiede Volcano, Canary Islands Spain'
        title='Lunar'
        location='Tiede Volcano, Canary Islands Spain'
      />
      <VisualCard
        className='charlie'
        source={three}
        alt='Photo, Tenerife, Canary Islands Spain'
        title='Missing Piece'
        location='Tenerife, Canary Islands Spain'
      />
      <VisualCard
        className='delta'
        source={four}
        alt='Photo, Tiede Volcano, Canary Islands Spain'
        title='Discovery'
        location='Tiede Volcano, Canary Islands Spain'
      />
      <VisualCard
        className='echo'
        source={five}
        alt='Photo, Wicker Park, Chicago IL'
        title='Clocked out'
        location='Wicker Park, Chicago IL'
      />
    </div>
  );
}
