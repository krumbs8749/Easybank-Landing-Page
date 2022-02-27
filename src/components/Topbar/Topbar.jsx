import "./topbar.scss"

export default function Topbar({open, openMenu}) {

 
  return (
    <header className="Topbar container--pall">
      <div className={"overlay hide-for-desktop " + (!open ? "fade-out" : "fade-in")}></div>
     <a href="/" className="logo">
        <img src="assets/logo.svg" />
      </a>

      <a href="#" className={"hamburger hide-for-desktop " + (open && "open")} onClick={openMenu}>
        <span></span>
        <span></span>
        <span></span>
      </a>

      <div className="links hide-for-mobile">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>

      <a href="#" className="button hide-for-mobile">
        Request Invite
      </a>

    </header>
  )
}
