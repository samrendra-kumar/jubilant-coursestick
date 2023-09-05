import React from 'react' 
const HighlightText = ({text}) => {
    return (
        <span className='font-extrabold text-transparent 
         bg-clip-text bg-gradient-to-r from-blue-500 to-caribbeangreen-400 
        '>
            {" "}
           {text}
        </span>
    )
}
export default HighlightText