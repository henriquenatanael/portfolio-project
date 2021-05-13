import React, { Component } from "react";

import RepositoryItem from "./components/RepositoryItem";

export class GithubFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { respositories: [], name: "facebook" };
    this.handleSearch = this.handleSearch.bind(this)
  }
 

  // good to fetch data
  componentDidMount() {
    fetch(`https://api.github.com/orgs/${this.state.name}/repos`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({ respositories: json });
      });
  }

  handleSearch() {
    fetch(`https://api.github.com/orgs/${this.state.name}/repos`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      this.setState({ respositories: json });
    });
  }
 
  render() {
    return (
      <section className="repository-list">
        <h1>List of {this.state.name}</h1>
        <input type="text" value={this.state.name} onChange={e => this.setState({name: e.currentTarget.value})} />
        <button className="btn-locate-git" onClick={this.handleSearch} >Get</button>

         <ul style={{marginTop: '30px'}}>
          {this.state.respositories && this.state.respositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </ul> 
      </section>
    );
  }
}

export default GithubFinder;
