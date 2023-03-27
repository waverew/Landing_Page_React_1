import './Login.css';
import './RightLoginSide';
import RightLoginSide from './RightLoginSide';
const Login = () => {
    return (
        <div className='Login'>
            <RightLoginSide></RightLoginSide>
            <div className='logo'>
                <h1>Let's <label>Vote!</label></h1>
            </div>
            <div className='form'>
            <label><b>Welcome back</b>
            <br></br>Login to your account</label>
            
            <form onSubmit={console.log('bebra')}>
                <p>Username</p>
                <label>
                    <img src="https://cdn-icons.flaticon.com/svg/3917/3917688.svg?token=exp=1679712291~hmac=a5d57eb496158ad3666c3d6fa08bc569" alt="" className="img">
                    </img>
                </label>
                <input type="text" defaultValue={""} name="login">
                </input>
                <br></br>
                
                <p>Password</p>
                <label>
                    <img className='img' src="https://cdn-icons.flaticon.com/svg/3917/3917591.svg?token=exp=1679712291~hmac=8c3bbf022038e6389385b937a771d444" alt="">
                    </img>
                </label>
                <input type="password" defaultValue={""} name="pass">
                </input>
                <br></br>
                <div className='inp-cont'>
                    <div>
                    <input type='checkbox'></input>
                    <label>Remember me</label>
                    </div>
                    <button type="submit" className='but'>Login</button>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Login;
