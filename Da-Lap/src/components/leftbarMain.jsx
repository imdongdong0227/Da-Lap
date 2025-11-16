import { useState, useEffect } from "react";
import styled from "styled-components";
import Earth from "../assets/earth.svg";
import Gradationbar from "./gradationbar";
import { useNavigate } from "react-router-dom";

// Styled Components
const Sidebar = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #ffffff;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 5px -3px rgba(0,0,0,0.3);
    position: relative; 
    z-index: 1000;

    h4 { margin: 12px 0 4px; }
    img { display: block; margin: 0 auto 10px; }
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 2px solid #4192FF;
    border-radius: 5px;
    outline: none;
`;

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: 2px solid #4192FF;
    border-radius: 5px;
    padding: 6px;

    h5 { color: #4192FF; margin: 0 0 0 6px; }
`;

const Send = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4192FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
`;

const ItemButton = styled.button`
  padding: 4px 8px;
  background-color: #4192FF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 랜덤 초대코드 생성 함수
const generateInviteCode = (length = 6, existingCodes = []) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code;
    do {
        code = '';
        for (let i = 0; i < length; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    } while (existingCodes.includes(code));
    return code;
};

export default function Leftbar() {
    const [agencies, setAgencies] = useState([]);
    const [members, setMembers] = useState([]);
    const [couponCount, setCouponCount] = useState(5);
    const [ivcode, setIvcode] = useState("");
    const [usedCodes, setUsedCodes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 여행사 목록 불러오기
        fetch("/travel_agency.json")
            .then(res => res.json())
            .then(json => setAgencies(json))
            .catch(err => console.error(err));

        // 멤버 목록 불러오기
        fetch("/members.json")
            .then(res => res.json())
            .then(json => setMembers(json.map(m => m.name)))
            .catch(err => console.error(err));

        // 초기 랜덤 초대코드 생성
        const code = generateInviteCode(6, usedCodes);
        setIvcode(code);
        setUsedCodes(prev => [...prev, code]);
    }, []);

    // 초대코드 새로 생성
    const regenerateCode = () => {
        const newCode = generateInviteCode(6, usedCodes);
        setIvcode(newCode);
        setUsedCodes(prev => [...prev, newCode]);
    };

    const goTostart = () => navigate("/leftbarstart");

    return (
        <Sidebar>
            <img src={Earth} alt="Earth" width="80px" height="80px"/>
            <h2>나의 여행사</h2>

            <Section>
                {agencies.map(item => (
                    <h5 key={item.id}>{item.travel_agency}</h5>
                ))}
            </Section>

            <div>
                <h4>초대코드</h4>
                <Input
                    type="text"
                    value={ivcode}
                    readOnly
                />
                <ItemButton onClick={regenerateCode}>새 코드 생성</ItemButton>
            </div>

            <div>
                <h4>쿠폰 전송 기준</h4>
                <ItemWrapper>
                    <ItemButton onClick={() => setCouponCount(couponCount - 1)}>-</ItemButton>
                    <span>{couponCount}</span>
                    <ItemButton onClick={() => setCouponCount(couponCount + 1)}>+</ItemButton>
                </ItemWrapper>
            </div>

            <div>
                <h4>도장 보내기</h4>
                <Section>
                    {members.map((m, idx) => (
                        <ItemWrapper key={idx}>
                            <span>{m}</span>
                            <ItemButton>도장 전송 ▶</ItemButton>
                        </ItemWrapper>
                    ))}
                </Section>
            </div>

            <div>
                <h4>색상 설정</h4>
                <Gradationbar/>
            </div>

            <Send onClick={goTostart}>생성하기</Send>
        </Sidebar>
    );
}
