// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import Massage from "../../assets/Massage.svg"
import Massage1 from "../../assets/Massage.svg"
import Loaction from "../../assets/Location.svg"
import Call from "../../assets/Call.svg"
import arrow5 from '../../assets/arrow.svg'

const Contact = () => {
  const [result, setResult] = React.useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87f7b5a7-a0cc-441e-b43f-c3bd695757a6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='Contact'>
        <div className="Contact-col">
            <h3>Send us a Massage<img src={Massage} /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi, harum maxime molestias nihil magnam nemo eos tenetur recusandae voluptas?</p>
            <ul>
                <li> <img src={Massage1}/>xyz@gmail.com</li>
                <li> <img src={Call}/>123466788</li>
                <li> <img src={Loaction}/>77 Mechaure , opp vila , DHO<br/>Ma 09377, United State</li>
            </ul>
        </div>

        <div className="Contact-col">
                <form action="" method="post" onSubmit={onSubmit}>
                    <label htmlFor="Name">Your Name</label>
                    <input type="text" name='Name' placeholder='Enter Your Name' required />
                    <label htmlFor="Number">Phone Number</label>
                    <input type="tel" name='Number' placeholder='Enter Your Name' required maxLength={10}/>
                    <label htmlFor='Massage'>Wirte Your Massage</label>
                    <textarea name="Massage" rows="6" placeholder='Enter Your Massgae' required></textarea>
                    <button type='submit' className='btn4'>Submit<img src={arrow5} className='arrow5'/></button>
                </form>
                <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact