import React from 'react'
import { Link } from 'react-router-dom'
import {moviesData} from './MoviesData'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Trailer() {
    const {iduser} = useParams()
    
  return (
    <div style={{backgroundColor:'#F7B787'}}>
<p style={{textAlign:'center',padding:'50px',maxWidth:'800px',marginLeft:'400px',fontWeight:'bold',fontStyle:'italic',fontFamily:'Arial'}}>{moviesData.find((el)=>el.id===Number(iduser)).Descrip}</p>
<iframe
        width="560"
        height="315"
        src={moviesData.find((el)=>el.id===Number(iduser)).url}
        allowFullScreen
        title="Embedded Video"
        style={{marginLeft:'500px',borderRadius:'12px'}}
      />
      <br></br><br></br>
      <Link to='/'>
<Button style={{ margin: '15px',backgroundColor:'#F9B572',color:'#116A7B',fontWeight:'bold',marginLeft:'750px' }}

>  Home </Button>
     </Link>
    </div>
    
  )
  
}

export default Trailer