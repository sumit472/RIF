import React from "react";

const Events = () => {
  const items = [
    {
      id: 1,
      title: "sumit kumar",
      content: "lorem Mahatma Jyotiba Phule Rohilkhand University ",
    },
    {
      id: 2,
      title: "Vipin",
      content: " Mahatma Jyotiba Phule Rohilkhand University",
    },
    {
      id: 3,
      title: "Vipin",
      content: " Mahatma Jyotiba Phule Rohilkhand University",
    },
    {
      id: 4,
      title: "Vipin",
      content: " Mahatma Jyotiba Phule Rohilkhand University",
    },
      {
      id: 5,
      title: "Vipin",
      content: " Mahatma Jyotiba Phule Rohilkhand University",
    },
      {
      id: 6 ,
      title: "Vipin",
      content: " Mahatma Jyotiba Phule Rohilkhand University",
    },




  ];
  return (
    <>
       {/* <div className="w-full p-15 bg-sky-500 text-white dark:bg-gray-900 dark:text-white ">

        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-2xl pt-2">
          Learn about Rohilkhand Incubation Foundation at MJPRU
        </p>
      </div> */}
    <div className="flex gap-10 flex-wrap  justify-around p-5">
      {items.map((item) => (
        <div className="card bg-base-100 w-96 shadow-sm" key={item.id}>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>
             {item.content}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Events;
