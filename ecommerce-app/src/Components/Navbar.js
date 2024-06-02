// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
  const { auth, logout } = useAuth();

  return (
    <Box bg="teal" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        {auth.isAuthenticated ? (
          <>
            <Text color="white">{auth.email}</Text>
            <Flex>
              <Button as={Link} to="/" colorScheme="Black" variant="outline" mr={4}>
                Home
              </Button>
              <Button onClick={logout} colorScheme="black" variant="outline">
                Logout
              </Button>
            </Flex>
          </>
        ) : (
          <Button as={Link} to="/login" colorScheme="black" variant="outline">
            Login
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
