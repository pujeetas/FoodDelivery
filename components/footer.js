import {
  LINKEDIN_LOGO,
  INSTAGRAM_LOGO,
  FACEBOOK_LOGO,
  PINTEREST_LOGO,
  LOGO_URL,
} from "../utils/constants";

const CompanyList = () => {
  return (
    <div className="about-company-list">
      <ul className="list">
        <li>
          <div className="heading">Company</div>
        </li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Team</li>
        <li>Dineout</li>
        <li>GroFast</li>
      </ul>
    </div>
  );
};

const Contact_Legal = () => {
  return (
    <div>
      <ul className="list">
        <li>
          <div className="heading">Contact Us</div>
        </li>
        <li>Help & Support</li>
        <li>Partner With Us</li>
        <li>Ride With Us</li>
        <li>
          <div className="heading">Legal</div>
        </li>
        <li>Terms & Condition</li>
        <li>Cookie Policy</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

const Social_Links = () => {
  return (
    <div className="list">
      <div className="link-heading">Social Link</div>
      <div className="links-grid">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LINKEDIN_LOGO} alt="LinkedIn" />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={PINTEREST_LOGO} alt="Pinterest" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={INSTAGRAM_LOGO} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FACEBOOK_LOGO} alt="Facebook" />
        </a>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-logo">
        <img src={LOGO_URL}></img>
        <h3>© 2025 Food Limited</h3>
      </div>
      <CompanyList />
      <Contact_Legal />
      <Social_Links />
    </div>
  );
};
