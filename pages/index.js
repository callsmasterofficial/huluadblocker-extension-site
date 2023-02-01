
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Footer from '../components/Footer'
import Script from 'next/script'
import Howtouse from '../components/Howtouse'
import Fask_question from '../components/Fask_ques'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:"Hulu Ad Blocker - Enjoy Ad-Free Hulu Streaming | Install Extension Now!",
        description:"Hulu Ad Blocker blocks all the advertisements and helps you to watch your favourite shows & movies freely. Install the Extension Now!",
        keywords:"Hulu Ad Blocker, Hulu Ad Blocker Chrome, Chrome Hulu Ad Blocker, Hulu Ad Blocker Chrome Extension, Best Ad Blocker for Hulu, Ad Blocker Hulu, Ad Blocker for Hulu",
        pageUrl:"https://www.huluadblocker.com",
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Howtouse/>
      <Fask_question/>
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
