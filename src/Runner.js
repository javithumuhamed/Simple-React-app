import Mqwe1 from './Mqwe1'
import './Runner.css'
const Runner=(props)=>{


    let rows=[]
    for (const a of props.userData.results){
      rows.push(<Mqwe1 person={a}/>)

      }
return <table className={`${props.isMob==='MF' ? "MFtable" : "TFtable"}`}>
    <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Mass</th>
      <th>Hair Color</th>
      <th>Skin Color</th>
      <th>Eye Color</th>
      <th>Birth Year</th>
    </tr>
    {rows}
    </table>        
  
  }
export default Runner  