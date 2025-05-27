import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {main} from '../stylesheet/styles';
import {useRoute} from '@react-navigation/native';
import newRelic from 'newrelic-react-native-agent';

const ErrorDemo = ({route, navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const {intreractionid} = route.params;
  console.log(intreractionid);

  useEffect(() => {
    console.log('error fin');
    console.log(intreractionid);
    newRelic.endInteraction(intreractionid);
  }, [intreractionid]);

  const rgerrorexample = () => {
    var pi = 3.14159;
    pi.toFixed(100000);
  };

  const typeerrorexample = () => {
    var foo = {};
    foo.bar();
  };

  const rferrorexample = () => {
    bar++;
  };

  const urierrorexample = () => {
    decodeURIComponent('%');
  };

  const evalerrorexample = () => {
    throw new EvalError('Hello', 'someFile.js', 10);
  };

  return (
    <View style={main.container}>
      <Text>See how errors are reported to NewRelic</Text>
      <Button
        style={main.button_blue}
        title="rg error"
        onPress={() => rgerrorexample}
      />
      <Button
        style={main.button_blue}
        title="rf error"
        onPress={() => rferrorexample()}
      />
      <Button
        style={main.button_blue}
        title="uri error"
        onPress={() => urierrorexample()}
      />
      <Button
        style={main.button_blue}
        title="eval error"
        onPress={() => evalerrorexample()}
      />
      <Button
        style={main.button_blue}
        title="type error"
        onPress={() => typeerrorexample()}
      />
    </View>
  );
};

export default ErrorDemo;
