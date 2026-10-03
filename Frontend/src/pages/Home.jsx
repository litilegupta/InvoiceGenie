import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className=''>
        <Hero />
        <div className=''>
          <Features/>
        </div>
        <Pricing/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home