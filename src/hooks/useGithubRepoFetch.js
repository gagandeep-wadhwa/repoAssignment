import { useState, useEffect } from 'react';
import axios from 'axios';

const useGithubRepoFetch = () => 
{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const pastWeekDate = function getLastWeeksDate() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  }
  const fetchAsync = async ()=>{
    const data  = await axios.get(`https://api.github.com/search/repositories?q=created:%3E${pastWeekDate().toISOString().slice(0, 10)}&sort=stars&order=desc`)
    if (window) {
      localStorage.removeItem('repos');
      localStorage.removeItem('filteredRepos');
      localStorage.setItem('repos', JSON.stringify(data && data.data && data.data.items));
      localStorage.setItem('filteredRepos', JSON.stringify([]));
   }
    console.log(data.data.items);
   const items = data?.data?.items?.map((item)=>{
       return {...item,isStarred:false, disabled:false}
   })
    setData(items);
  }
  useEffect(() => {
    fetchAsync();
    setLoading(false)
    return () => {
      if (window) {
        localStorage.removeItem('repos');
        localStorage.removeItem('filteredRepos')
    }
    };
  }, []);

  return { data, loading, setData };
};

export default useGithubRepoFetch;
