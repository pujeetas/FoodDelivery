export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Resturants</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};
