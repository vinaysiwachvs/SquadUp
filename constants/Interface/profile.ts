export interface StatItem {
	label: string;
	value: string | number;
	icon?: string;
	color?: string;
}

export interface ProfileDetailCardProps {
	name: string;
	location: string;
	sportsCount: number;
	bio: string;
	stats: StatItem[];
}
