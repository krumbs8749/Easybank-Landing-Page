import { useEffect, useState } from "react"
import './App.scss';
import Topbar from "../src/components/Topbar/Topbar"
import Menu from "../src/components/Menu/Menu"
import Hero from "../src/components/Hero/Hero"
import Features from "../src/components/Features/Features"
import Articles from "../src/components/Articles/Articles"
import Contact  from "../src/components/Contact/Contact"

function App() {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(open => !open);
  }
  useEffect(() => {
    if(open){
      document.body.classList.add("no-scroll")
    }else{
      document.body.classList.remove("no-scroll")
    }
  }, [open])
  return (
    <div className="App">
      <Topbar open={open} openMenu={() => openMenu()}/>
      {open && <Menu />}
      <Hero />
      <Features />
      <Articles />
      <Contact />
    </div>
  );
}

export default App;
