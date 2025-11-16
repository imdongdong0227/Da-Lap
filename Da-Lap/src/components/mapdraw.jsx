import Map from "../assets/map.svg";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-left: 300px; 
  z-index: 1;

  /* background 속성으로 이미지 넣기 */
  background-image: url(${Map});
  background-size: cover; /* 전체 영역에 맞춤 */
  background-position: center; /* 중앙 정렬 */
  background-repeat: no-repeat; /* 반복하지 않음 */
`;

export default function Mapdraw() {
  return <MapContainer />;
}
