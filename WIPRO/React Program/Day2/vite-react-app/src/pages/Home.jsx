import Hero from '../components/Hero'
import Searchbox from '../components/Searchbox'
import Courses from '../components/Courses'
import CardSection from '../components/CardSection'

function Home() {
  return (
    <>
      <Hero />
      <div className="flex justify-center my-10">
        <Searchbox />
      </div>
      <Courses />
      <CardSection />
    </>
  )
}

export default Home
