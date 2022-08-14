import { Component } from 'react'
import { HomePage } from './HomePage'
import { ContactPage } from './ContactPage'
import { ContactDetailsPage } from './ContactDetailsPage'
import { StatisticPage } from './StatisticPage'

export class RouterView extends Component {

    pages = [
        <HomePage />,
        <ContactPage />,
        <ContactDetailsPage />,
        <StatisticPage />
    ]
    
    render() {
        const { currPageIdx } = this.props
        return this.pages[currPageIdx]
    }
}
