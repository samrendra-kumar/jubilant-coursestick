
import React from 'react' 
import ReactStars from "react-rating-stars-component"
// import Swiper and modules styles


import {apiConnector} from '../../services/apiconnector'
import {ratingsEndpoints} from '../../services/apis' 
import {FaStar} from  'react-icons/fa'
import {useState,useEffect} from "react" 

// init Swiper:
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/free-mode"


// import required modules
import { Autoplay,FreeMode,Pagination } from 'swiper/modules';



const ReviewSlider = () =>{
    const[reviews,setReviews] = useState([]) ;
    const truncateWords = 15 ;
    useEffect(()=>{
        const fetchAllReviews = async() =>{
            const {data} = await apiConnector("GET",ratingsEndpoints.REVIEWS_DETAILS_API)
            console.log("Logging response in rsting",data);

         
           if(data?.success)
           {
            setReviews(data?.data);
           }
           console.log("Printing reviews",reviews)
        }
            fetchAllReviews() ;
       
    },[]);
    
        return (
            <div className='text-white'>
        <div className=' my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent'>
        <Swiper
        slidesPerView={'1'}
        loop={true}
        spaceBetween={25}
        pagination={true}
        modules={[FreeMode,Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay:2000,
          disableOnInteraction:false ,
        }}
        navigation={true}
        breakpoints={{
          1024:{slidesPerview:3,}
        }}

      >
                {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}

                

            </Swiper>
        </div>
    </div>
          )
    
    
}



export default ReviewSlider 


