import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class RecipesSearch extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      value: '',
      results: [],
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resultRenderer = this.resultRenderer.bind(this);
  }

  handleSearchChange = (event, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      const re = new RegExp(this.state.value, 'i');
      const isMatch = result => re.test(result.title);

      const results = this.props.recipes.filter(isMatch).map(recipe => ({ ...recipe, key: recipe._id }));

      this.setState({
        isLoading: false,
        results,
      });
    }, 500);
  }

  resultRenderer({ _id, title, rating }) {
    return (
      <Link to={`/recipes/${_id}`}>
        <div key={_id}>
      {`${title} - rating: ${rating} stars`}
        </div>
      </Link>
    );
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        resultRenderer={this.resultRenderer}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
      />
    );
  }
}
