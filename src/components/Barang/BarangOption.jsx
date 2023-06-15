import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button, Typography } from '@mui/material';

export default function BarangOption(props) {
    // console.log(props);
    const [alignment, setAlignment] = React.useState(props.variant[0].name);
    
    console.log(alignment);

    const handleChange = (event, newAlignment) => {
        if(newAlignment!==null){
            setAlignment(newAlignment);
        }
    };
  

  
  let variant 

  if(props.variant){
    variant = props.variant.map((item) => { 
        return(
              <ToggleButton value={item.name} onClick={event => props.handleClick(item.price)} >{item.name}</ToggleButton>
        )
     })
    }

   


  return (

     <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"

    >
    {variant}
    </ToggleButtonGroup>
   
  );
}