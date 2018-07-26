import React from 'react';
import { Image, Header, Button, Container} from 'semantic-ui-react';
import man from '../../assets/man.jpg'

export default ({ onCreate }) => (
  <Container>
    <Image
      src={man}
      size='medium'
      centered={true}
      />
    <Header textAlign='center' as='h3'>Welcome to Cook-book</Header>
    <Header textAlign='center' as='h2'>Add your recipes</Header>
    <Button
      size='huge'
      circular
      content='Add'
      color='blue'
      onClick= {() => onCreate && onCreate()}>
      </Button>
  </Container>
)