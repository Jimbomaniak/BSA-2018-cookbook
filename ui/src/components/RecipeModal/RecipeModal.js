import React from 'react';
import { Modal, Button, Image } from 'semantic-ui-react';
import food from '../../assets/food.jpg';

export default ({ recipe, onClose }) => (
  recipe ? (
    <Modal open={!!recipe} onClose={() => onClose && onClose()}>
      <Modal.Header>
        {' '}
        {recipe.title}
      </Modal.Header>
      <Modal.Content scrolling>
        <Image
          wrapped
          src={food}
          floated="left"
          size="medium"
        />
        <Modal.Description>
          {recipe.description}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="blue"
          content="close"
          onClick={() => onClose && onClose()}
        />
      </Modal.Actions>
    </Modal>
  ) : null
);
