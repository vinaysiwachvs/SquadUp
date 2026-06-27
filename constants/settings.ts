const settingsDefaults = {
	profile: {
		name: "Vinay Siwach",
		email: "vinay@email.com",
		bio: "Love sports, travel and meeting new people.",
	},
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
};

export default settingsDefaults;
