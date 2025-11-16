// Slider.jsx
import React, { useState, useRef } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 400px;
  padding: 20px;
`;

const SvgSlider = styled.svg`
  width: 100%;
  height: 50px;
  overflow: visible;
`;

const Track = styled.rect`
  fill: #ddd;
  rx: 5;
`;

const Fill = styled.rect`
  rx: 5;
`;

const Handle = styled.circle`
  cursor: pointer;
`;

const ColorInput = styled.input`
  margin-top: 10px;
`;
export default function Gradationbar(){
const Slider = () => {
  const [value, setValue] = useState(100); // 초기 핸들 위치
  const [color, setColor] = useState("#ffa500");
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  const onDrag = (e) => {
    if (!isDragging) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    if (x < 10) x = 10;
    if (x > 390) x = 390;
    setValue(x);
  };

  return (
    <SliderContainer>
      <SvgSlider
        ref={sliderRef}
        viewBox="0 0 400 50"
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <Track x="10" y="20" width="380" height="10" />
        <Fill x="10" y="20" width={value - 10} height="10" fill={color} />
        <Handle
            cx={value}
            cy="25"
            r="12"
            fill={color}
            onMouseDown={startDrag}
            />
        </SvgSlider>
                <ColorInput
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </SliderContainer>
        );
    };

}

