import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
const EmailContactForm = () => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_9u2nxwm', 'template_2rbhiq9', form.current, 'Kdf0v7NOJGAlTV-x5')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
 };
 
 return (
   <Form 

   ref={form} onSubmit={sendEmail}>
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" name="user_name" />
     <Form.Label>Email </Form.Label>
     <Form.Control type="email" name="user_email" />
     <Form.Label>Message</Form.Label>
     <Form.Control as="textarea" rows={3} name="message" />
     <br />
     <Form.Control type="submit" value="Send" />
   </Form>
 
 );

// return (

//);

};
 
export default EmailContactForm;
 