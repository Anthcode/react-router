import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="home-header">
        <AiOutlineHome size={40} />
        <h1>Home</h1>
      </div>
      <section>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et velit laoreet, pretium nulla quis, mattis est.
            Vivamus condimentum sapien at quam porttitor, quis viverra orci
            egestas. Nullam sodales fringilla quam, nec mattis nunc gravida
            faucibus. Phasellus tempor pharetra felis, sed pellentesque nisi
            finibus a. Ut eu iaculis dui, ut malesuada ligula. Cras ante erat,
            tempor et ultricies at, tincidunt a tortor. Pellentesque facilisis
            scelerisque ante vel venenatis. Pellentesque suscipit suscipit
            magna, vitae efficitur purus dapibus eget. Duis ac laoreet nibh.
          </p>

          <p>
            Donec in imperdiet ante. Donec porttitor nisi nibh, sagittis viverra
            lorem sollicitudin nec. In ut sem rutrum, mollis elit sit amet,
            feugiat massa. Praesent tincidunt mi ut sodales molestie. Maecenas
            ut vestibulum elit, sed varius lorem. Morbi sed arcu tincidunt neque
            faucibus aliquet. Vivamus ultricies suscipit augue quis laoreet.
            Praesent lacinia dolor eu lacus tincidunt, id dapibus massa tempus.
            Fusce sit amet luctus erat, at posuere turpis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et velit laoreet, pretium nulla quis, mattis est.
            Vivamus condimentum sapien at quam porttitor, quis viverra orci
            egestas. Nullam sodales fringilla quam, nec mattis nunc gravida
            faucibus. Phasellus tempor pharetra felis, sed pellentesque nisi
            finibus a. Ut eu iaculis dui, ut malesuada ligula. Cras ante erat,
            tempor et ultricies at, tincidunt a tortor. Pellentesque facilisis
            scelerisque ante vel venenatis. Pellentesque suscipit suscipit
            magna, vitae efficitur purus dapibus eget. Duis ac laoreet nibh.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et velit laoreet, pretium nulla quis, mattis est.
            Vivamus condimentum sapien at quam porttitor, quis viverra orci
            egestas. Nullam sodales fringilla quam, nec mattis nunc gravida
            faucibus. Phasellus tempor pharetra felis, sed pellentesque nisi
            finibus a. Ut eu iaculis dui, ut malesuada ligula. Cras ante erat,
            tempor et ultricies at, tincidunt a tortor. Pellentesque facilisis
            scelerisque ante vel venenatis. Pellentesque suscipit suscipit
            magna, vitae efficitur purus dapibus eget. Duis ac laoreet nibh.
          </p>

          <p>
            Donec in imperdiet ante. Donec porttitor nisi nibh, sagittis viverra
            lorem sollicitudin nec. In ut sem rutrum, mollis elit sit amet,
            feugiat massa. Praesent tincidunt mi ut sodales molestie. Maecenas
            ut vestibulum elit, sed varius lorem. Morbi sed arcu tincidunt neque
            faucibus aliquet. Vivamus ultricies suscipit augue quis laoreet.
            Praesent lacinia dolor eu lacus tincidunt, id dapibus massa tempus.
            Fusce sit amet luctus erat, at posuere turpis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et velit laoreet, pretium nulla quis, mattis est.
            Vivamus condimentum sapien at quam porttitor, quis viverra orci
            egestas. Nullam sodales fringilla quam, nec mattis nunc gravida
            faucibus. Phasellus tempor pharetra felis, sed pellentesque nisi
            finibus a. Ut eu iaculis dui, ut malesuada ligula. Cras ante erat,
            tempor et ultricies at, tincidunt a tortor. Pellentesque facilisis
            scelerisque ante vel venenatis. Pellentesque suscipit suscipit
            magna, vitae efficitur purus dapibus eget. Duis ac laoreet nibh.
          </p>
        </article>
      </section>
    </motion.div>
  );
}
