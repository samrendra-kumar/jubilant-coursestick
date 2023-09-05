import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/common/Footer"
import ContactUsForm from "../components/ContactPage/ContactUsForm"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponent from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import ReviewSlider from "../components/common/ReviewSlider"
const About = () => {
  return (
    <div >
      {/*section 1*/}
      <section  >
        <div className="mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-16px pt-[80px] pb-[0px] " >
          <div className="font-semibold  w-[65%] text-center text-4xl mt-6 ">
            Driving Innovation in Online Education for a 
            <HighlightText text={"Brighter Future "}/>
            </div>
            <div className="mt-8 w-[65%] text-center text-md font-semibold   text-richblack-300">
            <p>StudyNotion is at the forefront of a driving innovation in online education .We're passionate about creating the bright future by offering cutting-edge 
                courses ,leveraging emerging technologies,and nurtuting a vibrant learning community </p>
                </div>
          
          <div className="flex gap-x-3 flex-row mt-[43px] font-semibold text-center text-4xl  text-richblack-300">
            <img src={BannerImage1}/>
            <img src={BannerImage2}/>
            <img src={BannerImage3}/>
          </div>
        </div>
      </section>

      {/*section2*/}
      <section>
        <div className=" items-center mx-auto w-11/12 max-w-maxContent font-semibold text-center text-4xl text-richblack-300  pt-[80px] gap=[16px]">
            <Quote/>
        </div>
      </section>

      {/*section3*/}
      <section>
        <div className="flex flex-row w-11/12 max-w-maxContent mx-auto   pt-[90px] pb-[90px] items-center justify-between ">
            <div className="w-[40%] py-5">
                <h1 className="text-2xl font-semibold"><span className='font-extrabold text-transparent 
         bg-clip-text bg-gradient-to-r from-pink-300 to-pink-800 
        '>Our funding Story</span> </h1>
                <p className="text-richblack-300 font-inter text-sm gap-4 mt-[3px] pt-[4px] mb-3 
                ">Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                <p  className="text-richblack-300 font-inter text-sm gap-4 mt-[3px] pt-[4px]">As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
            </div>
            <div className="w-[40%] ">
                <img src={FoundingStory}/>
            </div>
        </div>
        {/*vision and mission*/}
        <div className="flex flex-row  w-11/12 max-w-maxContent mx-auto pt-[90px] pb-[90px] pl-[20px]  justify-evenly ">
           {/* left box*/}
           <div className="font-inter  text-richblack-300 width-[40%]">
            <h1 className="text-2xl font-semibold text-yellow-100 py-3">Our Vision</h1>
            <p className="text-start">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
           </div>
           <div className="font-inter gap-2 pl-[200px] text-richblack-300 width-[40%]">
            <h1 className="text-2xl font-semibold text-blue-300 py-3">Our Mission</h1>
            <p className="text-start">our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
           </div>
        </div>
      </section>
      {/*section 4*/}
      <div className="pt-[90px] pb-[120px]">
      <StatsComponent/>
      </div>
      
      {/*section 5*/}
      <section className='mx-auto flex flex-col items-center justify-between gap-5 mb-[140px]'>
        <div className="mx-auto w-11/12 items-center">
        <LearningGrid/>
        </div>
        
        <ContactFormSection/>
      </section>
        <section>
            <div>
                <ReviewSlider></ReviewSlider>
            </div>
        </section>
        <Footer/>
    </div>
  )
}
export default About 