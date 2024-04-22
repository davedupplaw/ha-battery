import {html, LitElement} from 'lit';
import {state} from "lit/decorators/state";
import styles from './card.style';
import {battery} from "./battery";
import {HomeAssistant} from './ha';

export interface CardEntity {
	sensor: string;
	name: string;
	state?: string;
}

export interface BatteryCardEditorConfig {
	header: string;
	socEntity: string;
	kWhEntity: string;
	dischargeWEntity: string;
	chargeWEntity: string;
	colours: string;
	sizePx: number;
}

export interface BatteryCardConfig {
	header?: string;
	socEntity: CardEntity;
	kWhEntity: CardEntity;
	dischargeWEntity: CardEntity;
	chargeWEntity: CardEntity;
	colour: string;
	sizePx: number;
}

export class BatteryCard extends LitElement {
	static styles = styles;
	@state() private _config;
	@state() private _header: string | undefined;
	@state() private _socEntity: CardEntity | undefined;
	@state() private _kWhEntity: CardEntity | undefined;
	@state() private _dischargeWEntity: CardEntity | undefined;
	@state() private _chargeWEntity: CardEntity | undefined;
	@state() private _colour: string | undefined;

	_hass: HomeAssistant;

	public set hass(hass: HomeAssistant) {
		this._hass = hass;
		this._socEntity = this.updateEntity(this._socEntity);
		this._kWhEntity = this.updateEntity(this._kWhEntity);
		this._dischargeWEntity = this.updateEntity(this._dischargeWEntity);
		this._chargeWEntity = this.updateEntity(this._chargeWEntity);
		const cols = this._config.colours
						 .split(',')
						 .map(x => {
							 let strings = x.split(":");
							 return {upto: +strings[0], colour: strings[1]};
						 });
		this._colour = (cols.find(col => col.upto >= +this._socEntity.state) || cols[cols.length - 1]).colour;
	}

	static getConfigElement() {
		return document.createElement("battery-card-editor");
	}

	static getStubConfig() {
		return {
			socEntity: "",
			kWhEntity: "",
			dischargeWEntity: "",
			chargeWEntity: "",
			header: "Battery",
			colours: "25:#aa0000,50:#ffaa00,100:#00ff00",
			sizePx: 200
			//     [
			//     {upto: 100, colour: '#00ff00'},
			//     {upto: 50, colour: '#ffaa00'},
			//     {upto: 25, colour: '#aa0000'}
			// ]
		};
	}

	// noinspection JSUnusedGlobalSymbols
	public setConfig(config: BatteryCardEditorConfig) {
		this._config = config;
		this._header = config.header === "" ? undefined : config.header;
		this._socEntity = config.socEntity === "" ? undefined : this.toEntity(config.socEntity);
		this._kWhEntity = config.kWhEntity === "" ? undefined : this.toEntity(config.kWhEntity);
		this._dischargeWEntity = config.dischargeWEntity === "" ? undefined : this.toEntity(config.dischargeWEntity);
		this._chargeWEntity = config.chargeWEntity === "" ? undefined : this.toEntity(config.chargeWEntity);
		console.log("Battery config updates:", config);

		if (this._hass) this.hass = this._hass
	}

	render() {
		const content = !this._socEntity?.state
			? html` <p class="error">${this._socEntity?.name} is unavailable.</p> `
			: battery({
				socEntity: this._socEntity,
				kWhEntity: this._kWhEntity,
				colour: this._colour,
				dischargeWEntity: this._dischargeWEntity,
				chargeWEntity: this._chargeWEntity,
				sizePx: this._config.sizePx
			});

		return html`
            <ha-card header="${this._header}">
                <div class="card-content">${content}</div>
            </ha-card>
		`;
	}

	private toEntity(entityName: string): CardEntity {
		return {sensor: entityName, name: entityName};
	}

	private updateEntity(entity: CardEntity): CardEntity {
		const state = this._hass.states[entity.sensor];
		const fn = state?.attributes?.friendly_name;
		entity.name = fn ? fn : entity.sensor;
		entity.state = state?.state;
		return {...entity};
	}
}
