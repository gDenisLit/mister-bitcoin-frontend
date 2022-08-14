import { Component } from 'react'
import { RouterView } from "./pages/RouterView"
import { AppHeader } from "./cmps/AppHeader"
import { userService } from './services/user.service'

export class App extends Component {

    state = {
        currPageIdx: 0,
        loggedInUser: null
    }

    componentDidMount() {
        const loggedInUser = userService.getLoggedinUser()
        if (loggedInUser) this.setState({ loggedInUser })
    }

    setPageIdx = (pageIdx) => {
        this.setState({ currPageIdx: pageIdx })
    }

    onLogin = (user) => {
        this.setState({ loggedInUser: user }, console.log('onLogin', user))
    }

    render() {
        return (
            <>
                <AppHeader
                    setPageIdx={this.setPageIdx}
                    currPageIdx={this.state.currPageIdx}
                    loggedInUser={this.state.loggedInUser}
                />
                <RouterView
                    currPageIdx={this.state.currPageIdx}
                    onLogin={this.onLogin}
                />
            </>
        )
    }
}
