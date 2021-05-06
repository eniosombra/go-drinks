import { useEffect, useState } from 'react';
import { Box, Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';

import { api } from '../services/api';
import { Sidebar } from '../components/Sidebar';

type Drink = {
  id: string;
  name: string;
  imageUrl: string;
};

export default function Dashboard() {
  const [drinks, setDrinks] = useState<Drink[]>([] as Drink[]);

  async function searchName() {
    const { data } = await api.get('/search.php?s=margarita');
    setDrinks(
      data.drinks.map((drink: any) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        imageUrl: drink.strDrinkThumb,
      }))
    );
  }

  useEffect(() => {
    searchName();
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Flex w="100%" maxWidth="1480" mx="auto" my="6" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          {drinks.map((drink) => (
            <Box
              key={drink.id}
              bg="app.box"
              borderColor="gray.300"
              borderRadius="8"
              _hover={{ opacity: '70%', cursor: 'pointer' }}
              overflow="hidden"
              boxShadow="dark-lg"
            >
              <Image src={drink.imageUrl} alt={drink.name} />
              <Text p={4}>{drink.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
