import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string;
}

export const Header: React.FC<Props> = ({ title, ...rest }: Props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <HStack
      w={'full'}
      justifyContent={'space-between'}
      alignItems={'center'}
      pb={6}
      pt={6}
      {...rest}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />

      <Heading
        color={'gray.100'}
        textAlign={'center'}
        fontSize={'lg'}
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  )
}
