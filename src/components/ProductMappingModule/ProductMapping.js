// ProductMapping.js

import React, { Component } from 'react';
import ProductMappingService from './ProductMappingService';
import axios from 'axios';
import ProductMappingTableRow from './ProductMappingTableRow';

class ProductMapping extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', shopifyProducts: ''};
      this.productMappingService = new ProductMappingService();
    }
    componentDidMount(){
      axios.get('https://60e54122.ngrok.io/pluginAdmin/getProducts')
      .then(response => {
        this.setState({ shopifyProducts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
      if(this.state.shopifyProducts instanceof Array){
        return this.state.shopifyProducts.map(function(object, i){
            return <ProductMappingTableRow obj={object} key={i} />;
        })
      }
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                    <td> ID </td>
                    <td>Product Name</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }

export default ProductMapping;