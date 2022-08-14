import { Component } from 'react'
import { utilService } from '../services/util.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class AppHeader extends Component {

    state = {
        currPageIdx: 0,
        loggedInUser: null,
        isMenuOpen: false
    }

    toggleMenu() {
        this.setState((prevState) => {
            return {isMenuOpen: !prevState.isMenuOpen}
        })
    }

    setActive(pageIdx) {
        this.setState({ currPageIdx: pageIdx })
        this.toggleMenu()
    }

    render() {
        const links = utilService.getHeaderLinks()
        return (
            <header className="app-header main-layout full">
                <section className="app-header__inner flex justify-between items-center">

                    <div className="logo-wrapper" onClick={() => this.setActive(0)}>
                        {/* <img src="" alt="LOGO"> */}
                        <h2>LOGO</h2>
                    </div>

                    <nav className={`nav-wrapper ${this.state.isMenuOpen ? 'open' : ''}`}>
                        <ul className="nav clean-list flex">

                            <span className="close-menu-btn" onClick={() => this.toggleMenu()}>
                                <FontAwesomeIcon icon="fa-light fa-circle-x" />
                            </span>
                            {links.map((link, idx) => {
                                return (
                                    <li
                                        key={link.id}
                                        className={`header-link 
                                        ${this.state.currPageIdx === idx ? 'active' : ''} 
                                        ${link.title === 'Login' && this.state.loggedInUser ? 'hide' : ''}`}
                                        onClick={() => this.setActive(idx)}
                                    >
                                        {link.title}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav >

                    <div className="hamburger-wrapper" onClick={() => this.toggleMenu()} >
                        <FontAwesomeIcon icon="fa-light fa-bars" />
                    </div >
                </section >
            </header >
        )
    }
}
