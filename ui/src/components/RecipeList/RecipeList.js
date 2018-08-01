import React from 'react';
import { Card, Image, Button, Rating } from 'semantic-ui-react';
import food from '../../assets/food.jpg';

export default ({ recipes, onEdit, onDelete, onView }) => recipes && recipes
  .map(recipe => (
    <Card fluid key={recipe._id} color="blue">
      <Card.Content>
        <Button
          circular
          size="mini"
          color="red"
          icon="close"
          floated="right"
          onClick={() => onDelete && onDelete(recipe._id)}
        />
        <Card.Header>
          {recipe.title}
        </Card.Header>
        <Card.Description
          textAlign="left"
        >
          <Image
            src={food}
            wrapped
            size="small"
            floated="left"
          />
          {recipe.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Rate:
        <Rating
          defaultRating={recipe.rating}
          disabled
          maxRating={5}
        />
        <Button
          circular
          size="mini"
          icon="edit"
          color="green"
          floated="left"
          onClick={() => onEdit && onEdit(recipe._id)}
        />
        <Button
          circular
          size="mini"
          icon="eye"
          floated="left"
          onClick={() => onView && onView(recipe._id)}
        />
      </Card.Content>
    </Card>
  ));
