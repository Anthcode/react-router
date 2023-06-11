import React from 'react';
import { FcContacts } from "react-icons/fc";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
    
          
    <motion.div
      className="home-header"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FcContacts size={40}/>
      <h1>Contact</h1>
    </motion.div>
      <section>
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et velit laoreet, pretium nulla quis, mattis est. Vivamus condimentum sapien at quam porttitor, quis viverra orci egestas. Nullam sodales fringilla quam, nec mattis nunc gravida faucibus. Phasellus tempor pharetra felis, sed pellentesque nisi finibus a. Ut eu iaculis dui, ut malesuada ligula. Cras ante erat, tempor et ultricies at, tincidunt a tortor. Pellentesque facilisis scelerisque ante vel venenatis. Pellentesque suscipit suscipit magna, vitae efficitur purus dapibus eget. Duis ac laoreet nibh.</p>
        </article>
      </section>  
    </motion.div>
  );
}
