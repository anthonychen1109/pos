import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemPrice: '',
      itemSize: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({itemName: e.target.value})
  }

  handlePriceChange(e) {
    this.setState({itemPrice: e.target.value})
  }

  handleSizeChange(e) {
    this.setState({itemSize: e.target.value})
  }

  handleFormSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className='create_menu'>
            <label htmlFor='item_name'>Name:</label>
            <input
              name='item_name'
              value={this.state.term}
              onChange={this.handleNameChange}
            />
            <label htmlFor='item_price'>Price:</label>
            <input
              name='item_price'
              value={this.state.itemPrice}
              onChange={this.handlePriceChange}
            />
            <label htmlFor='item_size'>Size:</label>
            <input
              name='item_size'
              value={this.state.itemSize}
              onChange={this.handleSizeChange}
            />
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

function mapDispatchToProps() {
  
}

export default connect(null, mapDispatchToProps)(Menu);
