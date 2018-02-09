import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResultsGridItem from "../components/results-grid-item";

class ResultsGrid extends Component {

    componentDidMount(){
      console.log("Loading results from server...")
    }
    render() {
        return (
          <div>
            <p>Here we can show the </p>
            <ResultsGridItem />
            <ResultsGridItem />
            <ResultsGridItem />
            <a href="./index.html">Back to Home</a>
          </div>
        );
    }
}

export default ResultsGrid;
