import React from "react";
import { footerLinks } from "../data/index.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul className="footer__menu">
          {footerLinks[0].map((link) => {
            return (
              <li key={link.id} className="footer__link">
                <Link to={link.link}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="footer__category">
          {footerLinks[1].map((link) => {
            return (
              <li key={link.id} className="footer__link">
                <Link to={link.link}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="footer__company">
          {footerLinks[2].map((link) => {
            return (
              <li key={link.id} className="footer__link">
                <Link to={link.link}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="footer__form">
          <li>Join our mailling list</li>
          <li className="footer__mailing">
            <input
              type="email"
              className="footer__input"
              placeholder="your@gmail.com"
            />
            <button className="btn btn__outline">Sing up</button>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <h5 className="footer__title">Copyright 2022 Avion LTD</h5>

        <ul className="footer__socials hide__onMobile">
          {footerLinks[3].map((link) => {
            return (
              <li key={link.id} className="footer__link footer__social">
                <Link to={link.link}>{link.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
