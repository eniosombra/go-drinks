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
import { getDrinksByCategory } from '../slices/drink/drink.thunks';

export default function Dashboard() {
  const dispatch = useDispatch();
  const categoryName = useSelector((state: any) => state.category.value);
  const drinkData = useSelector((state: any) => state.drink.items);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDrink, setSelectedDrink] = useState<any>({} as any);

  useEffect(() => {
    dispatch(getDrinksByCategory(categoryName));
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

          <LinkDrinks data={drinkData.data} handleSelet={handleSeletDrink} />
        </Stack>
      </Flex>
    </Flex>
  );
}
