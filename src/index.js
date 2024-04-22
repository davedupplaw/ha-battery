import { BatteryCard } from "./card";
import { BatteryCardEditor } from "./editor";

customElements.define(
    "battery-card",
    BatteryCard
);
customElements.define(
    "battery-card-editor",
    BatteryCardEditor
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "battery-card",
    name: "Battery Card",
    description: "Display a battery SOC",
});
