import {html, svg, TemplateResult} from "lit";
import {BatteryCardConfig, CardEntity} from './card';

function toWStr(x: number): string {
	return x > 1000 ? `${(x / 1000).toFixed(2)} kW` : `${x.toFixed(0)} W`;
}

function easeInOutCubic(x: number): number {
	return x < 0.5
		? 4 * x * x * x
		: 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// Battery dimensions in SVG units:
// width:   44 -> 243 = 200
// height: 465 -> 775 = 310
export function battery(inputs: BatteryCardConfig): TemplateResult<1> {
	const socEntity: CardEntity = inputs.socEntity;
	const kWhEntity: CardEntity = inputs.kWhEntity;
	const colour: string = inputs.colour;

	const soc: number = +socEntity.state;
	const kWh: string | undefined = kWhEntity?.state;

	const minPos: number = 465;
	const maxPos: number = 775;
	const height: number = maxPos - minPos;
	const size: number = (+soc / 100) * height;
	const topPos: number = maxPos - size;

	const socStr: string = soc ? `${soc}%` : "";
	const kWhStr: string = kWh ? `(${(+kWh).toFixed(2)} kWh)` : "";

	const chargingKw: string | undefined = inputs.chargeWEntity?.state;
	const dischargingKw: string | undefined = inputs.dischargeWEntity?.state;

	const chargingStr: string = chargingKw ? toWStr(+chargingKw) : "";
	const dischargingStr: string = dischargingKw ? toWStr(+dischargingKw) : "";

	let chargingDeltaStr: TemplateResult<2> | "" = "";
	let dischargingDeltaStr: TemplateResult<2> | "" = "";

	if (chargingKw && dischargingKw) {
		chargingDeltaStr = +chargingKw > +dischargingKw ? svg`<polygon points="144,460 136,472 152,472" class="delta-up"/>` : ``;
		dischargingDeltaStr = +dischargingKw > +chargingKw ? svg`<polygon points="144,472 136,460 152,460" class="delta-down"/>` : ``;
	}

	const showSocInBattery = inputs.showSocInBattery;

	const chargingAniDuration = 1.2 - easeInOutCubic(Math.min(+chargingKw, 2000) / 2000);
	const dischargingAniDuration = 1.2 - easeInOutCubic(Math.min(+dischargingKw, 2000) / 2000);

	// console.log("Battery state:", soc, kWh, chargingKw, dischargingKw);

	return html`
        <div class="wrapper">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-100 0 450 400"
                    width="${inputs.sizePx}"
            >
                <defs id="defs4">
                    <linearGradient id="linearGradient4084">
                        <stop id="stop4086" offset="0"/>
                        <stop id="stop4088" stop-opacity="0" offset="1"/>
                    </linearGradient>
                    <linearGradient id="linearGradient3863">
                        <stop id="stop3865" offset="0"/>
                        <stop id="stop3867" stop-color="#333" offset=".0714"/>
                        <stop id="stop3869" stop-color="#808080" offset=".15816"/>
                        <stop id="stop3871" stop-color="#e6e6e6" offset=".25005"/>
                        <stop id="stop3873" stop-color="#333" offset=".35198"/>
                        <stop id="stop3875" stop-color="#333" offset=".46945"/>
                        <stop id="stop3877" stop-color="#999" offset=".56627"/>
                        <stop id="stop3879" stop-color="#999" offset=".62756"/>
                        <stop id="stop3881" stop-color="#999" offset=".71424"/>
                        <stop id="stop3883" stop-color="#1a1a1a" offset=".82665"/>
                        <stop id="stop3885" stop-color="#1a1a1a" offset=".89796"/>
                        <stop id="stop3887" stop-color="#808080" offset="1"/>
                    </linearGradient>
                    <linearGradient id="linearGradient3776">
                        <stop id="stop3778" offset="0"/>
                        <stop id="stop3800" stop-color="#1a1a1a" offset=".11222"/>
                        <stop id="stop3784" stop-color="#808080" offset=".15816"/>
                        <stop id="stop3786" stop-color="#e6e6e6" offset=".20923"/>
                        <stop id="stop3788" stop-color="#e6e6e6" offset=".26527"/>
                        <stop id="stop3790" stop-color="#333" offset=".37762"/>
                        <stop id="stop3802" stop-color="#1a1a1a" offset=".50509"/>
                        <stop id="stop3792" stop-color="#333" offset=".59185"/>
                        <stop id="stop3794" stop-color="#b3b3b3" offset=".69383"/>
                        <stop id="stop3796" stop-color="#b3b3b3" offset=".72962"/>
                        <stop id="stop3798" stop-color="#1a1a1a" offset=".82654"/>
                        <stop id="stop3780" offset="1"/>
                    </linearGradient>
                    <filter id="filter4272" height="1.6248" width="1.0664" y="-.31241" x="-.033187"
                            color-interpolation-filters="sRGB">
                        <feGaussianBlur id="feGaussianBlur4274" stdDeviation="3.8133258"/>
                    </filter>
                    <linearGradient
                            id="linearGradient4786"
                            y2="615.98"
                            xlink:href="#linearGradient3776"
                            gradientUnits="userSpaceOnUse"
                            x2="238.4"
                            gradientTransform="matrix(-.23228 0 0 -.040355 176.47 467.74)"
                            y1="616.99"
                            x1="40.406"
                    />
                    <linearGradient
                            id="linearGradient4788"
                            y2="615.98"
                            xlink:href="#linearGradient3776"
                            gradientUnits="userSpaceOnUse"
                            x2="238.4"
                            gradientTransform="translate(3.9467 -.081604)"
                            y1="616.99"
                            x1="40.406"
                    />
                    <linearGradient
                            id="linearGradient4790"
                            y2="615.98"
                            xlink:href="#linearGradient3863"
                            gradientUnits="userSpaceOnUse"
                            x2="238.4"
                            gradientTransform="matrix(-1 0 0 -.88215 283.95 1180.7)"
                            y1="616.99"
                            x1="40.406"
                    />
                    <linearGradient
                            id="linearGradient4796"
                            y2="490.22"
                            gradientUnits="userSpaceOnUse"
                            x2="47.857"
                            y1="490.22"
                            x1="61.429"
                    >
                        <stop id="stop4666" stop-color="#fff" offset="0"/>
                        <stop id="stop4668" stop-color="#fff" stop-opacity="0" offset="1"/>
                    </linearGradient>
                    <linearGradient
                            id="linearGradient4798"
                            y2="623.32"
                            xlink:href="#linearGradient3909"
                            gradientUnits="userSpaceOnUse"
                            x2="73.83"
                            gradientTransform="translate(3.9467 -.081604)"
                            y1="623.32"
                            x1="68.284"
                    />
                    <linearGradient
                            id="linearGradient4800"
                            y2="622.84"
                            xlink:href="#linearGradient4084"
                            gradientUnits="userSpaceOnUse"
                            x2="736.34"
                            gradientTransform="translate(-521.82 -3.5522)"
                            y1="622.84"
                            x1="722.21"
                    />
                </defs>
                <g class="out" style="opacity: ${+dischargingKw > 0 ? 1 : 0}">
                    <line x1="220" y1="300" x2="330" y2="300" stroke="#000" stroke-width="10" 
						  style="animation: stroke ${dischargingAniDuration}s linear infinite;"/>
                    <text x="230" y="330" font-size="20" class="label">Discharging</text>
                    <text x="230" y="280" font-size="20" class="value">${dischargingStr}</text>
                </g>
                <g class="in" style="opacity: ${+chargingKw > 0 ? 1 : 0}">
                    <line x1="-80" y1="300" x2="25" y2="300" stroke="#000" stroke-width="10" 
						  style="animation: stroke ${chargingAniDuration}s linear infinite;"/>
                    <text x="15" y="330" font-size="20" class="label">Charging</text>
                    <text x="15" y="280" font-size="20" class="value">${chargingStr}</text>
                </g>
                <g id="layer1" transform="translate(-25.193 -427.28)">
                    <g id="g4684" transform="translate(4.0203 -4)">
                        <path
                                id="path4250"
                                opacity=".62996"
                                d="m281.83 528.12c0 8.0894-61.734 14.647-137.89 14.647-76.152 0-137.89-6.5578-137.89-14.647 0-8.0894 61.734-14.647 137.89-14.647 76.152 0 137.89 6.5578 137.89 14.647z"
                                transform="matrix(.80764 0 0 1 27.69 275.36)"
                                filter="url(#filter4272)"
                                fill="#4d4d4d"
                        />
                        <g id="g4672">
                            <path
                                    id="path3946"
                                    d="m167.18 449.48s-15.476 0.20177-23.228 0.20177c-7.7525 0-23.228-0.20177-23.228-0.20177v-14.124s15.476-0.20178 23.228-0.20178c7.7525 0 23.228 0.20178 23.228 0.20178z"
                                    fill="url(#linearGradient4786)"
                            />
                            <path
                                    id="rect2985"
                                    d="m43.947 452.28s66.625-5 100-5 100 5 100 5v350s-66.625 5-100 5-100-5-100-5z"
                                    fill="url(#linearGradient4788)"
                            />

                            <path
                                    id="path3804"
                                    d="m43.947 461.13s66.625-4.7615 100-4.7615 100 4.7615 100 4.7615v333.3s-66.625 4.7615-100 4.7615-100-4.7615-100-4.7615z"
                            />

                            <path
                                    id="path3814"
                                    d="m243.95 781.66s-66.625 4.4108-100 4.4108-100-4.4108-100-4.4108v-308.75s66.625-4.4108 100-4.4108 100 4.4108 100 4.4108z"
                                    fill="url(#linearGradient4790)"
                            />

                            <!-- Filling -->
                            <path
                                    id="path3897"
                                    d="m243.86 782s-66.625 3.9337-100 3.9337-100-3.9337-100-3.9337v-${size + 7}s66.625-3.9337 100-3.9337 100 3.9337 100 3.9337z"
                                    fill="${colour}"
                            />
                            <!-- Top -->
                            <path
                                    id="path3950"
                                    d="m43.947 ${topPos}s66.625-0.10357 100-0.10357 100 0.10357 100 0.10357v7.2496s-66.625 0.10357-100 0.10357-100-0.10357-100-0.10357z"
                                    fill="${colour}"
                            />
                            <path
                                    id="path3889"
                                    opacity=".6"
                                    d="m63.129 775.6s-4.7077 4.4108-7.066 4.4108-7.066-4.4108-7.066-4.4108v-308.75s4.7077-4.4108 7.066-4.4108 7.066 4.4108 7.066 4.4108z"
                                    fill="url(#linearGradient4796)"
                            />
                            <path
                                    id="path3893"
                                    d="m77.777 777.62s-1.8474 4.4108-2.7728 4.4108c-0.92543 0-2.7728-4.4108-2.7728-4.4108v-308.75s1.8474-4.4108 2.7728-4.4108c0.92543 0 2.7728 4.4108 2.7728 4.4108z"
                                    fill="url(#linearGradient4798)"
                            />
                            <path
                                    id="path3939"
                                    opacity=".25306"
                                    d="m143.95 503.85c-33.375 0-99.643-1.1101-99.643-1.1101l-0.36 280.14c90.563-50.63 181.33-195.87 159.34-279.52-19.587-1.0415-44.114 0.49022-59.344 0.49022z"
                                    fill="#e5ffd5"
                            />
                            <path
                                    id="path4642"
                                    opacity=".6"
                                    d="m214.52 773.67s-4.7077 4.4108-7.066 4.4108-7.066-4.4108-7.066-4.4108v-308.75s4.7077-4.4108 7.066-4.4108 7.066 4.4108 7.066 4.4108z"
                                    fill="url(#linearGradient4800)"
                            />
                            <text x="144" y="${topPos}" class="inBattSoc" dy="0.8em" opacity="${showSocInBattery ? 1: 0}">${socStr}</text>
                            ${chargingDeltaStr}
                            ${dischargingDeltaStr}
                        </g>
                    </g>
                </g>
            </svg>
            <div class="charge">Charge: ${socStr} <span>${kWhStr}</span></div>
        </div>
	`;
}
