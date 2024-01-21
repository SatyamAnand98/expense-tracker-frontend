import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize.js";

export function Orb() {
    const { width, height } = useWindowSize();

    const bounceOrb = keyframes`
    0% {
      transform: translateY(0) translateX(0);
    }
    20% {
      transform: translateY(${getRandomX(height)}px) translateX(${getRandomX(
        width
    )}px);
    }
    40% {
      transform: translateY(${getRandomX(height)}px) translateX(${getRandomX(
        width
    )}px);
    }
    60% {
      transform: translateY(${getRandomX(height)}px) translateX(${getRandomX(
        width
    )}px);
    }
    80% {
      transform: translateY(${getRandomX(height)}px) translateX(${getRandomX(
        width
    )}px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  `;

    function getRandomX(max) {
        return Math.floor(Math.random() * max);
    }

    const OrbStyled = styled.div`
        border-radius: 50%;
        border: 2px solid #000;
        position: absolute;
        height: 70vh;
        width: 70vh;
        margin-left: -35vh;
        margin-top: -35vh;
        background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
        filter: blur(400px);
        animation: ${bounceOrb} 15s ease-in-out infinite;
    `;
    return <OrbStyled></OrbStyled>;
}
