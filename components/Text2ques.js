import React from 'react'

function Textques() {
  return (
    <div className="m-auto mb-5 w-[100%] text-justify">
      {data.map((item) => {
        return (
          <div className="flex text-black" key={item.id}>
            <img
              src={item.icon}
              alt=""
              className="mt-[2px] h-5 w-5 object-cover "
            />
            <p className="pl-2 pb-2">{item.text}</p>
          </div>
        )
      })}

    
    </div>
  )
}

export default Textques

const icon = 'https://img.icons8.com/ios-glyphs/344/arrow.png'
const data = [
  {
    id: 'tq1',
    icon: icon,
    text: 'Start with Click here to reach the official website of the extension to download it on your device.',
  },

  {
    id: 'tq2',
    icon: icon,
    text: 'Now, click on the “ADD TO CHROME” button to proceed.',
  },

  {
    id: 'tq3',
    icon: icon,
    text: 'After, select the button named “ADD EXTENSION” to install.',
  },

  {
    id: 'tq4',
    icon: icon,
    text: 'Till this step, you have got your Hulu AdBlocker on your device, enable it and enjoy Ad-Free Hulu Streaming anywhere, anytime.',
  },
]
