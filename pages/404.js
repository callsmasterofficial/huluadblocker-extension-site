import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"Hulu Ad Blocker - Enjoy Ad-Free Hulu Streaming | Install Extension Now!",
        description:"Hulu Ad Blocker blocks all the advertisements and helps you to watch your favourite shows & movies freely. Install the Extension Now!",
        keywords:"Hulu Ad Blocker, Hulu Ad Blocker Chrome, Chrome Hulu Ad Blocker, Hulu Ad Blocker Chrome Extension, Best Ad Blocker for Hulu, Ad Blocker Hulu, Ad Blocker for Hulu",
        pageUrl:"https://www.huluadblocker.com",
        featuredImage:"/logo.png"
      }
    }
  }
}
function error() {
  return (
    <div className='error_404 '>
      <div>
        <Navbar/>
      </div>
      <Error/>
    </div>
  )
}

export default error