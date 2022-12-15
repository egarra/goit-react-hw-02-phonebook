import { Component } from 'react';

export class Form extends Component {
  state = {
    nameValue: '',
    phoneValue: ''
  };

  inputChange = event => {
    this.setState(
        event.target.name === "name" ? { nameValue: event.target.value } : { phoneValue: event.target.value }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.nameValue, this.state.phoneValue);
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.inputChange}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.inputChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
