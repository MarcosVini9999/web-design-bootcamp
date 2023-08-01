import "./AlternativeLoginPage.css";
import bg from "./../../assets/bg.jpg";

export const AlternativeLoginPage = () => {
  return (
    <div className="alternative-login-container">
      <div className="alternative-login">
        <img src={bg} alt="" />
        <h3>Welcome Back!</h3>
        <h2>AsmrProg</h2>
        <form className="alternative-login-form">
          <input type="password" placeholder="Enter your passcode" />
          <button type="submit">LOGIN</button>
          <a href="#">Forget your passcode?</a>
        </form>
      </div>
    </div>
  );
};
