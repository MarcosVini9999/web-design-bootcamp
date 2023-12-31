import "./ResponsiveSidebar.css";
import logo from "./../../assets/logo.png";

export const ResponsiveSidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger sidebar-button"
            onClick={() => document.body.classList.toggle("open")}
          >
            <i className="bx bx-menu"></i>
          </button>
          <img src={logo} alt="" className="sidebar-logo" />
        </header>

        <nav className="sidebar-menu">
          <button className="sidebar-button" type="button">
            <i className="bx bx-home"></i>
            <span>Home</span>
          </button>
          <button className="sidebar-button" type="button">
            <i className="bx bx-user"></i>
            <span>Accounts</span>
          </button>
          <button className="sidebar-button has-border" type="button">
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </button>
          <button className="sidebar-button" type="button">
            <i className="bx bx-shape-circle"></i>
            <span>Blockchain</span>
          </button>
          <button className="sidebar-button" type="button">
            <i className="bx bx-data"></i>
            <span>Databases</span>
          </button>
          <button className="sidebar-button" type="button">
            <i className="bx bx-speaker"></i>
            <span>AudioVibe</span>
          </button>
          <button className="sidebar-button has-border" type="button">
            <i className="bx bx-music"></i>
            <span>Soundblast</span>
          </button>
          <button className="sidebar-button" type="button">
            <i className="bx bx-folder"></i>
            <span>Folders</span>
          </button>
          <button className="sidebar-button" type="button">
            <i className="bx bx-layer"></i>
            <span>Levels</span>
          </button>
          <button className="sidebar-button" type="button">
            <i className="bx bx-lock"></i>
            <span>Security</span>
          </button>
        </nav>
      </div>
    </nav>
  );
};
