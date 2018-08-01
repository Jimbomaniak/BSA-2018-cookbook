import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Recipes from './containers/Recipes/Recipes';
import RecipeCreation from './containers/RecipeCreation/RecipeCreation';
import RecipeEditing from './containers/RecipeEditing/RecipeEditing';
import createStore from './store';
import history from './store/history';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="recipes" />} />
            <Route path="/recipes/new" component={RecipeCreation} exact />
            <Route path="/recipes/:id" component={RecipeEditing} />
            <Route path="/recipes" component={Recipes} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
