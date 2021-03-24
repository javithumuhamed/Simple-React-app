
import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Runner from './Runner'
import Sidebar from './Sidebar'
function App() {

const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

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
  

  console.log(typeof(userData.results))
  const Lists=()=>{
    let resp=(userData.count? <Runner userData={userData} isMob={`${isMobile ? "MF" : "TF"}`}/>:'Loading...')
  return resp
}

return (
<div className={`${isMobile ? "mobile-class" : "App"}`}>
      <div className={`${isMobile ? "Mob-container" : "Container"}`}>
      <Header/>
      <div className={`${isMobile ? "Mob-sidebar" : "Sidebar"}`}>
      <Sidebar/>
      </div>.
      <div className={`${isMobile ? "Mob-Downer" : "Downer"}`}>      
      <div className={`${isMobile ? "Mob-button" : "Button"}`}></div>
        <ButtonSection/>

          <Lists/>
  
      <div className={`${isMobile ? "Mob-button" : "Button"}`}>  <ButtonSection/></div>
      </div>
  </div>

</div>
      
  );
}/*





function App() {
  return <div className="App">
  </div>
}
*/
export default App;
