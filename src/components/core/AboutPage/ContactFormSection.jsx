import React from 'react' 
import ContactUsForm from '../../ContactPage/ContactUsForm'
const ContactFormSection = () => {
    return (
        <div className='mx-auto flex flex-col justify-between py-[50px]'>
            <div className ="mx-auto flex flex-col justify-center py-[20px]">
            <h1 className="text-4xl font-semibold  text-white pl-[40px] pb-[30px]">
            Get in Touch
           </h1>
           <p className=" font-inter text-sm mx-auto text-center text-richblack-300 pb-[30px]">
            We'd love to here for you ,please fill out this form 
           </p>
            </div>
           
           <div>
            <ContactUsForm/>
           </div>
        </div>
    )
}
export default ContactFormSection