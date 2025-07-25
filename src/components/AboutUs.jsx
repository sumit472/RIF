import React from "react";

const AboutUs = () => {
  const items = [
    {
      id: 1,
      name: "Dr. Yatendra Kumar",
      text: "Chief Operating Officer",
      url: "https://www.shutterstock.com/image-photo/front-view-portrait-happy-man-260nw-2103442847.jpg",
      para: "Leading RIF's operations and strategic initiatives to foster innovation and entrepreneurship in the region."

    },
    {
      id: 2,
      name: "Ms. Shubhi Aggarwal",
      text: "Assistant Director",
      url:"https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
      para: "Overseeing program development and implementation to support startups in their growth journey."
    },
    {
      id: 3,
      name: "Ms. Sunil Sharma",
      text: " Director",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s",
      para: "Overseeing program development and implementation to support startups in their growth journey."
    },
    {
      id: 4,
      name: "Ms. Subh Aggarwal",
      text: "Assistant Director",
      url:"https://t3.ftcdn.net/jpg/03/07/57/54/240_F_307575473_NaZ8XNxe1BBt5Z0fKgMZWJgb1JIzDuYR.jpg",
      para: "Overseeing program development and implementation to support startups in their growth journey."
    },
    {
      id: 5,
      name: "Ms. Simran thakur",
      text: "Assistant Director",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1n5HRkFyfw_8Rcdz-WJdHRiz6XHBjhYtZg&s",
      para: "Overseeing program development and implementation to support startups in their growth journey."
    },
    {
      id: 6,
      name: "Ms. Shubhi Aggarwal",
      text: "Assistant Director",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo61sBSCEYP4aLAFInybbzZcb7qRCY6H5oxw&s",
      para: "Overseeing program development and implementation to support startups in their growth journey."
    }
  ];
  return (
    <div>
      <div className="w-full p-15 bg-sky-500 text-white dark:bg-gray-900 dark:text-white ">

        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-2xl pt-2">
          Learn about Rohilkhand Incubation Foundation at MJPRU
        </p>
      </div>
      <div className="flex pt-15 gap-25 dark:bg-gray-900 dark:text-white ">
        <div className="w-1/2 pl-15">
          <button className="btn bg-orange-400">Our Story</button>
          <h1 className="pt-5 font-bold text-3xl">
            Rohilkhand Incubation Foundation
          </h1>
          <p>
            Established as a non-profit Section 8 company, Rohilkhand Incubation
            Foundation (RIF) at Mahatma Jyotiba Phule Rohilkhand University
            (MJPRU) is dedicated to fostering innovation, incubation, and
            entrepreneurship.
            <br />
            <br />
            RIF serves as a hub for startups, providing essential support and
            resources to transform innovative ideas into successful ventures.
            Our foundation is committed to creating a vibrant ecosystem for
            entrepreneurs in the Rohilkhand region and beyond.
          </p>
        </div>

        <div className="p-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmng2iRb-6MZ8MrBAOVREnpTvzJ9FeuongGA&s"
            alt=""
            className="w-130 h-100"
          />
        </div>
      </div>
      <div className="dark:bg-gray-900 dark:text-white ">
        <h1 className="text-4xl text-center pt-15 font-bold">
          Our Leadership Team
        </h1>
        <p className="text-center text-2xl">
          Working together with government bodies and industry leaders to create
          a <br /> thriving startup ecosystem
        </p>
      </div>

      <div className=" p-4 flex justify-around  w-full gap-8 dark:bg-gray-900 flex-wrap pt-10">
        {items.map((item) => (
          <div className="card bg-base-100 w-96 shadow-sm p-4  hover:bg-blue-500 hover:cursor-pointer">
            <figure>
              <img
                src={item.url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>

              <p className="text-red-500">{item.text}</p>
              <p>
                {item.para}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AboutUs;
