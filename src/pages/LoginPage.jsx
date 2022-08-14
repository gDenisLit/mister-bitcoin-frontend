import { Component } from 'react'
import { userService } from '../services/user.service'

export class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        try {
            const user = await userService.login(this.state)
            if (user) {
                this.props.onLogin(user)
                window.location.reload()
            }
        } catch (err) { console.log('Wrong credentials') }
    }

    handleChange = ({ target }) => {
        const field = target.name
        this.setState({ [field]: target.value })
    }

    render() {
        return (
            <section className="login main-layout full">
                <div className="login__inner">
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <h2>Log in</h2>
                        <input
                            type="email" placeholder="Email"
                            autoFocus name="email" onInput={this.handleChange}
                        />
                        <input
                            type="password" placeholder="Password"
                            show-password="true" name="password"
                            onInput={this.handleChange}
                        />
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
