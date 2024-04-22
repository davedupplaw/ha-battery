
export interface HomeAssistant {
	states: {[key: string]: HassEntity};
}

export interface HassEntity {
	state: any;
	attributes: {
		friendly_name: string;
	}
}
