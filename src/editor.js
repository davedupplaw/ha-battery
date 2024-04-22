import {css, html, LitElement} from 'lit';

export class BatteryCardEditor extends LitElement {
    static get properties() {
        return {
            _hass: {},
            _config: {state: true},
        };
    }

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

    setConfig(config) {
        this._config = config;
    }

    set hass(hass) {
        this._hass = hass;
    }

    render() {
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

    handleChangedEvent(changedEvent) {
        // this._config is readonly, copy needed
        const newConfig = Object.assign({}, this._config);

        const values = changedEvent.detail.value;

        newConfig.header = changedEvent.target.value;
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
