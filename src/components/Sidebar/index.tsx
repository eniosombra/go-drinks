import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack } from '@chakra-ui/react';
import { BiDrink } from 'react-icons/bi';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import {
  changeCategory,
  getCategories,
} from '../../slices/category/category.slice';

export function Sidebar() {
  const dispatch = useDispatch();
  const categoryName = useSelector((state: any) => state.category.value);
  const categories = useSelector((state: any) => state.category.item);
  const { data } = categories;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="DRINK CATEGORIES">
          {data &&
            data.drinks.map((category: any) => (
              <NavLink
                key={category.strCategory}
                icon={BiDrink}
                isActive={categoryName === category.strCategory}
                onClick={() => dispatch(changeCategory(category.strCategory))}
              >
                {category.strCategory}
              </NavLink>
            ))}
        </NavSection>
      </Stack>
    </Box>
  );
}
