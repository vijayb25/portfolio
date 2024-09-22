import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    to_name: 'Vijay',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value, }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = 't8_GwcJtez5humLNF';
    const serviceID = 'service_aak1s5c';
    const templateID = 'template_dle2dso';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        alert('Email sent successfully!');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        alert('Failed to send the email.');
        console.log('FAILED...', error);
      });

    // Reset form fields after submission
    setFormData({to_name: 'Vijay', subject: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:w-[49%] md:w-[100%] sm:w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" className="text-black w-full p-2 rounded-md" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject..." required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input type="email" className="text-black w-full p-2 rounded-md" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email..." required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message:</label>
        <textarea id="message" className="text-black w-full p-2 resize-none rounded-md" name="message" value={formData.message} onChange={handleChange} placeholder="Enter message..." required />
      </div>
      <button className="p-4 w-[150px] bg-red-500 rounded-md hover:bg-red-600" type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
