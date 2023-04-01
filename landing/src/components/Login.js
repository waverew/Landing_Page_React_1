import "./Login.css";
import RightLoginSide from "./RightLoginSide";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
const Login = () => {
  return (
    <div className="Login">
      <RightLoginSide></RightLoginSide>
        <Logo></Logo>
      <div className="form">
        <div className="form-cont">
          <div className="greet-div">
            <b>Welcome back</b>
            <br></br>
            <p>Login to your account</p>
          </div>
          <form
            onSubmit={() => {
              console.log("hi");
            }}
            className="f"
          >
            <div className="log-cont">
              <Input
                text="Username"
                type="text"
                name="username"
                src="https://cdn-icons.flaticon.com/svg/3917/3917688.svg?token=exp=1680374396~hmac=809bd9b1ab22929821fb368be4494717"
                alt=""
              />
              <Input
                text="Password"
                type="password"
                name="password"
                src="https://cdn-icons.flaticon.com/svg/3917/3917591.svg?token=exp=1680374396~hmac=9c92e060533df46955cd7ba962b31922"
                alt=""
              ></Input>
            </div>
            <div className="inp-cont">
              <div>
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
              <Button text="Login" type="submit"></Button>
            </div>
          </form>
          <Button func={() => {window.location.href="/dashboard"}}/>
        </div>
      </div>
    </div>
  );
};
export default Login;