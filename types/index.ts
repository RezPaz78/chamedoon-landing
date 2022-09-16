// types based on api
export interface ISlider {
	id: number;
	image: string;
	link: string | null;
	type: "Song" | "Ad" | "Video";
}

export interface IVideo {
	id: number;
	image: string;
	link: string | null;
	is_ad: boolean;
}

export interface IPlaylist {
	id: number;
	image_link: string;
	songs: string[] | [];
	is_ad: boolean;
}

export interface IPodcast {
	id: number;
	image: string;
	link: string | null;
	is_ad: boolean;
	name: string;
	channel: string;
}

export interface IBook {
	id: number;
	name: string;
	author: string;
	Publishers: string;
	image: string;
	link: string;
	is_ad: boolean;
}

export interface ISFVideo {
	id: number;
	image: string;
	link: string;
}
export interface ISFVoice {
	id: number;
	image: string;
	link: string;
	name: string;
}

export interface ISFEvent {
	id: number;
	name: string;
	date: string;
	location: string;
}
