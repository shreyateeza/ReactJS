import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        const products = ["Learn React","Learn JavaScript","Learn Django"];
        const listProducts = products.map((product) => 
            <li key={product.toString()}>{product}</li>
        );

    return (
      <div>
        <h1>To Do List</h1>
        <ul>{listProducts}</ul>     
      </div>
    );
  }
}

export default ToDo;