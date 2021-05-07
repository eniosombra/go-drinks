import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronRight } from 'react-icons/fa';
import {
  Flex,
  Text,
  Stack,
  Breadcrumb,
  Badge,
  BreadcrumbItem,
  useDisclosure,
} from '@chakra-ui/react';

import { api } from '../services/api';
import { Sidebar } from '../components/Sidebar';
import { ModalDetail } from '../components/ModalDetail';
import { LinkDrinks } from '../components/LinkDrinks';

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

          <LinkDrinks drinks={drinks} handleSelet={handleSeletDrink} />
        </Stack>
      </Flex>
    </Flex>
  );
}
