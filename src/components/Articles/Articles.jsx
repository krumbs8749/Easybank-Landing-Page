import "./articles.scss"

export default function Articles() {
  return (
    <div className="Articles">
        <div className="content container container--pall">
            <h2>
                Latest Articles
            </h2>
            <div className="grid">
                
                <a href="#" className="item">
                    <div className="image" style={{backgroundImage: "url('assets/image-currency.jpg')"}}></div>
                    <div className="text">
                        <div className="author">
                            By Claire Robinson
                        </div>
                        <div className="title">
                            Receive money in any currency with no fees
                        </div>
                        <div className="desc">
                            The world is getting smaller and we’re becoming more mobile. So why should you be 
                            forced to only receive money in a single …
                        </div>
                    </div>
                </a>
                <a href="#" className="item">
                    <div className="image" style={{backgroundImage: "url('assets/image-restaurant.jpg')"}}></div>
                    <div className="text">
                        <div className="author">
                            By Wilson Hutton
                        </div>
                        <div className="title">
                            Treat yourself without worrying about money
                        </div>
                        <div className="desc">
                            Our simple budgeting feature allows you to separate out your spending and set 
                            realistic limits each month. That means you …
                        </div>
                    </div>
                </a>
                <a href="#" className="item">
                    <div className="image" style={{backgroundImage: "url('assets/image-plane.jpg')"}}></div>
                    <div className="text">
                        <div className="author">
                            By Wilson Hutton
                        </div>
                        <div className="title">
                            Take your Easybank card wherever you go
                        </div>
                        <div className="desc">
                            We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                            while you’re abroad. We’ll even show you …
                        </div>
                    </div>
                </a>
                <a href="#" className="item">
                    <div className="image" style={{backgroundImage: "url('assets/image-confetti.jpg')"}}></div>
                    <div className="text">
                        <div className="author">
                            By Claire Robinson
                        </div>
                        <div className="title">
                            Our invite-only Beta accounts are now live!
                        </div>
                        <div className="desc">After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                            It’s easy to request an invite through the site ...
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </div>
  )
}
