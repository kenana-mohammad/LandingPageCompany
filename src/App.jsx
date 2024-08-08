import Container from "./Component/Container/Container"
import Navbar from "./Component/Navbar/Navbar"
import DarkVariantExample from "./Component/Slider/Slider"
import Team from "./Component/Team/Team"
import {teams} from "./services/team"
import ContainerPrice from "./Component/ContainerPrice/ContainerPrice"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"

function App() {

  return (
    <>
    <div className="app">
    <Navbar/>
<DarkVariantExample/>
<Team team={teams}/>


<Container/>
<ContainerPrice/>
<Contact/>
<Footer/>
    </div>

    </>
  )
}

export default App
