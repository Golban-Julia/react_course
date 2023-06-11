import { useState, useEffect } from "react";
import { fetchPopularRepos } from "../../api";
import PacmanLoader from "react-spinners/PacmanLoader";
import UserList from "./UserList";
import Tabs from "./Tabs";

const languages= ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

const Popular = () => {
   
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [loading, setLoading]= useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError]= useState(null);
    console.log(repos)
    
    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            fetchPopularRepos(selectedLanguage)
            .then(data => setRepos(data))
            .catch(error => setError(error))
            .finally(()=> setLoading(false));
        },2000)
    }, [selectedLanguage]);

    
    if(error){
        return<p>Error</p>
    }
    return(
        <div className={loading ? "loading" : "none"}>
        {
            loading ?
            <PacmanLoader
                color={'#d636a3'}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            :
            <div >
                <Tabs 
                    languages={languages} 
                    setSelectedLanguage={setSelectedLanguage} 
                    selectedLanguage={selectedLanguage}
                />
                <UserList repos={repos}/>
            </div>
        }
        </div>
    ) 
}

export default Popular;


