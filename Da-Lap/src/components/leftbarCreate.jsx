import { useState } from "react";
import styled from "styled-components";
import Earth from "../assets/earth.svg";
import Gradationbar from "./gradationbar";
import DropdownWithFileSVG from "./dropdown";
import { useNavigate } from "react-router-dom";

const Sidebar = styled.div`
    width: 200px;
    height: 100vh;
    background-color: #ffffff;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 5px -3px rgba(0,0,0,0.3);
    position: relative; 
    z-index: 1000;
    margin-top: -10px;


    #b1,#b2,#b3,#b4,#b5{
        width: 34px;
        height: 34px;
        margin: 0 3px;
        border-radius: 5px;
        border: none;
        margin-bottom: 60px;
    

    }
    #b2{
        background-color: #4E41FF;
    }
    #b3{
        background-color: #FF41B9;
    }
    #b4{
        background-color: #FF4141;
    }
    #b5{
        background-color: #FFEA4A;
    }

    h4{
        margin: 12px;
    }

    .btnzip{

    }

    img{
    display: block;
  margin: 0 auto;
    }


`;

const Input = styled.input`
    width: 190px;
    height: 20px;
    padding: 8px;
    margin-bottom: 10px;
    border: 2px solid #4192FF;
    border-radius: 5px;
    outline: none;
`;

const Send = styled.button`
    width: 190px;
    padding: 10px;
    background-color: #4192FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;   


export default function Leftbar() {
    const [name, setName] = useState("");
    const [ivcode,setIvcode] = useState("");
    const navigate = useNavigate();


    const goTostart = () => {
        navigate("/leftbarstart");
    }

//     const handleSubmit = async () => {
//         try {
//             const res = await fetch("??", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name }),
//         });
//         const data = await res.json();
//         alert(data.message);
//         } catch (err) {
//       console.error(err);
//       alert("전송 실패");
//     }
//   };

  return (
    <Sidebar>
        <img src={Earth} alt="Earth" width="80px" height="80px"/>
        <h2>여행사를 생성해요!</h2>
        <div>
            <h4>여행사 이름</h4>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요."
            />
        </div>
            
        <div>
            <h4>대륙 선택/입력</h4>
            <DropdownWithFileSVG/>
        </div>

        <div>
            <h4>초대코드</h4>
            <Input
                type="text"
                value={ivcode}
                onChange={(e) => setIvcode(e.target.value)}
                placeholder="초대 코드를 입력하세요."
            />
        </div>
      <div className="btnzip">
        <h4>색상 설정</h4>
        <button id="b1" value='#4E41FF'></button>
        <button id="b2"></button>
        <button id="b3"></button>
        <button id="b4"></button>
        <button id="b5"></button>
        
        
      </div>
      <Gradationbar/>
      
      <Send onClick={goTostart}>생성하기</Send>
    </Sidebar>
  );
}
