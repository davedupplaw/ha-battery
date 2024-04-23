// noinspection CssUnusedSymbol

import { css } from 'lit';

export default css`
    .error {
        color: red;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    svg {
        flex: 0;

        g.in {
            line {
                stroke-dasharray: 10px;
                stroke: cadetblue;
                stroke-dashoffset: 20px;
            }

            text {
                fill: cadetblue;
                text-anchor: end;
            }
        }

        g.out {
            line {
                stroke-dasharray: 10px;
                stroke: cadetblue;
                stroke-dashoffset: 20px;
            }

            text {
                fill: cadetblue;
            }
        }

        polygon.delta-up, polygon.delta-down {
            fill: white;
            animation: flash 1s linear infinite;
        }

        text.inBattSoc {
            text-anchor: middle;
            fill: white;
            font-size: 200%;
			font-weight: bold;
			stroke: black;
			stroke-width: 0.5px;
            filter: drop-shadow(2px 2px 1px rgb(0 0 0 / 1));
        }
    }

    @keyframes stroke {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .charge {
        font-size: 16px;
    }

    .charge span {
        font-size: 12px;
        color: #888;
    }
`;
