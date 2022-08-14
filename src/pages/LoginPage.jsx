import { Component } from 'react'

export class LoginPage extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <section className="login main-layout full">
                <div className="login__inner">
                    <form onSubmit={this.onLogin} className="login-form">
                        <h2>Log in</h2>
                        <input type="text" placeholder="Username" autoFocus />
                        <input type="password" placeholder="Password" show-password="true"/>
                        <button className="login__btn">
                            <span>Login</span>
                        </button>
                    </form>
                    <p>Don't have an account?</p>
                </div>
            </section>
        )
    }
}
