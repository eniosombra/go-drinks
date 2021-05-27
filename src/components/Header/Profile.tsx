import { Box, Avatar, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Enio L. Sombra</Text>
        <Text color="gray.500" fontSize="small">
          eniosombra@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Enio L. Sombra"
        src="http://github.com/eniosombra.png"
      ></Avatar>
    </Flex>
  );
}
