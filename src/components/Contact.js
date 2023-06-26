import React,{useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const serviceId = 'service_p4q2jug';
        const templateId = 'template_hwqlmit';
        const userId = 'Ld2P8_FjPZACTKEpk';
    
        // Initializing EmailJS with user ID
        emailjs.init(userId);
    
        //  email parameters
        const templateParams = {
          name,
          email,
          phone,
          message,
        };
    
        // Send the email
        emailjs.send(serviceId, templateId, templateParams)
          .then((response) => {
            console.log('Email sent successfully!', response);
            // Resetting the form fields after successful submission
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
      };
    
    
  return (
    <div className="contact-form" id='contact'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" required>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" required>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Contact No:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group" >
          <label htmlFor="message" required>Message/Query:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
   
  )
}

export default Contact