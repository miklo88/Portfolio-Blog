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
        divClassName='illustration one'
        imgClassName='draw alpha'
        source={one}
        alt='Illustrations'
        pClassName='draw-title'
        title='Minimalism sketches'
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='illustration two'
        imgClassName='draw bravo'
        source={two}
        alt='Illustrations'
        pClassName='draw-title'
        title='Questlove'
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='illustration three'
        imgClassName='draw charlie'
        source={three}
        alt='Illustrations'
        pClassName='draw-title'
        title='Minimalism sketches'
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='illustration four'
        imgClassName='draw delta'
        source={four}
        alt='Illustrations'
        pClassName='draw-title'
        title='Minimalism sketches'
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='illustration five'
        imgClassName='draw echo'
        source={five}
        alt='Illustrations'
        pClassName='draw-title'
        title='Lianne La Havas'
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='illustration six'
        imgClassName='draw foxtrot'
        source={six}
        alt='Illustrations'
        pClassName='draw-title'
        title='April in Paris'
        location='Chicago, IL'
      />
      <VisualCard
        divClassName='illustration seven'
        imgClassName='draw gulf'
        source={seven}
        alt='Illustrations'
        pClassName='draw-title'
        title='Billie Holiday'
        location='Chicago, IL'
      />
    </div>
  );
}
