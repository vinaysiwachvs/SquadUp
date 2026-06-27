import theme from "./theme";

const user = {
	profile: {
		name: "Vinay Siwach",
		email: "vinay.siwach@example.com",
		bio: "Pickup league captain, weekend competitor, and sports enthusiast who loves soccer, basketball, tennis, and running.",
		location: "Najafgarh, New Delhi",
		sportsCount: 3,
	},
	stats: [
		{
			label: "Teams",
			value: 12,
			icon: "Users",
			color: theme.colors.primary,
		},
		{
			label: "Games",
			value: 84,
			icon: "Trophy",
			color: theme.colors.accent,
		},
		{
			label: "Years",
			value: 5,
			icon: "CalendarDays",
			color: theme.colors.status.green,
		},
	],
	sports: [
		{
			id: "1",
			emoji: "🏀",
			name: "Basketball",
			level: "Intermediate",
		},
		{
			id: "2",
			emoji: "⚽",
			name: "Soccer",
			level: "Advanced",
		},
		{
			id: "3",
			emoji: "🎾",
			name: "Tennis",
			level: "Beginner",
		},
	],
	teams: [
		{
			id: 1,
			name: "The Aces",
			about: "A competitive tennis team that loves to challenge themselves and improve their skills on the court.",
			emoji: "🎾",
			sport: "Tennis",
			type: "Competitive",
			playerCount: 8,
		},
		{
			id: 2,
			name: "Hoop Dreams",
			about: "A recreational basketball team that enjoys playing for fun and staying active while bonding with teammates.",
			emoji: "🏀",
			sport: "Basketball",
			type: "Recreational",
			playerCount: 10,
		},
	],
	settings: {
		searchRadius: {
			min: 1,
			max: 25,
			defaultValue: 8,
		},
		notifications: {
			push: true,
			email: false,
		},
		privacy: {
			publicProfile: true,
			hideDistance: false,
		},
	},
};

export default user;
