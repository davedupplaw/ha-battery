import {html, LitElement, nothing} from 'lit';
import styles from './card.style';
import {battery} from "./battery";

export class BatteryCard extends LitElement {
    static styles = styles;

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

    static get properties() {
        return {
            _config: {state: true},
            _header: {state: true},
            _socEntity: {state: true},
            _kWhEntity: {state: true},
            _dischargeWEntity: {state: true},
            _chargeWEntity: {state: true},
            _colour: {state: true}
        };
    }

    _hass;

    // noinspection JSUnusedGlobalSymbols
    setConfig(config) {
        this._config = config;
        this._header = config.header === "" ? nothing : config.header;
        this._socEntity = config.socEntity === "" ? nothing : this.toEntity(config.socEntity);
        this._kWhEntity = config.kWhEntity === "" ? nothing : this.toEntity(config.kWhEntity);
        this._dischargeWEntity = config.dischargeWEntity === "" ? nothing : this.toEntity(config.dischargeWEntity);
        this._chargeWEntity = config.chargeWEntity === "" ? nothing : this.toEntity(config.chargeWEntity);
        console.log("Battery config updates:", config);

        if (this._hass) this.hass = this._hass
    }

    set hass(hass) {
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

    toEntity(entity) {
        return {sensor: entity, name: entity};
    }

    updateEntity(entity) {
        const state = this._hass.states[entity.sensor];
        const fn = state?.attributes?.friendly_name;
        entity.name = fn ? fn : entity.sensor;
        entity.state = state?.state;
        return {...entity};
    }


    render() {
        const content = !this._socEntity?.state
            ? html` <p class="error">${this._socEntity?.name} is unavailable.</p> `
            : battery({
                socEntity: this._socEntity,
                kWhEntity: this._kWhEntity,
                colour: this._colour,
                dischargeW: this._dischargeWEntity,
                chargeW: this._chargeWEntity,
                sizePx: this._config.sizePx
            });

        return html`
            <ha-card header="${this._header}">
                <div class="card-content">${content}</div>
            </ha-card>
        `;
    }
}
