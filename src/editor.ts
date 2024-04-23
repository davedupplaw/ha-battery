import {css, html, LitElement, TemplateResult} from 'lit';
import { state } from 'lit/decorators/state';
import {BatteryCardEditorConfig} from './card';
import {HomeAssistant} from './ha';

export class BatteryCardEditor extends LitElement {
    @state() private _hass: HomeAssistant;
    @state() private _config: BatteryCardEditorConfig;

    // noinspection CssUnusedSymbol
    static styles = css`
        .table {
            display: table;
        }

        .row {
            display: table-row;
        }

        .cell {
            display: table-cell;
            padding: 0.5em;
        }
    `;

    // noinspection JSUnusedGlobalSymbols
    public setConfig(config: BatteryCardEditorConfig): void {
        this._config = config;
    }

    // noinspection JSUnusedGlobalSymbols
    public set hass(hass: HomeAssistant) {
        this._hass = hass;
    }

    public render(): TemplateResult<1> {
        const values = {
            "Header": this._config.header,
            "Preferred Height (px)": this._config.sizePx,
            "Battery SOC (%) Sensor": this._config.socEntity,
            "Battery SOC (kWh) Sensor": this._config.kWhEntity,
            "Battery Charge Rate (W) Sensor": this._config.chargeWEntity,
            "Battery Discharge Rate (W) Sensor": this._config.dischargeWEntity
        };

        return html`
            <ha-form
                    .hass=${this._hass}
                    .data=${values}
                    .schema=${[
                        {name: "Header", selector: { text: {} } },
                        {name: "Preferred Height (px)", selector: { number: {} }},
                        {name: "Battery SOC (%) Sensor", selector: {entity: {}}},
                        {name: "Battery SOC (kWh) Sensor", selector: {entity: {}}},
                        {name: "Battery Charge Rate (W) Sensor", selector: {entity: {}}},
                        {name: "Battery Discharge Rate (W) Sensor", selector: {entity: {}}},
                        // {name: "battery_sensor", selector: {entity: {device_class: "battery"}}},
                        // {
                        //     name: "show_bars", selector: {
                        //         select: {
                        //             multiple: true, mode: "list", options: [
                        //                 {label: "Label 1", value: "bar1"},
                        //                 {label: "Label 2", value: "bar2"},
                        //                 {label: "Another Label", value: "bar3"},
                        //                 {label: "What now?", value: "bar4"},
                        //             ]
                        //         }
                        //     }
                        // }
                    ]}
                    @value-changed=${this.handleChangedEvent}
            ></ha-form>
        `;
    }

    public handleChangedEvent(changedEvent: Event): void {
        const details = (changedEvent as any).detail;
        const target: HTMLFormElement = changedEvent.target as HTMLFormElement;
        const newConfig: BatteryCardEditorConfig = Object.assign({}, this._config);

        const values = details.value;
        newConfig.header = target.value;
        newConfig.socEntity = values["Battery SOC (%) Sensor"];
        newConfig.kWhEntity = values["Battery SOC (kWh) Sensor"];
        newConfig.chargeWEntity = values["Battery Charge Rate (W) Sensor"];
        newConfig.dischargeWEntity = values["Battery Discharge Rate (W) Sensor"];
        newConfig.sizePx = values["Preferred Height (px)"];

        const messageEvent = new CustomEvent("config-changed", {
            detail: {config: newConfig},
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(messageEvent);
    }
}
