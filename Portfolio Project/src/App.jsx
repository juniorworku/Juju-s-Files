import './App.css'
import { darkTheme } from "./utils/theme";
import HeroSection from './components/heroSection'
import NavBar from './components/navBar'
import Skills from './components/skills'
import { ThemeProvider } from '@material-tailwind/react';
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="bg-indigo-400 w-full overflow-x-hidden flex flex-col justify-center items-center gap-12 relative">
        <NavBar/>
        <HeroSection />
        <Skills />
      </div>
    </ThemeProvider>
  )
}

export default App
