import React from "react";

function Footer() {
  return (
    <footer className="page-footer #bdbdbd grey lighten-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h3 className="white-text">TION App</h3>
            <p className="black-text text-lighten-4">
              The Internet&aposs Own News App : News that you can trust!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Some Important Links</h5>
            <ul className="list-inline">
              <li>
                <a className="black-text text-lighten-3" href="#!">
                  About Us
                </a>
              </li>
              <li>
                <a className="black-text text-lighten-3" href="#!">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="black-text text-lighten-3" href="#!">
                  How we made this
                </a>
              </li>
              <li>
                <a className="black-text text-lighten-3" href="#!">
                  Our Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          © 2022 Copyright Team : Non Fungible Hackers!
        </div>
      </div>
      {/* <style jsx>
        {`
        .list-inline {
            padding-left: 0;
            margin-left: -5px;
            list-style: none;
          }
          .list-inline > li {
            display: inline-block;
            padding-right: 5px;
            padding-left: 5px;
          }
        `}
      </style> */}
    </footer>
  );
}

export default Footer;
