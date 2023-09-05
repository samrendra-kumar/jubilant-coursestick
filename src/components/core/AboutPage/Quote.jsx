import React from 'react' 
import HighlightText from '../HomePage/HighlightText'
const Quote = () => {
    return(
        <div>
         “We are Passionate about revolutionizing the way we learn .Our innovation platform
         <HighlightText text={"Combine techonology"}/>
         <span className='text-brown-200 '>
            {" ,"}expertise{","}</span>
            and community to create an 
            <span className='text-yellow-500'>
               {" "} unparalled educational experience" 
            </span>
        </div>
    )
}
export default Quote 