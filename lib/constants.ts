export type EventItem = {
	title: string;
	image: string;
	slug: string;
	location: string;
	date: string;
	time: string;
};

export const events: EventItem[] = [
	{
		title: "React Summit 2025",
		image: "/images/event1.png",
		slug: "react-summit-2025",
		location: "Amsterdam, Netherlands",
		date: "April 15-17, 2025",
		time: "9:00 AM - 6:00 PM",
	},
	{
		title: "Next.js Conf 2025",
		image: "/images/event2.png",
		slug: "nextjs-conf-2025",
		location: "San Francisco, CA",
		date: "May 20-21, 2025",
		time: "10:00 AM - 5:00 PM",
	},
	{
		title: "DevHack Global 2025",
		image: "/images/event3.png",
		slug: "devhack-global-2025",
		location: "Online & Worldwide",
		date: "March 8-10, 2025",
		time: "24/7 Hackathon",
	},
	{
		title: "TypeScript Conference",
		image: "/images/event4.png",
		slug: "typescript-conference-2025",
		location: "Berlin, Germany",
		date: "June 12-13, 2025",
		time: "9:30 AM - 6:00 PM",
	},
	{
		title: "AI & ML Developers Meetup",
		image: "/images/event5.png",
		slug: "ai-ml-developers-meetup",
		location: "London, UK",
		date: "February 28, 2025",
		time: "6:00 PM - 9:00 PM",
	},
	{
		title: "Web3 Builders Hackathon",
		image: "/images/event6.png",
		slug: "web3-builders-hackathon",
		location: "Singapore",
		date: "April 5-7, 2025",
		time: "48-Hour Hackathon",
	},
];
