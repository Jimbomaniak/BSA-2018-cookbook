import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import { isRecipesFetching } from '../Recipes/RecipesReducer';
import { addRecipe } from '../Recipes/RecipesActions';
import RecipeFrom from '../../components/RecipeForm/RecipeForm';

class Recipe extends Component {
  handleSubmit = (data) => {
    this.props.actions.addRecipe(data);
  }

  handleCancel = () => {
    this.props.history.push('/recipes');
  }

  render() {
    const { isFetching } = this.props;

    return (
      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            <RecipeFrom
              disabled={isFetching}
              title="Specify new recipe"
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
              submitButtonTitle="Add recipe"
              submitButtonIcon="plus"
              cancelButtonTitle="Go back to recipes"
              cancelButtonIcon="arrow left"
            />

          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

Recipe.propTypes = {
  isFetching: PropTypes.bool,
  actions: PropTypes.shape,
  history: PropTypes.shape,
};

const mapStateToProps = state => ({ isFetching: isRecipesFetching(state) });

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ addRecipe }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
