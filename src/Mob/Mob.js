
import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Runner from './Runner'

function Mob() {

  
  const handlerN=(e)=>{
    e.preventDefault()
    getWithFetch(userData.next)
  }
  const handlerP=(e)=>{
    e.preventDefault()
    getWithFetch(userData.previous)
  }
  const ButtonSection=()=>{
  
    return <div className='Dataframes'>
      <div className='ButtonSection'>
      <Button   color="default" className="Buttons"onClick={handlerP}>
<NavigateBeforeIcon/> Before
  </Button>
  <h5 className="total">Totally {userData.count} People found</h5>
  
  <Button variant="text" className="Buttons" color="default" onClick={handlerN}>
  NEXT<NavigateNextIcon/>
  </Button>
  </div>
  
  </div>
  
  
  
  }
  const getWithFetch = async (Url) => {
    const response = await fetch(Url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  const [userData, setUserData] = useState({"results":[],});
  
  useEffect(() => {
getWithFetch("https://swapi.dev/api/people/");
  }, []);
  

  const Lists=()=>{
    let resp=(userData.count? <Runner userData={userData} device='Mob'/>:'Loading...')
  return resp
}

return (
    <div className="App">
      <Header/>
        <ButtonSection/>
          <Lists/>
        <ButtonSection/>

          </div>
  );
}

export default Mob;
