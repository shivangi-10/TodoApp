import { useState } from "react";
import users from "../users.json";
import { Dashboard } from "./Dashboard.jsx";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  //login method
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      password,
    };
    const user = users.users.find(
      (user) => user.name === name && user.password === password
    );
    if (user) {
      sessionStorage.setItem("userdetails", JSON.stringify(userData));
      setIsLogin(true);
      setName("");
      setPassword("");
    }
  };

  //logout method
  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLogin(false);
  };

  return (
    <>
      {!isLogin ? (
        <>
          <form>
            <h3>Login</h3>
            <div className="input">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
              />
            </div>
            <div className="input">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>
            <div className="input">
              <input
                type="submit"
                onClick={handleSubmit}
                placeholder="submit"
              />
            </div>
          </form>
        </>
      ) : (
        <Dashboard logout={logout} />
      )}
    </>
  );
};
