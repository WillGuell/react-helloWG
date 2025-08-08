import React from "react";
import NavBar from "./NavBar"
import PageTitle from "./PageTitle"
import Cards from "./Cards"
import Footer from "./Footer"

const cardTitle = ["card1", "card2", "card3", "card4"]

const cardData = [
  {
    title: "Jiu Jitsu Origins",
    text: "Jiu-jitsu's origins can be traced back to ancient Japan, where it developed as a self-defense system for samurai warriors when they were disarmed. It evolved from earlier bujutsu",
    image: "https://i0.wp.com/zenyojiujitsu.com/wp-content/uploads/2020/03/Early-Jiu-Jitsu.jpg?w=1280&ssl=1",
    buttonLabel: "Learn More"
  },
  {
    title: "Mitsuyo Maeda",
    text: "A Japanese judoka who traveled the world demonstrating his art and eventually settled in Brazil. There, he taught Carlos Gracie and others, laying the foundation for what would become BJJ",
    image: "https://www.bjjee.com/wp-content/uploads/2013/08/conde_koma.jpg",
    buttonLabel: "Discover"
  },
  {
    title: "The Gracie family",
    text: "When Maeda ended up arriving in Brazil, he met Gastão Gracie who was a business partner of the American Circus in Belém. In 1916, Italian Argentine circus Queirolo Brothers staged shows there and presented Maeda. In 1917, Carlos Gracie—14 year old son of Gastão Gracie, watched a demonstration by Maeda at the Da Paz Theatre and decided to learn judo (also known at the time as ‘Kano Jiu-Jitsu’). Maeda accepted Gracie as a student, and the youth went on to become a great exponent of the art and ultimately, with his younger brother Hélio Gracie, founded Gracie Jiu-Jitsu, modern Brazilian Jiu-Jitsu. ",
    image: "https://grapplinginsider.com/wp-content/uploads/2022/05/graciefamily.jpg",
    buttonLabel: "Explore"
  },
  {
    title: "BJJ makes it to the USA",
    text: "After hearing stories of America from cousin Rolls, Rorion decided to move to California. He worked several odd jobs in the cleaning industry while growing his BJJ student portfolio, teaching from his garage. This project would be one of the most important elements in setting the tone for future BJJ entrepreneurs.",
    image: "https://www.bjjheroes.com/wp-content/uploads/2019/08/gracies1980s.jpg",
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