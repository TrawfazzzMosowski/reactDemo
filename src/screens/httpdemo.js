import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {main} from '../stylesheet/styles';
import {useRoute} from '@react-navigation/native';
import newRelic from 'newrelic-react-native-agent';

const HttpDemo = ({route, navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [result, setResult] = useState(null);
  const {intreractionid} = route.params;
  console.log(intreractionid);

  useEffect(() => {
    console.log('http fin');
    console.log(intreractionid);
    newRelic.endInteraction(intreractionid);
  }, [intreractionid]);

  const dtRequest = () => {
    //*********
    // Please replace the IP address below of this call with your PC's IPadress to enable the Distributedtracng to work
    //Users/mosowski/Documents/react_atg_training/reactNativeATGtraining/src/screens/httpdemo.js
    //*********
    fetch('http://10.0.2.2:3001/webrequest')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setResult(json.data.first_name);
        return json.movies;
      })
      .catch(error => {
        console.error(error);
        newRelic.recordError(error);
      });
  };

  const badRequest = () => {
    fetch('http://10.0.2.2:3001/webrequestttttttt', {timeout: 1})
      .then(response => response.json())
      .then(json => {
        console.log(json);

        return json.movies;
      })
      .catch(error => {
        console.error(error);
      });
  };

  const goodRequest = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {timeout: 1})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setResult(json.title);
        return json.movies;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={main.container}>
      <Text>
        Select the below buttons. Background your application and the data will
        arrive in NR.
      </Text>
      <Button
        style={main.button_blue}
        title="Good Http Request"
        onPress={() => goodRequest()}
      />
      <Button
        style={main.button_blue}
        title="Bad Http Request"
        onPress={() => badRequest()}
      />
      <Text>
        Select the below buttons. Background your application and the data will
        arrive in NR. Please see the dt_readme to enable Distruted tracing one a
        local system.
      </Text>
      <Button
        style={main.button_blue}
        title="Distributed Tracing Request"
        onPress={() => dtRequest()}
      />
      <Button
        style={main.button_blue}
        title="Reset"
        onPress={() => setResult()}
      />
      <Text>Your Result: {result}</Text>
    </View>
  );
};

export default HttpDemo;
