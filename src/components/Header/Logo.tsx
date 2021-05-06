import { Text, Icon } from '@chakra-ui/react';
import { BiDrink } from 'react-icons/bi';

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      goDrinks
      <Text as="span" ml="1" color="pink.500">
        ...
      </Text>
      <Icon as={BiDrink} fontSize="20" color="pink.500" />
    </Text>
  );
}
