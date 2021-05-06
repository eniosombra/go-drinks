import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  isActive: boolean;
}

export function NavLink({
  icon,
  children,
  isActive = false,
  ...rest
}: NavLinkProps) {
  return (
    <Link
      display="flex"
      align="center"
      bg={isActive ? 'app.box' : 'app.bg'}
      p={1}
      borderRadius={4}
      {...rest}
    >
      <Icon
        as={icon}
        fontSize="20"
        color={isActive ? 'yellow.300' : 'gray.50'}
      />
      <Text
        ml="4"
        fontWeight="medium"
        color={isActive ? 'yellow.300' : 'gray.50'}
      >
        {children}
      </Text>
    </Link>
  );
}
