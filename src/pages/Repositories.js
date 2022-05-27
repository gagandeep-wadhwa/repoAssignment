import React from 'react';
import ReposList from '../modules/repository/RepoList';
import { Container } from '../components/Grid';
import Box from '../components/Box';

const Repositories = () => {
  return (
    <Container>
      <Box textAlign="center">
        <h1>Github Repositories</h1>
      </Box>
      <ReposList />
    </Container>
  );
};

export default Repositories;
