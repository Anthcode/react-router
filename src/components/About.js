import React from 'react';
import { FcAbout } from 'react-icons/fc';

export default function About() {
  return (
    <div className="about">
      <div className="home-header">
        <FcAbout size={40} />
        <h1>About</h1>
      </div>
      <section>
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et velit laoreet, pretium nulla quis, mattis est. Vivamus condimentum sapien at quam porttitor, quis viverra orci egestas. Nullam sodales fringilla quam, nec mattis nunc gravida faucibus. Phasellus tempor pharetra felis, sed pellentesque nisi finibus a. Ut eu iaculis dui, ut malesuada ligula. Cras ante erat, tempor et ultricies at, tincidunt a tortor. Pellentesque facilisis scelerisque ante vel venenatis. Pellentesque suscipit suscipit magna, vitae efficitur purus dapibus eget. Duis ac laoreet nibh.</p>
        </article>
      </section>  
    </div>
  );
}
