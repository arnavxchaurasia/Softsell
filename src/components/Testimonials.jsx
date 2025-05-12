import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials py-16 bg-gray-100" id="testimonials">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="flex justify-center space-x-8">
          <div className="w-1/3 p-4">
            <p className="italic mb-4">"SoftSell made it so easy to increase our sales performance!"</p>
            <p className="font-semibold">John Doe, CEO</p>
          </div>
          <div className="w-1/3 p-4">
            <p className="italic mb-4">"The best sales platform we've used. Highly recommend!"</p>
            <p className="font-semibold">Jane Smith, Marketing Head</p>
          </div>
          <div className="w-1/3 p-4">
            <p className="italic mb-4">"Our conversion rates skyrocketed after using SoftSell!"</p>
            <p className="font-semibold">Alex Johnson, Sales Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
