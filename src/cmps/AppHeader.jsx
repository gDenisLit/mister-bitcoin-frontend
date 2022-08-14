import { Component } from 'react'
import { utilService } from '../services/util.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class AppHeader extends Component {

    state = {
        isMenuOpen: false
    }

    toggleMenu() {
        this.setState((prevState) => {
            return { isMenuOpen: !prevState.isMenuOpen }
        })
    }

    onSetPageIdx(pageIdx) {
        this.props.setPageIdx(pageIdx)
        this.toggleMenu()
    }

    render() {
        const links = utilService.getHeaderLinks()
        const { currPageIdx } = this.props
        return (
            <header className="app-header main-layout full">
                <section className="app-header__inner flex justify-between items-center">

                    <div className="logo-wrapper" onClick={() => this.onSetPageIdx(0)}>
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
                                        ${currPageIdx === idx ? 'active' : ''} 
                                        ${link.title === 'Login' && this.props.loggedInUser ? 'hide' : ''}`}
                                        onClick={() => this.onSetPageIdx(idx)}
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
