import React, { useContext } from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/home.svg';
import CheckIcon from '../assets/check_box.svg';
import TodayIcon from '../assets/calendar_today.svg';
import AccountIcon from '../assets/account_circle.svg';
import MessageIcon from '../assets/mark_as_unread.svg';
import { UserContext } from '../context/UserContext';


const TabArea = styled.View`
  height: 60px;
  background-color: #326744;
  flex-direction: row;

`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PageName = styled.Text`
  font-size: 10px;
  color: #FFF;
`;



const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default ({ state, navigation }) => {

  const { state: user } = useContext(UserContext);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }




  return (
    <TabArea>

      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon width="24" height="24" fill={state.index === 0 ? "#51DE9F" : "#FFFFFF"} />
        <PageName>Home</PageName>
      </TabItem>

      <TabItem onPress={() => goTo('Checklist')}>
        <CheckIcon width="24" height="24" fill={state.index === 1 ? "#51DE9F" : "#FFFFFF"} />
        <PageName>Checklist</PageName>
      </TabItem>

      <TabItem onPress={() => goTo('Calendar')}>
        <TodayIcon width="24" height="24" fill={state.index === 2 ? "#51DE9F" : "#FFFFFF"} />
        <PageName>Agenda</PageName>
      </TabItem>

      <TabItem onPress={() => goTo('Message')}>
        <MessageIcon width="24" height="24" fill={state.index === 3 ? "#51DE9F" : "#FFFFFF"} />
        <PageName>Mensagem</PageName>
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar != '' ?
          <AvatarIcon style={{ opacity: state.index === 4 ? 1 : 0.5 }} source={{ uri: 'data:image/png;base64,' + user.avatar }} /> :
          <AccountIcon width="24" height="24" fill={state.index === 4 ? "#51DE9F" : "#FFFFFF"} />
        }
        <PageName>Perfil</PageName>
      </TabItem>

      {/* <TabItem onPress={() => goTo('Question')}>
      </TabItem> */}

    </TabArea>
  );
}