import React from "react";
import "./Photography.scss";
import VisualCard from "../VisualCard";
//Photos
import one from "../../../stockPhotos/Photography/metropolis.jpg";
import two from "../../../stockPhotos/Photography/onesmallstep.jpg";
import three from "../../../stockPhotos/Photography/missingpiece.jpg";
import four from "../../../stockPhotos/Photography/discovery.jpg";
import five from "../../../stockPhotos/Photography/puppers.jpg";

export default function Photography() {
  return (
    <div className='photography-container'>
      <VisualCard
        divClassName='photo-container one'
        imgClassName='photo alpha'
        source={one}
        alt='Photo, Tenerife, Canary Islands Spain'
        pClassName='photo-title'
        title='Metropolis'
        location='Tenerife, Canary Islands Spain'
      />
      <VisualCard
        divClassName='photo-container two'
        imgClassName='photo bravo'
        source={two}
        alt='Photo, Tiede Volcano, Canary Islands Spain'
        pClassName='photo-title'
        title='Lunar'
        location='Tiede Volcano, Canary Islands Spain'
      />
      <VisualCard
        divClassName='photo-container three'
        imgClassName='photo charlie'
        source={three}
        alt='Photo, Tenerife, Canary Islands Spain'
        pClassName='photo-title'
        title='Missing Piece'
        location='Tenerife, Canary Islands Spain'
      />
      <VisualCard
        divClassName='photo-container four'
        imgClassName='photo delta'
        source={four}
        alt='Photo, Tiede Volcano, Canary Islands Spain'
        pClassName='photo-title'
        title='Discovery'
        location='Tiede Volcano, Canary Islands Spain'
      />
      <VisualCard
        divClassName='photo-container five'
        imgClassName='photo echo'
        source={five}
        alt='Photo, Wicker Park, Chicago IL'
        pClassName='photo-title'
        title='Clocked out'
        location='Wicker Park, Chicago IL'
      />
    </div>
  );
}
