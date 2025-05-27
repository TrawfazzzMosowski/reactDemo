import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {main} from '../stylesheet/styles';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import newRelic from 'newrelic-react-native-agent';

const CustomDataDemo = ({route, navigation}) => {
  const {intreractionid} = route.params;
  console.log(intreractionid);

  useEffect(() => {
    console.log('custom fin');
    console.log(intreractionid);
    newRelic.endInteraction(intreractionid);
  }, [intreractionid]);

  const setCustomAttr = () => {
    newRelic.setAttribute('RNCustomAttrNumber', 37);
    newRelic.setAttribute('RNCustomAttrText', 'SameText');
    newRelic.setAttribute('RNCustomAttrboolean', true);
    console.log('Setting a Custom Attribute');
  };

  const set_user_id = () => {
    newRelic.setUserId('RN12934');
    console.log('Setting userId');
  };

  const do_breadcrumb = () => {
    newRelic.recordBreadcrumb('shoe', {
      shoeColor: 'blue',
      shoesize: 9,
      shoeLaces: true,
    });
    console.log('Add Breadcrumb data to NR');
  };

  const do_custom_event = () => {
    newRelic.recordCustomEvent('mobileClothes', 'pants', {
      pantsColor: 'blue',
      pantssize: 32,
      belt: true,
    });
    console.log('Add Custom Events data to NR');
  };

  return (
    <View style={main.container}>
      <Text>
        You must create transactions after Setting Custom Attribute and UserId.
        Switch Screens or do Http request to see the data in NR
      </Text>
      <Button
        style={main.button_blue}
        title="Set Custom Attibute"
        onPress={() => setCustomAttr()}
      />
      <Button
        style={main.button_blue}
        title="Set User Id"
        onPress={() => set_user_id()}
      />
      <Text>This adds a new recored each time it is pressed</Text>
      <Button
        style={main.button_blue}
        title="Custom Data BreadCrumb"
        onPress={() => do_breadcrumb()}
      />
      <Button
        style={main.button_blue}
        title="Custom Data CustomEvent"
        onPress={() => do_custom_event()}
      />
      <Text>Please background your app to send the data</Text>
    </View>
  );
};

export default CustomDataDemo;
