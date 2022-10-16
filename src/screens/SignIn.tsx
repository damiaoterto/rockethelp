import React, { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const SigIn: React.FC = () => {
  const { colors } = useTheme();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (email: string) => {
    setEmail(email);
  }

  const handlePassword = (password: string) => {
    setPassword(password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        value={email}
        onChangeText={handleEmail}
        placeholder={'E-mail'}
        InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]} />} />}
      />

      <Input
        mb={8}
        value={password}
        onChangeText={handlePassword}
        placeholder={'Senha'}
        InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]} />} />}
        secureTextEntry
      />

      <Button title={'Entrar'} w={'full'} />
    </VStack>
  )
}

export default SigIn;
