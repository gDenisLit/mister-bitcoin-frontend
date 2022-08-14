import { Component } from 'react'
import { RouterView } from "./pages/RouterView"
import { AppHeader } from "./cmps/AppHeader"

export class App extends Component {

    state = {
        currPageIdx: 0
    }

    setPageIdx = (pageIdx) => {
        this.setState({ currPageIdx: pageIdx })
    }

    render() {
        return (
            <>
                <AppHeader
                    setPageIdx={this.setPageIdx}
                    currPageIdx={this.state.currPageIdx}
                />
                <RouterView
                    currPageIdx={this.state.currPageIdx}
                />
            </>
        )
    }
}
