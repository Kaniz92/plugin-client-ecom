import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProductMappingService from './ProductMappingService';

class ProductMappingTableRow extends Component {
    constructor(props){
        super(props);

        this.productMappingService = new ProductMappingService();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.productMappingService.deleteData(this.props.obj.id);
    }
  render() {
    return (
        <tr>
          <td >
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
          
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
             
            </form>
          </td>
        </tr>
    );
  }
}

export default ProductMappingTableRow;