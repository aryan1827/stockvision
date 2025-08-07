function Footer() {
  return (
    <footer className= "border-top" style={{backgorundColor: "rgb(230,230,230)"}}>
    <div className="container  mt-5" >
      <div className="row mt-5">
        <div className="col">
          <img
            src="/images/stockvision.png"
            alt="logo"
            style={{ width: "60%" }}
          ></img>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Open demat account
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Minor demat account
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            NRI demat account
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Commodity
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Dematerialisation
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Fund transfer
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            MTF
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Referral program
          </a>
          <br></br><br></br>
        </div>
        <div className="col">
          <p>Support</p>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Contact us
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Support portal
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            How to file a complaint?
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Status of your complaints
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Bulletin
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Circular
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Z-Connect blog
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Downloads
          </a>
          <br></br><br></br>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            About
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Philosophy
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Press & media
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Careers
          </a>
         <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Open source
          </a>
          <br></br><br></br>
        </div>
        <div className="col">
          <p>Quick Links</p>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Upcoming IPOs
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Brokerage charges
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Market holidays
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Economic calendar
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Calculators
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Markets
          </a>
          <br></br><br></br>
          <a href="/" style={{ textDecoration: "none" }} className="text-muted">
            Sectors
          </a>
          <br></br><br></br>
        </div>
      </div>
      <div>
        <p className="text-muted small mt-5" style={{fontSize: "0.7rem"}}>
          StockVision Broking Ltd. is a SEBI-registered stockbroker and does not
          provide investment advice or stock tips. Investments in the securities
          market are subject to market risks. Please read all related documents
          carefully before investing. Ensure your mobile number and email ID are
          updated with your stockbroker to receive important transaction alerts
          directly from exchanges. KYC is a one-time process required before
          investing through any SEBI-registered intermediary. For support or
          grievance redressal, please contact us at support@stockvision.com.
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
