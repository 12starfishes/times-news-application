import React, { Component } from "react";
import _ from "lodash";
import "./App.css";
import { get_sources } from "./newsapi";
import NewsItemContainer from "./components/NewsItemContainer";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    sources: []
  };

  async componentDidMount() {
    const _sources = await get_sources();

    this.setState({ sources: _.sampleSize(_sources, 3) });
  }

  render() {
    const header_style = {
      textAlign: "center"
    };

    return (
      <div className="container-fluid parent">
        <div className="m-5 headers" style={header_style}>
          <h1>The Times News</h1>
          <h5>Refresh the page for latest news everytime.</h5>
        </div>

        <div className="d-flex justify-content-between flex-wrap m-4">
          {this.state.sources.map((source, index) => (
            <NewsItemContainer source={source} key={index} />
          ))}
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
