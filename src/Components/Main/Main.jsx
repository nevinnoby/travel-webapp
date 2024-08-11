import React, {useEffect} from "react";
import './main.css'
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpeg'
import img6 from '../../Assets/img(6).jpeg'
import img7 from '../../Assets/img(7).jpeg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import img10 from '../../Assets/img(10).jpg'
import img11 from '../../Assets/img(11).jpg'
import img12 from '../../Assets/img(12).jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css'



const Data = [
    {
    id:1,
    imgSrc: img,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '₹8,000',
    description: 'Bali is an Indonesian Island and one of the best holiday I destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches'

    },

    {
    id:2,
    imgSrc: img2,
    destTitle: 'Effiel Tower',
    location: "Paris, France",
    grade: "Iconic Landmark",
    fees: "₹17,000",
    description: "The Eiffel Tower is a wrought-iron lattice tower located in Paris, France. Constructed as the entrance arch for the 1889 World's Fair, it has become a global cultural icon of France and one of the most recognizable structures in the world. Visitors can enjoy breathtaking views of Paris from its observation decks."
    },

    {
    id:3,
    imgSrc: img3,
    destTitle: 'Bora Bora',
    location: "French Polynesia",
    grade: "Tropical Paradise",
    fees: "₹19,000",
    description: "Bora Bora is a small island in French Polynesia, renowned for its crystal-clear turquoise waters, luxurious overwater bungalows, and stunning coral reefs. It's a top destination for those seeking a tropical paradise with breathtaking scenery and a serene atmosphere."
},

    {
    id:4,
    imgSrc: img4,
    destTitle: 'Glacier National Park',
    location: "Montana, USA",
    grade: "Wilderness Adventure",
    fees: "₹25,000",
    description: "Glacier National Park, located in Montana, USA, is famous for its stunning mountain landscapes, pristine forests, and over 700 miles of hiking trails. It's a haven for nature lovers and outdoor enthusiasts seeking adventure and breathtaking natural beauty."
},

    {
    id:5,
    imgSrc: img5,
    destTitle: 'Rome',
    location: 'Italy',
    grade: "Historical Wonder",
    fees: "₹20,500", // Example fee, update as needed
    description: "Rome, the capital city of Italy, is a treasure trove of ancient history, stunning architecture, and cultural heritage. From the Colosseum to the Vatican, Rome offers a journey through time, making it a must-visit destination for history enthusiasts and travelers alike."
},

    {
    id:6,
    imgSrc: img6,
    destTitle: 'Swiss Alps',
    location: 'Switzerland',
    grade: "Mountain Escape",
    fees: "₹28,000", // Example fee, update as needed
    description: "The Swiss Alps offer a breathtaking landscape of majestic mountains, picturesque villages, and pristine nature. It's a top destination for skiing, hiking, and experiencing the serene beauty of Switzerland's alpine regions, attracting adventurers and nature lovers alike."
},

    {
    id:7,
    imgSrc: img7,
    destTitle: 'Maui',
    location: "Hawaii, USA",
    grade: "Island Paradise",
    fees: "₹21,000", // Example fee, update as needed
    description: "Maui, one of Hawaii's most popular islands, is known for its stunning beaches, lush rainforests, and breathtaking volcanic landscapes. It's the perfect destination for beach lovers, adventurers, and those looking to experience the unique culture and natural beauty of Hawaii."
},

    {
    id:8,
    imgSrc: img8,
    destTitle: 'London',
    location: "England, UK",
    grade: "Cultural Hub",
    fees: "₹17,500", // Example fee, update as needed
    description: "London, the capital of England, is a vibrant city rich in history, culture, and modern attractions. From iconic landmarks like the Big Ben and Buckingham Palace to world-class museums and theaters, London offers an unforgettable experience for travelers seeking a blend of tradition and contemporary life."
},
    {
    id:9,
    imgSrc: img9,
    destTitle: 'Island Nation',
    location: "Maldives",
    grade: "Tropical Escape",
    fees: "₹12,000", // Example fee, update as needed
    description: "The Maldives, an island nation in the Indian Ocean, is famous for its crystal-clear waters, stunning coral reefs, and luxurious resorts. It's a top destination for those seeking a peaceful tropical escape, offering unparalleled beauty, underwater adventures, and ultimate relaxation."
},
    {
    id:10,
    imgSrc: img10,
    destTitle: 'Tokyo',
    location: "Japan",
    grade: "Urban Wonderland",
    fees: "₹18,500", // Example fee, update as needed
    description: "Tokyo, Japan's bustling capital, is a dynamic city where cutting-edge technology meets ancient traditions. From its towering skyscrapers and vibrant districts like Shibuya and Shinjuku to historic temples and tranquil gardens, Tokyo offers a unique blend of modernity and cultural heritage."
},
{
    id:11,
    imgSrc: img11,
    destTitle: 'Tajmahal',
    location: "Agra, India",
    grade: "Architectural Marvel",
    fees: "₹5,000", // Example fee, update as needed
    description: "The Taj Mahal, a UNESCO World Heritage site in Agra, India, is one of the most iconic landmarks in the world. This stunning white marble mausoleum, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is renowned for its breathtaking beauty and intricate craftsmanship, making it a must-visit destination for history and architecture enthusiasts."
},
{
    id:12,
    imgSrc: img12,
    destTitle: 'Minicoy Island',
    location: "Lakshadweep, India",
    grade: "Serene Getaway",
    fees: "₹8,500", // Example fee, update as needed
    description: "Minicoy Island, part of the Lakshadweep archipelago, is a secluded paradise known for its pristine beaches, turquoise waters, and vibrant coral reefs. With its tranquil atmosphere and beautiful natural surroundings, it's an ideal destination for those looking to escape the hustle and bustle and enjoy a peaceful tropical retreat."
},
        
        
]

const Main=()=>{

    useEffect(()=>{
        Aos.init({duration: 2000})

        },[])


    return(
    <section className="main container section">
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most Visited Destinations
            </h3>
        </div>

        <div className="secContent grid">

            {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,
                    description})=>{
                        return(
                            <div key={id}
                            data-aos="fade-up" className="singleDestination">
                                
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                      <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                        </div> 
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div> 
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck  className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                }
                )
            }

        </div>
    </section>
)   
    }

    export default Main