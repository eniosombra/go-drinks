import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
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
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
