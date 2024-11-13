import React from 'react'

function About() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='lg:h-creen'>
      <h1 className='text-2xl font-bold mb-4'>About Us</h1>
      <p>
          Welcome to oneStopShop, where we believe that quality and convenience should go hand in hand. Founded with a passion for exceptional products and a seamless shopping experience, oneStopShop is here to bring you closer to the things you love.
          <br />
          <br />
          <b>Our journey began with a simple idea:</b> make quality products accessible to everyone, no matter where they are. In a world full of choices, we aim to stand out by carefully curating items that are both high in quality and reasonably priced. From the beginning, we’ve focused on building strong relationships with our suppliers to bring you the best deals without sacrificing quality.
          <br />
          <br />
          At oneStopShop, customer satisfaction is at the core of what we do. We’ve designed our website with your experience in mind – easy to navigate, secure, and fast. Our team is dedicated to making your shopping experience enjoyable, offering personalized support and being there when you need us.
          <br />
          <br />
          <b>We're more than just an online store.</b> We’re a community of passionate individuals who share a commitment to excellence. Every product in our collection has been thoughtfully selected, tested, and approved by our team to ensure it meets our high standards. Whether you're looking for essentials or unique finds, we’re excited to help you discover exactly what you need.
          <br />
          <br />
          😊❤️ Thank you for choosing oneStopShop. We're here to make your shopping journey smooth, enjoyable, and filled with excitement. Happy shopping!</p>
    </div>
  )
}

export default About