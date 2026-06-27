export interface Session {
	id: number;
	title: string;
	about: string;
	sport: string;
	sportEmoji: string;
	date: string;
	location: string;
	distance: string;
	price: string;
	status: "OPEN" | "FULL";
	joined: boolean;
	currentPlayers: number;
	maxPlayers: number;
	openSpots: number;
}
