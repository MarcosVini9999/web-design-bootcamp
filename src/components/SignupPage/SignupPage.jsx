import "./SignupPage.css";

export const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="circle"></div>
      <div className="card">
        <div className="logo"></div>
        <h2>Create Account</h2>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">SIGN UP</button>
        </form>
        <footer>
          Existing users, sign in <a href="#">Here</a>
        </footer>
      </div>
    </div>
  );
};
