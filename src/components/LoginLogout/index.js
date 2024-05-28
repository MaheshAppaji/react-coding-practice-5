import { Component } from "react";
import "./index.css"

class LoginLogout extends Component{
    state={
        isLogin:false
    }

    onToggleValue = ()=>{
        this.setState(prevState=>({
            isLogin:!prevState.isLogin
        }))
    }

    render(){
        const {isLogin} = this.state

        return(
            <div className="login-app-container">
                <div className="login-container-card">
                    <h1 className="login-heading">
                        {isLogin? 'Welcome User':'Please Login'}
                    </h1>
                    <button onClick={this.onToggleValue} className="in-out-btn">
                        {isLogin? 'Logout':'Login'}
                    </button>
                </div>
            </div>
        )
    }
}


export default LoginLogout