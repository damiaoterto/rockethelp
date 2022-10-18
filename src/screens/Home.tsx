import React, { useState } from 'react';
import {
  VStack,
  HStack,
  IconButton,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, OrderProps } from '../components/Order';
import Logo from '../assets/logo_secondary.svg';

export const Home: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [selectedStatus, setSelectedStatus] = useState<'open' | 'close'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '1233234',
      patrimony: '12312312',
      status: 'open',
      when: '18/07/2022 às 14:00',
    }
  ]);

  const handleNewOrder = (): void => {
    navigation.navigate('new');
  }

  const handleViewDetails = (orderId: string) => {
    navigation.navigate('details', { orderId });
  }

  return (
    <VStack flex={1} pb={6} bg={'gray.700'}>
      <HStack
        w={'full'}
        justifyContent={'space-between'}
        alignItems={'center'}
        bg={'gray.600'}
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w={'full'}
          mt={8}
          mb={4}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Heading color={'gray.100'}>Meus Chamados</Heading>

          <Text color={'gray.200'}>
            {orders.length}
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type={'open'}
            title={'Em andamento'}
            onPress={() => setSelectedStatus('open')}
            isActivated={selectedStatus === 'open'}
          />

          <Filter
            type={'close'}
            title={'Finalizados'}
            onPress={() => setSelectedStatus('close')}
            isActivated={selectedStatus === 'close'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} onPress={() => handleViewDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText size={40} color={colors.gray[300]} />

              <Text color={'gray.300'} fontSize={'xl'} mt={6} textAlign={'center'}>
                Você ainda não possui {'\n'}
                Solicitações {selectedStatus === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button title={'Nova Solicitação'} onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
