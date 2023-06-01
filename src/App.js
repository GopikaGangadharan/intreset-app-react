import './App.css';
import { Stack, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';




function App() {

  // state
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)


  const handlecalculate=(e)=>{
  // e.preventDefault()

    if(principle==0 || rate==0 || year==0){
      alert('please enter valid inputs')
    }
    else{
      console.log(principle);
      
      let output = principle*year*rate/100
  
      setInterest(output);
    }
    
  }
  
  const handlereset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }

  return (
    <div className="App">
    <div className='container'>
    <div className='heading_text'>
    <h1 className='main_heading'>Simple Interest Calculator</h1>
    <p className='heading_two'>Calculator your simple Interest Easily</p>
    </div>

<div className="total_amont_card">
  <div className="card_text">
    <h3 className='rupee_symbol'>₹{interest}</h3>
    <p className='total_amount_para'>Total Simple Interest</p>
  </div>
</div>

<form >
<div className="input_field">
<TextField id="outlined-basic" label="₹ Principle Amount" variant="outlined"
value={principle || ""} onChange={e=>setPrinciple(e.target.value)}/>
</div>
<div className="input_field">
<TextField id="outlined-basic" label="Rate of Interest(p.a)%" variant="outlined"
value={rate || ""} onChange={e=>setRate(e.target.value)} />
</div>
<div className="input_field">
<TextField id="outlined-basic" label="Time Period (Yr)" variant="outlined" 
value={year || ""} onChange={e=>setYear(e.target.value)}/>
</div>

{/* button */}
<Stack className='btn_group' direction="row"  spacing={2}>

<Button style={{backgroundColor:'black'}} className='btn' variant="contained"
onClick={ handlecalculate }>Calculate</Button>
<Button style={{color:'black'}} className='btn' variant="outlined"
onClick={ handlereset }>Reset</Button>

</Stack>


</form>

  </div>
    </div>
  );
}

export default App;
