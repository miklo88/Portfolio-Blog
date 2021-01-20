import React from "react";
import VisualCard from "./VisualCard";
import "./Illustration.scss";
import one from "../../stockPhotos/Illustration/art_full.jpg";
import two from "../../stockPhotos/Illustration/doodle2.0.jpeg";
import three from "../../stockPhotos/Illustration/doodle1.jpeg";
import four from "../../stockPhotos/Illustration/dame2.0.jpeg";
import five from "../../stockPhotos/Illustration/lianne(detail).jpg";
import six from "../../stockPhotos/Illustration/jazzsoftcolor2.png";
import seven from "../../stockPhotos/Illustration/billie(color).jpg";

export default function Illustration() {
  return (
    <div className='illustration-container'>
      <VisualCard
        divClassName='visual-container one'
        imgClassName='alpha'
        source={one}
        alt='Illustrations'
        pClassName='p-one'
        title=''
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container two'
        imgClassName='bravo'
        source={two}
        alt='Illustrations'
        pClassName='p-two'
        title=''
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container three'
        imgClassName='charlie'
        source={three}
        alt='Illustrations'
        pClassName='p-three'
        title=''
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container four'
        imgClassName='delta'
        source={four}
        alt='Illustrations'
        pClassName='p-four'
        title=''
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container five'
        imgClassName='echo'
        source={five}
        alt='Illustrations'
        pClassName='p-five'
        title=''
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container six'
        imgClassName='foxtrot'
        source={six}
        alt='Illustrations'
        pClassName='p-six'
        title=''
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='visual-container seven'
        imgClassName='gulf'
        source={seven}
        alt='Illustrations'
        pClassName='p-seven'
        title=''
        location='Chicago, IL'
      />
    </div>
  );
}
