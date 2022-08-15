import { Component } from 'react'
import { utilService } from '../../services/util.service'
import { AppHeaderLogo } from './AppHeaderLogo'
import { AppHeaderNav } from './AppHeaderNav'
import { Hamburger } from './AppHeaderMobile'
import { userService } from '../../services/user.service'
import { withRouter } from 'react-router-dom'

class _AppHeader extends Component {

    state = {
        isMenuOpen: false,
        loggedInUser: null
    }

    componentDidMount() {
        this.loadUser()
    }

    componentDidUpdate() {
        if (!this.state.loggedInUser) this.loadUser()
    }

    loadUser() {
        const loggedInUser = userService.getLoggedinUser()
        if (loggedInUser) this.setState({ loggedInUser })
    }

    toggleMenu = () => {
        this.setState((prevState) => {
            return { isMenuOpen: !prevState.isMenuOpen }
        })
    }

    render() {
        const { loggedInUser, isMenuOpen } = this.state
        const links = utilService.getHeaderLinks()
        const main = "app-header main-layout full"
        const inner = "app-header__inner flex justify-between items-center"

        return (
            <header className={main}>
                <section className={inner}>
                    <AppHeaderLogo />
                    <AppHeaderNav
                        links={links}
                        isMenuOpen={isMenuOpen}
                        loggedInUser={loggedInUser}
                        toggleMenu={this.toggleMenu}
                    />
                    <Hamburger
                        toggleMenu={this.toggleMenu}
                    />
                </section >
            </header >
        )
    }
}

export const AppHeader = withRouter(_AppHeader)