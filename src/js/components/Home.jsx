import React from "react";
import NavBar from "./NavBar"
import PageTitle from "./PageTitle"
import Cards from "./Cards"
import Footer from "./Footer"

const cardTitle = ["card1", "card2", "card3", "card4"]

const cardData = [
  {
    title: "Card 1",
    text: "This is the description for card 1.",
    image: "https://via.placeholder.com/500x325",
    buttonLabel: "Learn More"
  },
  {
    title: "Card 2",
    text: "This is the description for card 2.",
    image: "https://via.placeholder.com/500x325",
    buttonLabel: "Discover"
  },
  {
    title: "Card 3",
    text: "This is the description for card 3.",
    image: "https://via.placeholder.com/500x325",
    buttonLabel: "Explore"
  },
  {
    title: "Card 4",
    text: "This is the description for card 4.",
    image: "https://via.placeholder.com/500x325",
    buttonLabel: "Find Out More"
  }
];





//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<PageTitle/>
			<div className="container my-5">
  <div className="row">
    {cardData.map((card, index) => (
      <div className="col-md-3 mb-4" key={index}>
        <Cards
          title={card.title}
          text={card.text}
          image={card.image}
          buttonLabel={card.buttonLabel}
        />
      </div>
    ))}
  </div>
</div>
		
			<Footer/>
			</div>
			
		
	);
};

export default Home;