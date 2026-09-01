import Nav from './components/Nav'
import Hero from './components/Hero'
import WeekendGlance from './components/WeekendGlance'
import Omakase from './components/Omakase'
import Liberty from './components/Liberty'
import Hamilton from './components/Hamilton'
import Saturday from './components/Saturday'
import Bakeries from './components/Bakeries'
import Fashion from './components/Fashion'
import Tea from './components/Tea'
import Ballet from './components/Ballet'
import Transport from './components/Transport'
import Planner from './components/Planner'
import DreamBoard from './components/DreamBoard'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <WeekendGlance />
        <Omakase />
        <Liberty />
        <Hamilton />
        <Saturday />
        <Bakeries />
        <Fashion />
        <Tea />
        <Ballet />
        <Transport />
        <Planner />
        <DreamBoard />
      </main>
      <Footer />
    </div>
  )
}
