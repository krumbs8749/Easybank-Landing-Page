import "./features.scss"

export default function Features() {
  return (
    <div className="Features container--pall">
        <div className="intro">
            <h1>Why choose Easybank?</h1>
            <p>
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before
            </p>
        </div>
        <div className="feature-grid">
            <div className="feature-item">
                <div className="feature-icon">
                    <img src="assets/icon-online.svg" />
                </div>
                <h1 className="feature-title">
                    Online Banking
                </h1>
                <p className="feature-desc">
                    Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world.
                </p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">
                    <img src="assets/icon-budgeting.svg" />
                </div>
                <h1 className="feature-title">
                    Simple Budgeting
                </h1>
                <p className="feature-desc">
                    See exactly where your money goes each month. Receive notifications when you’re 
                    close to hitting your limits.
                </p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">
                    <img src="assets/icon-onboarding.svg" />
                </div>
                <h1 className="feature-title">
                    Fast Onboarding
                </h1>
                <p className="feature-desc">
                    We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away.
                </p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">
                    <img src="assets/icon-api.svg" />
                </div>
                <h1 className="feature-title">
                    Open API
                </h1>
                <p className="feature-desc">
                    Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier.
                </p>
            </div>
        </div>
    </div>
  )
}
