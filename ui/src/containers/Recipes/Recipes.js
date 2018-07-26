import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Container, Grid, Image, Segment, Button} from 'semantic-ui-react';
import { fetchAllRecipes, sortRecipes ,deleteRecipe} from './RecipesActions';
import { allRecipes, isRecipesFetching } from './RecipesReducer';
import RecipeList from '../../components/RecipeList/RecipeList';
import EmptyRecipeList from '../../components/RecipeList/EmptyRecipeList';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import RecipesSearch from '../RecipesSearch/RecipesSearch';
import header from '../../assets/header.png'
import './Recipes.css';
import RecipeListHeader from '../../components/RecipeList/RecipeListHeader';

class Recipes extends Component {
  state = {
    activeRecipe: null,
    sorted: false
  };

  componentDidMount() {
    console.log('did mount')
    this.props.actions.fetchAllRecipes();
  }

  handleDelete = id => {
    console.log(id)
    this.props.actions.deleteRecipe(id);
  }

  handleEdit = id => {
    this.props.history.push(`/recipes/${id}`);
  }

  handleRecipeCreate = () => {
    this.props.history.push('/recipes/new');
  }

  toggleRecipeModal = id => {
    this.setState({
      activeRecipe: this.props.allRecipes.find(r => r._id === id)
    });
  }

  handleModalClose = () => {
    this.toggleRecipeModal(null);
  }

  handleSortClick = () => {
    let sorted = !this.state.sorted;
    sorted ? this.props.actions.sortRecipes()
    : this.props.actions.fetchAllRecipes();
    this.setState({sorted} )
    }



  render() {
    const { isFetching, allRecipes} = this.props;
    const { activeRecipe, sorted} = this.state;

    return (
      <Container>
        <Grid centered columns={1}>
          <Grid.Column>
            <Image
              src={header}
              />
            </Grid.Column>
            <Grid.Row>
              <Grid.Column>
                <Segment
                  raised
                  padded
                  textAlign='center'
                  loading={isFetching}
                  >
                  {!allRecipes.length && !isFetching
                    ? <EmptyRecipeList onCreate={this.handleRecipeCreate}/>
                    : <React.Fragment>
                        <Button
                          style = {{margin: '20px'}}
                          toggle
                          circular
                          content={sorted ? 'Unsort' : 'Sort by rating'}
                          active={sorted}
                          onClick={this.handleSortClick}
                        />

                        <RecipesSearch recipes={allRecipes.map((recipe) => recipe)}/>
                        <RecipeListHeader
                          onCreate={this.handleRecipeCreate}
                          listlength={allRecipes.length}
                          />

                          <RecipeList
                            recipes={allRecipes}
                            onView={this.toggleRecipeModal}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                            />
                    </React.Fragment>
                  }
                  </Segment>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        <RecipeModal
          recipe={activeRecipe}
          onClose={this.handleModalClose}
          />
      </Container>
    )
  }
}

Recipes.propTypes = {
  allRecipes: PropTypes.array,
  isFetching: PropTypes.bool,
  actions: PropTypes.object
}

const mapStateToProps = state => ({
  allRecipes: allRecipes(state),
  isFetching: isRecipesFetching(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchAllRecipes, sortRecipes, deleteRecipe}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);