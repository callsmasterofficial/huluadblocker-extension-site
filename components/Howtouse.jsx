import React from 'react'

function Howtouse() {
  return (
    <div className="w-[80%] m-auto">
      <h4 className="text-center text-2xl mb-10 mt-10 font-medium text-black">How To Use it? </h4>
       <p className='text-center text-xl text-black'>The extension lets you watch ad free Hotstar TV Shows, movies and much more. You can save your time and can lengthen your entertaining period with friends. Let’s eradicate all the disturbing ads by applying below steps:</p>
      <div className="question&ImgBox mt-5 mb-4 md:flex md:mb-0">
        {/* textcontainer start here */}
        <div className="text-border-container mt-8 h-fit w-[100%] cursor-pointer md:mt-20   md:w-[50%]">
        {
      data.map((item)=>{
        return(
                  
           <div className='flex text-black mr-6 mt-4' key={item.id}>
           <img src={item.icon} alt="Volume Booster" className='w-5 h-5 object-cover mt-[2px] '/>
           <p className='pl-2 pb-2'>{item.text}</p>
         
           </div> 
        )
      })
      
    }
      <span><span className='font-bold'>Note:- </span>keep in mind that each time you use the Hotstar, do not forget to enable the extension to enjoy seamless and ad free streaming.</span>
        </div>

        <div className="img-box w-[100%] md:w-[50%]">
          <img
            src="./third.jpg"
            alt="How To Use it"
            className="ml-0 h-[80vh] w-[100vw]  rounded-md object-contain"
          />
        </div>
      </div>
    
    </div>
  )
}

export default Howtouse


const icon = "https://img.icons8.com/ios-glyphs/344/arrow.png"
const data = [
  {
    id:"h1",
    icon: icon,
    text: "We believe that you have already downloaded the Hotstar Ad Blocker extension on your preferred device. You need to use only Chromebook, macOS, or Windows to install the tool smoothly."
  },

  {
    id:"h2",
    icon: icon,
    text: "Furthermore, click on the “favicon” places on the top right corner of your browser. Then, click on the “favicon” to pin the extension to the toolbar.​"
  },

  {
    id:"h3",
    icon: icon,
    text: "Lastly, you need to enable the extension to your device. That’s all, now enjoy the latest or preferred videos on Hotstar with zero advertisement disturbance."
  },




]

