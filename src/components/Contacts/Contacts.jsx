import { Component } from "react";
import PropTypes from 'prop-types';
import { StyledSection } from './Contacts.styled';
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

class Contacts extends Component {

  state = {
    vidibleContacts: '',
  }

  handleInputChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  findContact = () => {
    return this.props.contacts.filter((item) => 
      item.name.toLowerCase().includes(this.state.vidibleContacts.toLowerCase())
    )
  }

  render() {
    return  <StyledSection>
              <h2>Contacts</h2>
              <Filter 
                handleInputChange = {this.handleInputChange}
                value={this.state.vidibleContacts}
              />
              <ContactList
                findValue = {this.state.vidibleContacts}
                findContact = {this.findContact}
                onDeleteContact = {this.props.onDeleteContact}
              />
            </StyledSection>
  }  
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts;
