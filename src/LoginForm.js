import React, { Component } from 'react';

class LoginForm extends Component {
    render(){
        return (
            <div>
                <h2>Log in here, schmuckler.</h2>
                <form action="">
                <div className="form-group">
                    <label for="email"></label>
                        <input className="form-control" type="text" placeholder="Phone, email or username"/> 
                </div>
                <div className="form-group">
                    <label for="password"></label>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <button className="btn btn-lg btn-primary" onClick={() => alert('Hell yeah!')}>Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;