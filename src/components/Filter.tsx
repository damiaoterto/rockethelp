import React from 'react';
import { Text, Button, IButtonProps, useTheme } from 'native-base';

type FilterProps = IButtonProps & {
  title: string;
  isActivated?: boolean;
  type: 'open' | 'close';
}

export const Filter: React.FC<FilterProps> = ({
  title, isActivated = false, type, ...rest
}) => {
  const { colors } = useTheme();

  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      variant={'outline'}
      borderWidth={isActivated ? 1 : 0}
      borderColor={colorType}
      bgColor={'gray.600'}
      flex={1}
      size={'sm'}
      {...rest}
    >
      <Text
        color={isActivated ? colorType : 'gray.300'}
        fontSize={'xs'}
        textTransform={'uppercase'}
      >
        {title}
      </Text>
    </Button>
  )
}
