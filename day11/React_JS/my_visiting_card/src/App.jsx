import './App.css'
import myPic from './assets/myPic.jpeg'
import portfolio_qr_image from './assets/qrcode_portfolio.png'

const App = () => {
  return (
    <>
      <div className="card">
        <div className="details">
          <div className="upper_part">
            <h1>Prince</h1>
            <h3>Full Stack Developer</h3>
            <p className="tagline">"Building ideas into reality"</p>
          </div>

          <div className="lower_part">
            <p>📱 <a href="tel:+919518190792">+91 9518190792</a></p>
            <p>📩 <a href="mailto:princerathi674@gmail.com">princerathi674@gmail.com</a></p>
            <p>🌐 <a href="https://myweb.com" target="_blank" rel="noreferrer">myweb.com</a></p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://linkedin.com/in/prince566" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
            <a href="https://github.com/PrinceRathi562006" target="_blank" rel="noreferrer" title="GitHub">gh</a>
          </div>

          {/* QR Code Section */}
          <div className="qr-section">
            <p className="qr-title">📱 Scan QR for Portfolio</p>
            <div className="qr-box"><img src={portfolio_qr_image} alt="" /></div>
          </div>
        </div>

        <div className="image">
          <img src={myPic} alt='myPic'/>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Made with ❤️ by Prince</p>
      </footer>
    </>
  )
}

export default App
