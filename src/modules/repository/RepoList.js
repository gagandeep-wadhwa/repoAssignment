import React from 'react';

import { Row, Col } from '../../components/Grid';
import Box from '../../components/Box';
import RepoCard from './RepoCard';
import useGithubRepoFetch from '../../hooks/useGithubRepoFetch';
import FilterBox from './FilterBox';

const RepoList = () => {
  const [repos, setRepos] = React.useState([]);
  const [isChecked,setChecked] = React.useState(false);
  const { data, loading, setData } = useGithubRepoFetch();

  const handleCheckOnClick = () =>{
    setChecked(prevCheck => !prevCheck);
  }
  // add/remove recipe, feel free to remove or rename these these variables and values.
  const handleButtonClick =  (repoId) => {
    const filteredRepos = data.filter((repo) =>
     repo.id === repoId
    ).map(el=>{
      return {...el,isStarred:true,disabled: true}
    });
    const updatedRepos = data.map( el=>{
      return el.id === repoId ? {...el,isStarred:true,disabled: true}: el
    });
    setRepos((oldArray)=>[...oldArray,...filteredRepos]);
    setData(updatedRepos)
    localStorage.setItem('repos',JSON.stringify(updatedRepos));
    localStorage.setItem('filteredRepos',JSON.stringify(filteredRepos))
  }
 
  if (loading) {
    return null;
  }

  return (
    <>
      <Row>
      <Box mb="lg" position="right">
          <FilterBox isChecked={isChecked} handleCheckOnClick={handleCheckOnClick}/>
      </Box>
      </Row>
      <Row>
        {isChecked ? 
         repos.map((repo) => (
            <Col sm={6} md={6} xl={4} key={repo.id}>
              <Box mb="lg">
                <RepoCard
                  {...repo}
                  handleStarRepo={handleButtonClick}
                  isChecked ={true}
                />
              </Box>
            </Col>
          ))
         :
        data.map((repo) => (
          <Col sm={6} md={6} xl={4} key={repo.id}>
            <Box mb="lg">
              <RepoCard
                {...repo}
                handleButtonClick={handleButtonClick}
                isChecked ={false}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RepoList;
