import { useState } from "react";
import styled from "styled-components";
import Arrowd from "../assets/Arrow.svg";

const Container = styled.div`
  width: 210px;
  heigth: 20px;
  position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #4192FF;
  border-radius: 5px;
  padding: 0 8px;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 0;
`;

const Arrow = styled.img`
  width: 16px;
  height: 16px;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s;
`;
const Dropdown = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export default function DropdownWithFileSVG() {
  const continents = ["아시아", "유럽", "북아메리카", "남아메리카", "아프리카", "오세아니아"];
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (v) => {
    setValue(v);
    setOpen(false);
  };

  return (
    <Container>
      <InputWrapper onClick={() => setOpen(!open)}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="대륙 선택"
        />
        <Arrow src={Arrowd} open={open} />
      </InputWrapper>

      {open && (
        <Dropdown>
          {continents
            .filter((c) => c.includes(value))
            .map((c) => (
              <DropdownItem key={c} onClick={() => handleSelect(c)}>
                {c}
              </DropdownItem>
            ))}
        </Dropdown>
      )}
    </Container>
  );
}
