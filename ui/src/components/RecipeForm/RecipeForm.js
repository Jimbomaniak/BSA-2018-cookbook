import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Image, Header, Button, Rating } from 'semantic-ui-react';
import header from '../../assets/header_add.jpg';

export default class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { title: props.initialValues.title,
      description: props.initialValues.description,
      rating: props.initialValues.rating };
  }

  handleFieldChange = ({ target }) => {
    this.setState(state => ({ state, [target.name]: target.value }));
  }

  handleRateChange = (event, data) => {
    this.setState(state => ({ ...state, rating: data.rating }));
  }

  handleCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  isSubmitAllowed() {
    return this.state.title && this.state.description && this.state.rating;
  }

  render() {
    const { disabled,
      submitButtonIcon,
      submitButtonTitle,
      cancelButtonTitle,
      cancelButtonIcon,
      title: formTitle } = this.props;
    const { title, description, rating } = this.state;

    return (
      <Segment.Group piled>
        <Header block attached="top" as="h3">
          {formTitle}
        </Header>
        <Segment attached>
          <Image src={header} size="huge" centered />
          <Form>
            <Form.Input
              label="Title"
              name="title"
              value={title}
              autoComplete="off"
              placeholder="Add your title"
              onChange={this.handleFieldChange}
              disabled={disabled}
            />
            <Form.TextArea
              label="Description"
              name="description"
              value={description}
              placeholder="Add your description"
              onChange={this.handleFieldChange}
              disabled={disabled}
            />
          </Form>
        </Segment>
        <Segment attached>
        Rate recipe:
          <Rating
            icon="star"
            defaultRating={rating}
            maxRating={5}
            size="large"
            onRate={this.handleRateChange}
          />

        </Segment>
        <Segment attached textAlign="right">
          <Button icon={cancelButtonIcon} content={cancelButtonTitle} onClick={this.handleCancel} />
          <Button
            icon={submitButtonIcon}
            color="green"
            content={submitButtonTitle}
            onClick={this.handleSubmit}
            disabled={!this.isSubmitAllowed()}
            loading={disabled}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

RecipeForm.defaultProps = { initialValues: { title: '',
  description: '',
  rating: 0 } };

RecipeForm.propTypes = { disabled: PropTypes.bool,
  submitButtonIcon: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  cancelButtonTitle: PropTypes.string,
  cancelButtonIcon: PropTypes.string,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  initialValues: PropTypes.shape({ title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number }) };
