import "./AlternativeNavBar.css";

export const AlternativeNavBar = () => {
  const toggleMenuOpen = () => document.body.classList.toggle("open");

  return (
    <nav className="alternative-navbar">
      <div className="alternative-navbar-overlay" onClick={toggleMenuOpen}></div>

      <button type="button" className="alternative-navbar-burger" onClick={toggleMenuOpen}>
        <span className="material-icons">menu</span>
      </button>

      <h1 className="alternative-navbar-title">AsmrProg</h1>
      <nav className="alternative-navbar-menu">
        <button type="button" className="active">
          Youtube
        </button>
        <button type="button" className="active">
          Archive
        </button>
        <button type="button">Projects</button>
      </nav>
    </nav>
  );
};
