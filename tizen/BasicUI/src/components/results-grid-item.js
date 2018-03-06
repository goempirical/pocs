import React, { Component } from "react";
import ReactDOM from "react-dom";

class ResultsGridItem extends Component {

    componentDidMount(){
      //alert("hello I am an Item");
      console.log("Loading item as a result");
    }
    render() {
        return (
          <p>This is an item from the results <a href="./details.html?id=1">See Details</a></p>
        );
    }
}

export default ResultsGridItem;
