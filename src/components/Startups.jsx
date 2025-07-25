import React from "react";

const StartUps = () => {
  const items = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdLCpxwti9WTG5SmOOXmlUQu7eSlpuHXsnA&s",
      title: "EcoInnovate",
      text: "  Developing sustainable solutions for waste management and enewable energy generation.",
      year: "2024",
      name: "Subh Kumar",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhHLQZtnrPUbIQB7Ggq_JUmG7K4TNV0BBJg&s",
      title: "EcoInnovate",
      text: "  Developing sustainable solutions for waste management and enewable energy generation.",
      year: "2017",
      name: "Abhay Kumar",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SpdrXZoDj1cXjViBoK6aWwShGpBfPRBRgw&s",
      title: "EcoInnovate",
      text: "  Developing sustainable solutions for waste management and enewable energy generation.",
      year: "2026",
      name: "Vinit Sagar",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKX2y-92Lgl0fEgjNpgWZhDcDZNz9J1jkrg&s",
      title: "EcoInnovate",
      text: "  Developing sustainable solutions for waste management and enewable energy generation.",
      year: "2018",
      name: "Anil Kumar singh",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4Buvn1Tug8KuPhYAAREN1EWKRCq3vniiBg&s",
      title: "EcoInnovate",
      text: "  Developing sustainable solutions for waste management and enewable energy generation.",
      year: "2021",
      name: "Aman kumar",
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
      title: "EcoInnovate",
      text: "  Developing sustainable solutions for waste management and enewable energy generation.",
      year: "2022",
      name: "Dewang Bhardwaj",
    },
  ];
  return (
    <div>
      <div className="w-full p-15 bg-sky-500 text-white dark:bg-gray-900 dark:text-white ">
        <h1 className="text-5xl font-bold">Startups @ RIF</h1>
        <p className="text-2xl pt-2">
          Discover the innovative startups incubated at Rohilkhand Incubation
          Foundation
        </p>
      </div>
      <div className="flex ">
        <div className=" p-4 flex justify-around  w-full gap-8 dark:bg-gray-900  flex-wrap">
          {items.map((item) => (
            <div className="card bg-base-100 w-96 shadow-sm p-4 hover:bg-blue-400 hover:cursor-pointer">
              <figure>
                <img src={item.url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="text-red-500">{item.text}</p>
                <p>
                  <span className="font-bold">Founded : </span>
                  {item.year}
                </p>
                <p>
                  <span className="font-bold">Founder : </span>
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartUps;
