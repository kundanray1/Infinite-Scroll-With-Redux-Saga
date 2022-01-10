import styled, {css} from 'styled-components';
import {Colors} from './Global';

// const Container = styled.ImageBackground`
//   flex: 1;
//   align-items: center;
//   width: 100%;
// `;

const Card= styled.View`
align-items: center;
text-content:center;
justify-content:flex-end;
// 
elevation:0.5px;
border-radius:50px;

`
const Screen = styled.SafeAreaView`
  flex: 1;
  align-items: center;
justify-content:space-between;
 
`;
const PressableStyled = styled.Pressable`
border-radius:50px;
  background-color:#559454;
 padding:15px;
 width:80%;

  
`;


const TextSmall = styled.Text`
padding-vertical: 5px;
padding-horizontal:10px;
  width: 100%;
  font-size:25px;
  font-weight:500;
  text-align:center;
  color: ${Colors.black}

`;



const MakePadding = styled.View`
  /* padding: 12% 7% 10% 7%; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92%;
  width: 100%;
  background: ${Colors.background};

  ${({empty}) =>
    empty &&
    css`
      background: transparent;
    `} /* background: blue; */

  ${({pro}) =>
    pro &&
    css`
      justify-content: flex-start;
      padding: 25px;
    `} /* background: blue; */
`;

const Container = styled.ScrollView`
   display: flex;
  width: 100%;
  background:#f2f0f0;
`;

const OverLay = styled.KeyboardAvoidingView`
  margin: auto;
  background: rgba(0, 0, 0, 0.45);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  ${({white}) =>
    white &&
    css`
      justify-content: flex-start;
      padding: 10;
      margin: 5% auto auto auto;
      width: 90%;
      background: rgba(200, 200, 200, 0.45);
    `}
`;

const GroupWrapper = styled.View`
  width: 100%;
  display: flex;

  

`;

const Divider = styled.View`
  height: 20px;
`;

const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  width: 95%;
`;

const TitleText = styled.Text`
  color: ${Colors.white};
  margin: 0px 0px 0px 5px;
  font-size: 18px;
  ${({black}) =>
    black &&
    css`
      color: #000;
      font-size: 12px;
    `}

  ${({blue}) =>
    blue &&
    css`
      color: ${Colors.blue};
    `}
`;

const NepaliDateBox = styled.View`
  height: 55px;
  background: ${Colors.txtBackground};
justify-content:center;
  align-items: center; 
  width: 100%;
  padding: 0px 25px;
  border-radius: 8px;
 
`;

const NepaliDateText = styled.Text`
  color: #000;
  font-size: 15;
`;

const CenterItem = styled.View`
 
  align-items: center;
  top: 10%;
  height: 100%;
  width: 100%;
  flex-direction: column;
  position:absolute;
`;

const CancelButton = styled.TouchableOpacity`
  height: 60px;
  width: 110px;
  background: ${Colors.white};
  position: absolute;
  right: 0;
  bottom: 0;
  border-top-left-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export {
    Card,
TextSmall,
  CancelButton,
  Container,
  OverLay,
  MakePadding,
  GroupWrapper,
  Divider,
  IconWrapper,
  TitleText,
  PressableStyled,
  Screen,
  NepaliDateBox,
  NepaliDateText,
  CenterItem,
};
