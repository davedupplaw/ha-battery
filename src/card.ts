import {html, LitElement, TemplateResult} from 'lit';
import {state} from "lit/decorators/state";
import styles from './card.style';
import {battery} from "./battery";
import {HomeAssistant} from './ha';
import {BatteryCardEditorConfig, defaultConfig} from './editor';

export interface CardEntity {
	sensor: string;
	name: string;
	state?: string;
}

export interface BatteryCardConfig {
	header?: string;
	socEntity: CardEntity;
	kWhEntity: CardEntity;
	dischargeWEntity: CardEntity;
	chargeWEntity: CardEntity;
	colour: string;
	sizePx: number;
	showSocInBattery: boolean;
	showSocLabel: boolean;
	showChargeIndicators: boolean;
}

export class BatteryCard extends LitElement {
	static styles = styles;
	@state() private _config: BatteryCardEditorConfig;
	@state() private _header: string | undefined;
	@state() private _socEntity: CardEntity | undefined;
	@state() private _kWhEntity: CardEntity | undefined;
	@state() private _dischargeWEntity: CardEntity | undefined;
	@state() private _chargeWEntity: CardEntity | undefined;
	@state() private _combinedWEntity: CardEntity | undefined;
	@state() private _colour: string | undefined;

	private _hass: HomeAssistant;

	public set hass(hass: HomeAssistant) {
		this._hass = hass;
		this.updateSensors();
	}

	// noinspection JSUnusedGlobalSymbols
	static getConfigElement(): HTMLElement {
		return document.createElement("battery-card-editor");
	}

	// noinspection JSUnusedGlobalSymbols
	static getStubConfig() : BatteryCardEditorConfig {
		return defaultConfig;
	}

	// noinspection JSUnusedGlobalSymbols
	public setConfig(config: BatteryCardEditorConfig): void {
		this._config = config;
		this._header = config.header === "" ? undefined : config.header;
		this._socEntity = this.toEntity(config.socEntity);
		this._kWhEntity = this.toEntity(config.kWhEntity);
		this._dischargeWEntity = this.toEntity(config.dischargeWEntity);
		this._chargeWEntity = this.toEntity(config.chargeWEntity);
		this._combinedWEntity = this.toEntity(config.combinedWEntity);

		if (this._hass) this.hass = this._hass
	}

	public render(): TemplateResult<1> {
		const content: TemplateResult<1> = !this._socEntity?.state
			? html` <p class="error">${this._socEntity?.name} is unavailable.</p> `
			: battery({
				socEntity: this._socEntity,
				kWhEntity: this._kWhEntity,
				colour: this._colour,
				dischargeWEntity: this._dischargeWEntity ?? this.fakeEntity(-+this._combinedWEntity.state),
				chargeWEntity: this._chargeWEntity ?? this.fakeEntity(this._combinedWEntity.state),
				sizePx: this._config.sizePx,
				showSocInBattery: this._config.showSocInBattery,
				showSocLabel: this._config.showSocLabel,
				showChargeIndicators: this._config.showChargeIndicators,
			});

		return html`
            <ha-card header="${this._header}">
                <div class="card-content">${content}</div>
            </ha-card>
		`;
	}

	private updateSensors() {
		this._socEntity = this.updateEntity(this._socEntity);
		this._kWhEntity = this.updateEntity(this._kWhEntity);
		this._dischargeWEntity = this.updateEntity(this._dischargeWEntity);
		this._chargeWEntity = this.updateEntity(this._chargeWEntity);
		this._combinedWEntity = this.updateEntity(this._combinedWEntity);
		const cols = this._config.colours
						 .split(',')
						 .map(x => {
							 let strings = x.split(":");
							 return {upto: +strings[0], colour: strings[1]};
						 });
		this._colour = (cols.find(col => col.upto >= +this._socEntity.state) || cols[cols.length - 1]).colour;
	}

	private toEntity(entityName: string): CardEntity | undefined {
		if (!entityName) return undefined;
		return {sensor: entityName, name: entityName};
	}

	private fakeEntity(state: any) {
		return {sensor: "", name: "", state};
	}

	private updateEntity(entity: CardEntity): CardEntity {
		if (entity) {
			const state = this._hass.states[entity.sensor];
			const fn = state?.attributes?.friendly_name;
			entity.name = fn ? fn : entity.sensor;
			entity.state = state?.state;
			return {...entity};
		}
		return undefined;
	}
}
