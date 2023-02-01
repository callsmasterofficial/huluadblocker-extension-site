import React from 'react'



function Textques() {
  return (
     
   
    <div className='m-auto w-[100%] mb-5 text-justify'>
    {
      data.map((item)=>{
        return(
           
           <div className='flex text-black mt-0 md:mt-2' key={item.id}>
           <img src={item.icon} alt="" className='w-5 h-5 object-cover mt-[2px] '/>
           <p className='pl-2 pb-2'>{item.text}</p>
           </div>
           
        )
      })
      
    }
  
    </div>
  
  )
}





export default Textques

const icon = "https://img.icons8.com/ios-glyphs/344/arrow.png"
const data = [
  {
    id:"t1",
    icon: icon,
    text: "Hulu Ad Blocker is available at no cost. All you need is the extension downloaded to your respective device."
  },

  {
    id:"t2",
    icon: icon,
    text: "This extension is all capable of removing and blocking ads quickly. Moreover, you won’t have to deal with ads pop up while Hulu is Streaming."
  },

  {
    id:"t3",
    icon: icon,
    text: "Hulu users will find it an easy-to-use kind of child’s play. Its user-friendly nature makes it so popular among Hulu Users."
  },

  {
    id:"t4",
    icon: icon,
    text: "Also, it has various compatibility, for example, Windows, Chromebook devices, and macOS. So, use as per your own choice."
  },





]