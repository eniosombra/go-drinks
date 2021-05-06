import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack } from '@chakra-ui/react';
import { BiDrink } from 'react-icons/bi';

import { changeCategory } from '../../slices/category/categorySlice';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import { api } from '../../services/api';

type Category = {
  name: string;
};

export function Sidebar() {
  const dispatch = useDispatch();
  const categoryName = useSelector((state: any) => state.category.value);

  const [categories, setCategories] = useState<Category[]>([] as Category[]);

  async function getCategories() {
    const { data } = await api.get('/list.php?c=list');
    setCategories(
      data.drinks.map((category: any) => ({
        name: category.strCategory,
      }))
    );
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="DRINK CATEGORIES">
          {categories.map((category) => (
            <NavLink
              key={category.name}
              icon={BiDrink}
              isActive={categoryName === category.name}
              onClick={() => dispatch(changeCategory(category.name))}
            >
              {category.name}
            </NavLink>
          ))}
        </NavSection>
      </Stack>
    </Box>
  );
}
