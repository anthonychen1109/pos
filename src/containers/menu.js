import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMenuItem } from '../actions/index';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemPrice: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({itemName: e.target.value})
  }

  handlePriceChange(e) {
    this.setState({itemPrice: e.target.value})
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.props.addMenuItem(
      this.state.itemName,
      this.state.itemPrice,
      document.getElementById('item_size').value
    )
    this.setState({
      itemName: '',
      itemPrice: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>Add a new dish to the menu:</h1>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className='create_menu'>
            <label htmlFor='item_name'>Name:</label>
            <input
              name='item_name'
              value={this.state.itemName}
              onChange={this.handleNameChange}
            />
            <label htmlFor='item_price'>Price:</label>
            <input
              name='item_price'
              value={this.state.itemPrice}
              onChange={this.handlePriceChange}
            />
            <label htmlFor='item_size'>Size:</label>
              <select id='item_size' name='item_size'>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
          </div>
          <div className="create_menu_submit">
            <input
              type='submit'
              className='btn btn-primary'
              />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMenuItem
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Menu);
