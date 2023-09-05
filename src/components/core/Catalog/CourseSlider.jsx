import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper/modules'

import Course_Card from './Course_Card'



const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
       
        <Swiper
        slidesPerView={'1'}
        loop={true}
        spaceBetween={25}
        pagination={true}
        modules={[FreeMode,Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay:1000,
          disableOnInteraction:false ,
        }}
        navigation={true}
        breakpoints={{
          1024:{slidesPerview:3,}
        }}
      >
        
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[450px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider

