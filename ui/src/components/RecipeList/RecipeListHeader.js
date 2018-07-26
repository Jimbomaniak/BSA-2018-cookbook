import React from 'react';
import { Container, Statistic, Button} from 'semantic-ui-react';

export default ({ onCreate, listlength}) => (
  <Container style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <Statistic size='mini'>
      <Statistic.Value>{listlength}</Statistic.Value>
      <Statistic.Label>{listlength === 1 ? 'recipe': 'recipes'}</Statistic.Label>
    </Statistic>
    <Button
      icon='plus'
      circular
      content='Add recipe'
      color='blue'
      onClick = {() => onCreate && onCreate()}
      />
  </Container>
)