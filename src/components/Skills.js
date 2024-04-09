import React from 'react'
import '../styles/_Skills.scss'
import img3 from '../imgs/png/ballon.png';
import html from '../imgs/png/download (3).png';
import css from '../imgs/png/download (1).png';
import sass from '../imgs/png/download (5).png';
import B from '../imgs/png/download (1).jpg';
import R from '../imgs/png/download (7).png';
import js from '../imgs/png/download (6).png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useLayoutEffect, useRef, useState} from 'react';
import 'swiper/swiper.min.css';
import { sliderSettings } from './Settings';
function Skills() {
   
  return (
   <div className="skills">
    <div className="container">
    <div className="title">
    <div className='d-flex'>
           <img  src={img3} alt="" />
            <h1>My Skills</h1>
    </div>
    </div>
    <Swiper {...sliderSettings}>
      <SwiperSlide>
        <div className="skill">
            <h3>HTML</h3>
            <img src={html} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="skill">
            <h3>CSS</h3>
            <img src={css} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="skill">
            <h3>JS</h3>
            <img src={js} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="skill">
            <h3>React</h3>
            <img src={R} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="skill">
            <h3>Bootstrap</h3>
            <img src={B} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="skill">
            <h3>SASS</h3>
            <img src={sass} alt="" />
        </div>
      </SwiperSlide>
      <div class = "shimmer-div"> </div>
    </Swiper>
    </div>
   </div>
  )
}

export default Skills
