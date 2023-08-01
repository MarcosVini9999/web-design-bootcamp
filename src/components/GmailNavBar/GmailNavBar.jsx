import "./GmailNavBar.css";
import gmail from "./../../assets/gmail.svg";
import profile from "./../../assets/profile.png";

export const GmailNavBar = () => {
  const toggleMenuOpen = () => document.body.classList.toggle("open");
  return (
    <>
      <button onClick={toggleMenuOpen} class="burger material-symbols-outlined">
        menu
      </button>
      <nav class="gmail-navbar">
        <div class="gmail-logo">
          <img src={gmail} alt="" />
          <span>Gmail</span>
        </div>

        <div class="gmail-search">
          <span class="material-symbols-outlined"> Search </span>
          <input
            type="text"
            spellcheck="false"
            class="gmail-search"
            id="gmail-search"
            placeholder="Search Mail"
          />
        </div>

        <nav className="gmail-options">
          <button class="material-symbols-outlined">help</button>
          <button class="material-symbols-outlined">settings</button>
          <button class="material-symbols-outlined">apps</button>
          <img src={profile} alt="" />
        </nav>
      </nav>
    </>
  );
};
