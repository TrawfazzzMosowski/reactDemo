import {StyleSheet} from 'react-native';

const main = StyleSheet.create({
  container: {
    marginTop: 1,
    backgroundColor: '#70CCD3',
    justifyContent: 'center',
    color: 'white',

  },
});

const button_orange = StyleSheet.create({
  orange: {
    flex: 1,
    height: 70,
    color: '#000000',
    backgroundColor: '#FF4E00',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

const button_blue = StyleSheet.create({
  blue: {
    flex: 1,
    height: 70,
    color: '#000000',
    backgroundColor: '#0069CE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});
const button_green = StyleSheet.create({
  green: {
    flex: 1,
    height: 70,
    color: '#000000',
    backgroundColor: '#66E6A8',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});
const text_box = StyleSheet.create({
  item: {
    flex: 1,
    height: 70,
    color: '#ffffff',
    backgroundColor: '#bbbbbb',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

export {main, button_orange, button_blue, button_green, text_box};
