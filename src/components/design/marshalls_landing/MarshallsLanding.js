import React from "react";
import { Link } from "react-router-dom";
import VisualCard from "../VisualCard";
import "./MarshallsLanding.scss";
// PHOTOS
import one from "../../../stockPhotos/ML/Bar/PENECILLINV1.2_1_2.jpg";
import two from "../../../stockPhotos/ML/Eat/littlegemv3.0.jpg";
import three from "../../../stockPhotos/ML/Advertising_Print/vdayv1.1.png";
import four from "../../../stockPhotos/ML/Coffee/lattev2.jpg";

export default function MarshallsLanding() {
  return (
    <div className='ML-container'>
      <VisualCard
        divClassName='ml-card one'
        imgClassName='ml alpha'
        source={one}
        alt='class'
        pClassName='mlp'
        title='Bar Menu'
        location='Merchandise Mart, Chicago, IL'
      />
      <VisualCard
        divClassName='ml-card two'
        imgClassName='ml bravo'
        source={two}
        alt='class'
        pClassName='mlp'
        title='Eat Menu'
        location='Merchandise Mart, Chicago, IL'
      />
      <VisualCard
        divClassName='ml-card three'
        imgClassName='ml charlie'
        source={three}
        alt='class'
        pClassName='mlp t'
        title='Graphics'
        location='Merchandise Mart, Chicago, IL'
      />
      <VisualCard
        divClassName='ml-card four'
        imgClassName='ml delta'
        source={four}
        alt='class'
        pClassName='mlp'
        title='Coffee Bar'
        location='Merchandise Mart, Chicago, IL'
      />
      <Link to='/events'>Events</Link>
    </div>
  );
}
