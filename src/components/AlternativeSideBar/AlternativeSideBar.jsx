import "./AlternativeSideBar.css";
import profile from "./../../assets/profile.png";
import logo from "./../../assets/insta.svg";

export const AlternativeSideBar = () => {
  return (
    <aside className="alternative-sidebar">
      <header className="alternative-sidebar-header">
        <img src={logo} className="logo-img" />
        <i className="logo-icon bx bxl-instagram"></i>
      </header>

      <nav>
        <button>
          <span>
            <i className="bx bx-home"></i>
            <span>Home</span>
          </span>
        </button>

        <button>
          <span>
            <i className="bx bx-search"></i>
            <span>Search</span>
          </span>
        </button>

        <button>
          <span>
            <i className="bx bx-compass"></i>
            <span>Explore</span>
          </span>
        </button>

        <button>
          <span>
            <i className="bx bxl-telegram">
              <span>13</span>
            </i>
            <span>Messages</span>
          </span>
        </button>

        <button>
          <span>
            <i className="bx bx-heart">
              <em></em>
            </i>
            <span>Notifications</span>
          </span>
        </button>

        <button>
          <span>
            <i className="bx bx-plus-circle"></i>
            <span>Create</span>
          </span>
        </button>

        <button>
          <span>
            <img src={profile} alt="" />
            <span>Profile</span>
          </span>
        </button>
      </nav>
    </aside>
  );
};
