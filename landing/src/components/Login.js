import './Login.css';
const Login = () => {
    return (
        <div className='Login'>
            <img src="./img/Group.png" alt='' className='group-img'></img>
            <img src="./img/Ellipse 3.png" alt="" className='ellipse3'></img>
            <img src="./img/Ellipse 1.png" alt="" className='ellipse1'></img>
            <img src="./img/charts/Background.png" alt="" className='ch1'></img>
            <img src="./img/charts/Background.png" alt="" className='ch2'></img>
            <img src="./img/charts/Background.png" alt="" className='ch3'></img>
            <img src="./img/charts/Oval 8-1.png" alt="" className='ch4'></img>
            <img src="./img/charts/Oval 8.png" alt="" className='ch5'></img>
            <img src="./img/charts/Chart.png" alt="" className='ch6'></img>
            <img src='./img/Ellipse 3-1.png' alt="" className='ellipse2'></img>
            <div className='ch7'>
                <img src="./img/charts/rect/Rectangle.png" alt="" className='rect'></img>
                <img src="./img/charts/rect/Rectangle-1.png" alt="" className='rect'></img>
                <img src="./img/charts/rect/Rectangle-2.png" alt="" className='rect'></img>
                <img src="./img/charts/rect/Rectangle-3.png" alt="" className='rect'></img>
                <img src="./img/charts/rect/Rectangle-4.png" alt="" className='rect'></img>
                <img src="./img/charts/rect/Rectangle-5.png" alt="" className='rect'></img>
            </div>
            
            <div className='logo'>
                <h1>Let's <label>Vote!</label></h1>
            </div>
            <div className='form'>
            <label><b>Welcome back</b>
            <br></br>Login to your account</label>
            
            <form onSubmit={console.log('bebra')}>
                <p>Username</p>
                <label>
                    <img src="https://cdn-icons.flaticon.com/svg/3917/3917688.svg?token=exp=1679712291~hmac=a5d57eb496158ad3666c3d6fa08bc569" className="img">
                    </img>
                </label>
                <input type="text" defaultValue={""} name="login">
                </input>
                <br></br>
                
                <p>Password</p>
                <label>
                    <img className='img' src="https://cdn-icons.flaticon.com/svg/3917/3917591.svg?token=exp=1679712291~hmac=8c3bbf022038e6389385b937a771d444">
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
