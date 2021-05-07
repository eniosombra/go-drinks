import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';

type ListDrinksProps = {
  data: any;
  handleSelet: (id: string) => void;
};

export function ListDrinks({ data, handleSelet }: ListDrinksProps) {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
      {data && data.drinks !== null ? (
        //@ts-ignore
        Object.values(data)[0].map((drink: any) => (
          <Box
            key={drink?.idDrink}
            bg="app.box"
            maxW="400"
            borderColor="gray.300"
            borderRadius="8"
            _hover={{ opacity: '70%', cursor: 'pointer', width: '99%' }}
            overflow="hidden"
            boxShadow="dark-lg"
            onClick={() => handleSelet(drink?.idDrink)}
          >
            <Image src={drink?.strDrinkThumb} alt={drink?.strDrink} />
            <Text p={4}>{drink?.strDrink}</Text>
          </Box>
        ))
      ) : (
        <Text align="center" fontSize="x-large">
          Drink not found!
        </Text>
      )}
    </SimpleGrid>
  );
}
