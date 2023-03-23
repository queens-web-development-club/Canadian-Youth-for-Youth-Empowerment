import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Typography, TextField} from '@mui/material'

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'SRkHp6qoxf6HQxEDP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  const [values, setValues] = useState({
    message: ""
  });
  const CHARACTER_LIMIT = 200;
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center', width:'60vw'}}> 
      <TextField 
        type={'text'} 
        name={'from_name'} 
        label={'Your Name'} 
        variant='filled' 
        fullWidth 
        sx={{backgroundColor:'white', marginTop:'3em', width:"100%"}}
      />

      <TextField 
        type={'text'} 
        name={'to_name'} 
        label={'To'} 
        variant='filled' 
        fullWidth 
        sx={{backgroundColor:'white', marginTop:'3em', width:"100%"}}
      />

      <TextField 
        type={'text'} 
        multiline={true} 
        rows={5} 
        helperText={`${values.message.length}/${CHARACTER_LIMIT}`}
        onChange={handleChange("message")}
        inputProps={{maxLength:CHARACTER_LIMIT}} 
        
        name={'message'} 
        label={'Message'} 
        variant='filled' 
        fullWidth 
        sx={{width:"100%",backgroundColor:'white', marginTop:'3em', marginBottom:'3em'}}
      />       

      <Button value="Send" type="sumbit" style={{borderRadius:'60px', textTransform:"none"}} sx={{backgroundColor:'#FBC99D',color:'black', padding:'1.5em', ":hover":{backgroundColor:'#deaaff', color:'white', padding:'1.5em'}}} display='flex' variant='contained'>
          <Typography fontSize={'32'} variant="paragraph">
              Send a Thank You
          </Typography> 
      </Button>
    </form>
  );
};

export default EmailForm
