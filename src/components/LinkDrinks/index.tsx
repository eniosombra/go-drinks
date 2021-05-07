import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';

type ListDrinksProps = {
  drinks: any[];
  handleSelet: (id: string) => void;
};

export function LinkDrinks({ drinks, handleSelet }: ListDrinksProps) {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
      {drinks &&
        Object.values(drinks)[0].map((drink: any) => (
          <Box
            key={drink.idDrink}
            bg="app.box"
            maxW="400"
            borderColor="gray.300"
            borderRadius="8"
            _hover={{ opacity: '70%', cursor: 'pointer' }}
            overflow="hidden"
            boxShadow="dark-lg"
            onClick={() => handleSelet(drink.idDrink)}
          >
            <Image src={drink.strDrinkThumb} alt={drink.strDrink} />
            <Text p={4}>{drink.strDrink}</Text>
          </Box>
        ))}
    </SimpleGrid>
  );
}
