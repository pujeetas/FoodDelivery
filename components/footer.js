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
          <img
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/pinterest--v1.png"
            alt="Pinterest"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/instagram-new--v1.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="Facebook"
          />
        </a>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-logo">
        <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"></img>
        <h3>© 2025 Food Limited</h3>
      </div>
      <CompanyList />
      <Contact_Legal />
      <Social_Links />
    </div>
  );
};
