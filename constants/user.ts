import theme from "./theme";

const user = {
	profile: {
		name: "Vinay Siwach",
		email: "vinay.siwach@example.com",
		bio: "Pickup league captain, weekend competitor, and sports enthusiast who loves soccer, basketball, tennis, and running.",
		location: "Najafgarh, New Delhi",
		sportsCount: 4,
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
