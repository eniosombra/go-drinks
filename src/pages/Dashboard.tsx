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
  Modal,
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

import { api } from '../services/api';
import { Sidebar } from '../components/Sidebar';

type Drink = {
  id: string;
  name: string;
  imageUrl: string;
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const categoryName = useSelector((state: any) => state.category.value);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [drinks, setDrinks] = useState<Drink[]>([] as Drink[]);

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

  return (
    <Flex direction="column" h="100vh">
      <Flex w="100%" maxWidth="1480" mx="auto" my="6" px="6">
        <Sidebar />

        <Stack w="100%">
          <>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent bg="app.box">
                <ModalHeader>Drink detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Text text text</Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="yellow" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>

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
                onClick={onOpen}
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
