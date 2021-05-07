import { useEffect, useState } from 'react';
import {
  Button,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

type ModalDetailProps = {
  isOpen: boolean;
  onClose: () => void;
  drink: any;
};

export function ModalDetail({ isOpen, onClose, drink }: ModalDetailProps) {
  const [ingredients, setIngredients] = useState<any[]>([]);

  useEffect(() => {
    let ingredientItems: string[] = [];
    Object.keys(drink).forEach(
      (_, index) =>
        drink[`strIngredient${index}`] &&
        ingredientItems.push(drink[`strIngredient${index}`])
    );
    setIngredients(ingredientItems);
  }, [drink]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="app.box">
        <ModalHeader>Drink detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading size="lg">{drink.strDrink}</Heading>

          <Text mt={4} color="gray.400" fontSize="small">
            INSTRUCTIONS:
          </Text>
          <Text mb={2}>{drink.strInstructions}</Text>

          <Text color="gray.400" fontSize="small">
            INGREDIENTS:
          </Text>
          {ingredients.map((ingredient) => (
            <UnorderedList key={ingredient}>
              <ListItem>{ingredient}</ListItem>
            </UnorderedList>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
