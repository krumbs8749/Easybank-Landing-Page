import "./hero.scss"

export default function Hero() {
  return (
    <div className="Hero">
        <div className="container">
        <div className="hero-image"></div>
        <div className="hero-text container--pall">
            <h1 className="title">
                Next generation digital banking
            </h1>
            <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
            </p>
            
            <a href="#" className="button">
                Request Invite
            </a>
        </div>

        </div>
        
    </div>
  )
}
