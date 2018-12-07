import { storiesOf } from '@storybook/react';
import { setupGraphiQL } from '@storybook/addon-graphql';

const graphiql = setupGraphiQL({ url: 'http://localhost:4466' });

storiesOf('GraphQL', module).add(
  'get users',
  graphiql(`{
    users {
      id
      name
    }
  }`)
);
