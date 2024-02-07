import React from 'react'
import {Grid,Button} from '@mui/material'
import Chat from './Chat'
import { Link } from 'react-router-dom';

// Your React component code here

export default function Home() {
  return (
    <div className='my-class'>
        <div>
    <Grid style={{padding:'60px',color:'violet',backgroundColor:'rgba(123, 239, 228, 0.8)'}}> 
    <div style={{marginRight:'1500px'}}>
        <Button variant="text">Features</Button>
    </div>
    <div style={{marginRight:'1090px',marginTop:'-37px'}}>
        <Button variant="text">Solutions</Button>
    </div>
    <div style={{marginRight:'880px',marginTop:'-37px'}}>
        <Button variant="text">Resources</Button>
    </div>
    <div style={{marginRight:'630px',marginTop:'-36px'}}>
        <Button variant="text">Pricing</Button>
    </div>
    <div style={{marginLeft:'600px',marginTop:'-36px'}}>
        <Button variant="text">Contact</Button>
    </div>
    <div style={{marginLeft:'800px',marginTop:'-37px'}}>
        <Link to='Login'>
        <Button variant="text">Log In</Button>
        </Link>
    </div>
    <div style={{marginLeft:'1050px',marginTop:'-37px'}}>
    <Button variant="contained">Get Started</Button>
    </div>  
    </Grid>
    <div>
     <Grid style={{backgroundColor:'rgba(233, 236, 255, 0.8)',maxWidth:'100%',padding:'10px'}}>
          <div style={{textAlign:'center',paddingTop:"10px"}}>
          <h1>A smarter way to work</h1>
          <h5>
              With Asana, you can drive clarity and impact at scale by connecting work and workflows to company-wide goals.
          </h5> 
          <Link to='Login'>
          <Button variant="secondary" style={{padding:'10px',color:'violet',marginRight:'20px'}}>Get Started</Button>
          </Link>
          <Button variant="outlined" color="error">see how it works</Button>
            </div> 
            <div style={{paddingLeft:'70%'}}>
                <Chat/>
            </div>
           
     </Grid>
    </div>
    </div>
    </div>

  )
}
