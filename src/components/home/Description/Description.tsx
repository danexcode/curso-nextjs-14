"use client"
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABSAFIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEFBv/EAB0QAQADAQEBAQEBAAAAAAAAAAABAgMhEhETMWH/xAAYAQEBAQEBAAAAAAAAAAAAAAADAgABBP/EABcRAQEBAQAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/APk/g+N+XPhc1rGYMrDMQbSCisMpB9YYpVRWgtKjPxm0KPDFqCX1LeCLKr1TWg+EVgOgnXGvLM1PmC5h5s16LC4g6lWIg7ODwVh+dVVKF5VWZ0RpLHjhd6LPHCtK8E3Xna1R3h6O1UGkEzXSQ6F9biiS7NzJdpefJ3IPzTxPT8p6eJ1F+K3OOIcZXZzxyhsO+cK0g37wrSeDSg3h5+v9l6G8vO1nqoqFBz6FKbmxdrFzdmbjkXNGxY/OyKLH53Ip6mNlud3lZXWU0TaPUX++FaX4V+nC76JHYVtZBrPVOt0WllRmfoY+/wChbvU3tz2T6HpuIzo+LHUsliTaSmvVl6Gd1NNHn0sorYdrti39GLaE+mbWaC1HNLprz0y8kWkuQ1z6HArieoHYAVXMN1OoALT2YUUPqAKkpjNgGgdFWJkA+QaZACkP/9k='

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClink = () => setBorder(!hasBorder);

  const context = classNames.bind(styles)
  const buttonStyles = context('Description__button', {
    'Description__button--border': hasBorder
  })

  console.log(buttonStyles)

  return (
    <section className={styles.Description}>
      <button onClick={handleClink} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image 
            src="/images/description.jpeg" 
            alt="products marketplace" 
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrows Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}