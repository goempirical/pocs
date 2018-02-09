import React, { Component } from "react";
import ReactDOM from "react-dom";

class ItemDetails extends Component {

    componentDidMount(){
      console.log("Loading item details from server...")
    }
    render() {
        return (
          <div>
            <p>This is the item details</p>
            <a href="./results.html">Back to results</a>
          </div>
        );
    }
}

export default ItemDetails;
