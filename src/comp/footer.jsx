import React from 'react';

function Footer() {
  return (
    <div>
     <button className="scroll-top-button" >
        Back to Top
      </button>
    <div className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__column">
            <h4>Column 1</h4>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Column 2</h4>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Column 3</h4>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Column 4</h4>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="footer__column footer__column--social">
            <h4>Follow Us</h4>
            <div className="footer__social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="twitter_logo.png" alt="Twitter" className="footer__icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="facebook_logo.png" alt="Facebook" className="footer__icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="youtube_logo.png" alt="YouTube" className="footer__icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="instagram_logo.png" alt="Instagram" className="footer__icon" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer__text">© 2024 Your Website. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;
