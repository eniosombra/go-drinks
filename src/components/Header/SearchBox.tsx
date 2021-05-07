import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Icon, Input, useToast } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

import { getDrinksByName } from '../../slices/drink/drink.thunks';

export function SearchBox() {
  const dispatch = useDispatch();
  const toast = useToast();
  const [drinkName, setDrinkName] = useState('');

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth="400"
      alignSelf="center"
      bg="app.box"
      position="relative"
      borderRadius="full"
    >
      <Input
        color="app.text"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search on the platform"
        _placeholder={{ color: 'app.placeholder' }}
        onChange={(event) => setDrinkName(event.target.value)}
      />
      <Icon
        as={RiSearchLine}
        fontSize="20"
        _hover={{ cursor: 'pointer' }}
        onClick={() => {
          drinkName === ''
            ? toast({
                title: 'Warning.',
                description: 'Write something you want to search.',
                status: 'error',
                position: 'top',
                duration: 1000,
                isClosable: true,
              })
            : dispatch(getDrinksByName(drinkName));
        }}
      />
    </Flex>
  );
}
