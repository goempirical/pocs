import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBox from "./components/search-box";
import ResultsGrid from "./components/results-grid";
import ItemDetails from "./components/item-details";

// ad hoc router
var href = location.href;
var htmlPage = href.match(/([^\/]*)\/*$/)[1];
htmlPage = htmlPage.replace(/\?.+/, '')

if (htmlPage && htmlPage === 'results.html'){
  ReactDOM.render(
     <ResultsGrid />,
     document.getElementById('results-grid')
  );
}
else if (htmlPage && htmlPage === 'details.html'){
  ReactDOM.render(
    <ItemDetails />,
    document.getElementById('item-details')
  );
}
else {
  ReactDOM.render(
      <SearchBox />,
      document.getElementById('search')
  );
}
