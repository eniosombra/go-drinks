import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronRight } from 'react-icons/fa';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Image,
  Stack,
  Breadcrumb,
  Badge,
  BreadcrumbItem,
  useDisclosure,
} from '@chakra-ui/react';

import { api } from '../services/api';
import { Sidebar } from '../components/Sidebar';
import { ModalDetail } from '../components/ModalDetail';

type Drink = {
  id: string;
  name: string;
  imageUrl: string;
  instructions: string;
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const categoryName = useSelector((state: any) => state.category.value);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drinks, setDrinks] = useState<Drink[]>([] as Drink[]);
  const [selectedDrink, setSelectedDrink] = useState<any>({} as any);

  useEffect(() => {
    async function listCategory() {
      const { data } = await api.get(`/filter.php?c=${categoryName}`);
      setDrinks(
        data.drinks.map((drink: any) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          imageUrl: drink.strDrinkThumb,
        }))
      );
    }
    listCategory();
  }, [categoryName, dispatch]);

  const handleSeletDrink = async (drinkId: string) => {
    const { data } = await api.get(`/lookup.php?i=${drinkId}`);
    setSelectedDrink(data.drinks[0]);
    onOpen();
  };

  return (
    <Flex direction="column" h="100vh">
      <ModalDetail isOpen={isOpen} onClose={onClose} drink={selectedDrink} />

      <Flex w="100%" maxWidth="1480" mx="auto" my="6" px="6">
        <Sidebar />

        <Stack w="100%">
          <Breadcrumb
            spacing="8px"
            separator={<FaChevronRight size={12} color="gray.500" />}
          >
            <BreadcrumbItem>
              <Text>Category</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Badge colorScheme="yellow">{categoryName}</Badge>
            </BreadcrumbItem>
          </Breadcrumb>

          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            {drinks.map((drink) => (
              <Box
                key={drink.id}
                bg="app.box"
                maxW="400"
                borderColor="gray.300"
                borderRadius="8"
                _hover={{ opacity: '70%', cursor: 'pointer' }}
                overflow="hidden"
                boxShadow="dark-lg"
                onClick={() => handleSeletDrink(drink.id)}
              >
                <Image src={drink.imageUrl} alt={drink.name} />
                <Text p={4}>{drink.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Flex>
  );
}
