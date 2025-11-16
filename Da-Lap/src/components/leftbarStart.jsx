import styled from "styled-components";
import Earth from "../assets/earth.svg";
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
    img{
        display: block;
        margin: 0 auto;
        margin-top: 200px;
    }
    h4{
        margin-left:12px;
    }

`;

const Send = styled.button`
    width: 190px;
    padding: 10px;
    background-color: #4192FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
     display: block;
        margin: 0 auto;
`;   

export default function LeftbarStart(){
    const navigate = useNavigate();

    const goToMain = () =>{
        navigate("/leftbarmain");
    }
    return(
       <Sidebar>
            <img src={Earth} alt="Earth" width="80px" height="80px"/>
            <h4>여행사가 생성되었습니다!</h4>
            <Send onClick={goToMain}>시작하기</Send>
       </Sidebar>
    );
}