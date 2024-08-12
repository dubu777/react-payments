import { path } from "@/constants/path";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Check from '../assets/image/check.png';

export default function Completed() {
  return (
    <CompletedContainer>
      <CheckImage src={Check} alt="check" />
      <TextWrapper>
        <Text>1231 2312 **** ****</Text>
        <Text>국민카드가 등록되었어요.</Text>
      </TextWrapper>
      <Link to={path.ENROLL_CARD}>
        <Button>확인</Button>
      </Link>
    </CompletedContainer>
  )
}


const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

const CheckImage = styled.img`
  width: 75px;
`;

const Button = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background-color: #333333;
  color: white;
  font-size: 16px;
`;
