import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {main} from '../stylesheet/styles';
import {useRoute} from '@react-navigation/native';
import newRelic from 'newrelic-react-native-agent';

const MainMenu = ({route, navigation}) => {
  return (
    <View style={main.container}>
      <Button
        style={main.button_blue}
        title="HttpDemo"
        onPress={async () => {
          const interactionID = await newRelic.startInteraction("HttpDemo");

          console.log(interactionID);
          navigation.navigate('HttpDemo', {intreractionid: interactionID});
        }}
      />
      <Button
        style={main.button_blue}
        title="ErrorDemo"
        onPress={async () => {
          const interactionID = await newRelic.startInteraction("ErrorDemo");

          console.log(interactionID);
          navigation.navigate('ErrorDemo', {intreractionid: interactionID});
        }}
      />
      <Button
        style={main.button_blue}
        title="CustomDataDemo"
        onPress={async () => {
          const interactionID = await newRelic.startInteraction("CustomDataDemo");

          console.log(interactionID);
          navigation.navigate('CustomDataDemo', {intreractionid: interactionID});
        }}
      />
    </View>
  );
};

export default MainMenu;
