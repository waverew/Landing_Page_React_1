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
                src="https://cdn-icons.flaticon.com/svg/3917/3917688.svg?token=exp=1679712291~hmac=a5d57eb496158ad3666c3d6fa08bc569"
                alt=""
              />
              <Input
                text="Password"
                type="password"
                name="password"
                src="https://cdn-icons.flaticon.com/svg/3917/3917591.svg?token=exp=1679712291~hmac=8c3bbf022038e6389385b937a771d444"
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
        </div>
      </div>
    </div>
  );
};
export default Login;