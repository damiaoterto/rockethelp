import React from 'react';
import { VStack } from 'native-base';
import { Header } from '../components/Header';

export const Details: React.FC = () => (
  <VStack flex={1} bg={'gray.700'} p={6}>
    <Header title={'Solicitação'} />
  </VStack>
);
