import './Login.css';
const Login = () => {
    return (
        <div>
            <label>Welcome back</label>
            <form onSubmit={console.log('bebra')}>
                <label>
                    <img src="https://cdn-icons.flaticon.com/svg/3917/3917688.svg?token=exp=1679712291~hmac=a5d57eb496158ad3666c3d6fa08bc569" className="img">
                    </img>
                    </label>
                <input type="text" defaultValue={"username"} name="">
                </input>
                <br></br>
                <label>
                    <img className='img' src="https://cdn-icons.flaticon.com/svg/3917/3917591.svg?token=exp=1679712291~hmac=8c3bbf022038e6389385b937a771d444">
                    </img>
                </label>
                <input type="text" defaultValue={"password"}>
                </input>
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;