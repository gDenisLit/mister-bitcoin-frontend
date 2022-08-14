import { Component } from 'react'
import { ContactList } from '../cmps/ContactList'
import { contactService } from '../services/contact.service'
import { ContactFilter } from '../cmps/ContactFilter'

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) { console.dir(err) }
    }

    onSearch = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts } = this.state
        if (!contacts) return <div>Loading...</div>

        return (
            <section className='contact-page main-layout full'>
                <div className='contact-page__inner flex  flex-column justify-center items-center'>
                    <div className='container'>
                        <h1>Find your contacts</h1>
                        <ContactFilter onSearch={this.onSearch} />
                        <ContactList contacts={contacts} />
                    </div>
                </div>
            </section>
        )
    }
}
