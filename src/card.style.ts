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
                animation: stroke 0.5s linear infinite;
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
                animation: stroke 0.5s linear infinite;
            }
            text {
                fill: cadetblue;
            }
        }
        
        polygon.delta-up, polygon.delta-down {
            fill: white;
            animation: flash 1s linear infinite;
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
