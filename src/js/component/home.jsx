import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Welcome from "./welcome.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {

	const cardData = [
		{
			imagen: "https://picsum.photos/id/237/500/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tenetur corporis consequuntur doloremque aliquid facilis sequi nihil sed, rerum architecto!",
			buttonURL: "https://example.com",
			buttonlabel: "Call to Action!"
		},
		{
			imagen: "https://picsum.photos/id/238/500/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tenetur corporis consequuntur doloremque aliquid facilis sequi nihil sed, rerum architecto!",
			buttonURL: "https://example.com",
			buttonlabel: "Call to Action!"
		},
		{
			imagen: "https://picsum.photos/id/239/500/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tenetur corporis consequuntur doloremque aliquid facilis sequi nihil sed, rerum architecto!",
			buttonURL: "https://example.com",
			buttonlabel: "Call to Action!"
		},
		{
			imagen: "https://picsum.photos/id/240/500/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tenetur corporis consequuntur doloremque aliquid facilis sequi nihil sed, rerum architecto!",
			buttonURL: "https://example.com",
			buttonlabel: "Call to Action!"
		},
	];

	const footerData = [
		{
			githubURL: "https://github.com/Jumpvzl",
			name: "Juan Pablo Castillo",
			geeksName: "4geeksacademy",
			geeksURL: "https://www.4geeksacademy.com",
			imagenURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NzJUc0PYtkgp7lfNKizmgQHaHB%26pid%3DApi&f=1&ipt=271cb3eb7e5f15522c250313a63e781bdb17fd428148a3cfa3fc136c7c118f42&ipo=images",
		},
	];

	return (
		<div>
			<Navbar startboostrap = "Start Boostrap" items = { ["Home", "About", "Service", "Contact"] } />
			<Welcome title = "A Warm Welcome" parraf = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore deleniti corrupti ipsam quod necessitatibus, ipsa iure repudiandae quos aut? Libero esse quod nihil nam deleniti, doloribus magni minus expedita quidem ullam, repellat dicta quas odit rerum, praesentium quisquam vel! Quaerat, similique officiis. Quasi aperiam sed itaque, provident excepturi in culpa!" button = "Call to Action!"/>
			<Cards properties={cardData}/>
			<Footer properties={footerData}/>
		</div>
			);
};

export default Home;
