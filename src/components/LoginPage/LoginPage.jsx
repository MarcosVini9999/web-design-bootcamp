import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="login-background">
      <div className="login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget your password?</a>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};
