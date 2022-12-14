import React from 'react';
import { Center, Spinner } from 'native-base';

export const Loading: React.FC = () => (
  <Center flex={1} bg={'gray.700'}>
    <Spinner color="cyan.500" />
  </Center>
);
