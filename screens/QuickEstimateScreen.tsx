import * as React from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Body,
  Input,
  Form,
  Item,
} from 'native-base';

export default function QuickEstimateScreen() {
  return (
    <Container>
      <Header>
        <Body>
          <Text>빠른 견적</Text>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
}
