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
	is_ad: string;
}
export type IVideoGenres = "iranian" | "foreign" | "animation";

export interface IPlaylist {
	id: number;
	image_link: string;
	songs: string[] | [];
	is_ad: string;
}

export interface IPodcast {
	id: number;
	image: string;
	link: string | null;
	is_ad: string;
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
	is_ad: string;
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

// base response
export interface IBaseResponse<T> {
	message: string;
	data: T[];
}

export type ISliderResponse = IBaseResponse<ISlider>;

export type IVideoResponse = {
	message: string;
	data: { [key in IVideoGenres]: IVideo[] };
};

export type ISFVideoResponse = IBaseResponse<ISFVideo>;

export type ISFVoiceResponse = IBaseResponse<ISFVoice>;

export type IPlayListResponse = IBaseResponse<IPlaylist>;
