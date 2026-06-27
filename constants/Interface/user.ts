export interface UserProfile {
	name: string;
	email: string;
	bio: string;
	location: string;
	sportsCount: number;
}

export interface UserStat {
	label: string;
	value: number;
	icon: string;
	color: string;
}

export interface UserSport {
	id: string;
	name: string;
	emoji: string;
	level: string;
}

export interface UserTeam {
	id: number;
	name: string;
	about: string;
	emoji: string;
	sport: string;
	type: string;
	playerCount: number;
}

export interface SearchRadius {
	min: number;
	max: number;
	defaultValue: number;
}

export interface NotificationSettings {
	push: boolean;
	email: boolean;
}

export interface PrivacySettings {
	publicProfile: boolean;
	hideDistance: boolean;
}

export interface UserSettings {
	searchRadius: SearchRadius;
	notifications: NotificationSettings;
	privacy: PrivacySettings;
}

export interface User {
	profile: UserProfile;
	stats: UserStat[];
	sports: UserSport[];
	teams: UserTeam[];
	settings: UserSettings;
}
