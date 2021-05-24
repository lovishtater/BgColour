import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
// var checked = false;
const App = () => {
  const [random, setRandom] = useState('black');

  const changeBg = () => {
    let colour =
      'rgb(' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ')';
    setRandom(colour);
  };
   
//CODE FOR AUTOPLAY

  // const autoplay = () => {
  //  checked = !checked;
  //  console.log(checked);
  //  if (checked) {
  //   const auto =  setInterval(() => {
  //      changeBg()
  //    }, 1000 );
  // } else {
  //    clearInterval(auto);
  // }
  // }

  // const stopAutoplay = (auto) => {
  //   console.log(auto)
  //    clearInterval(auto);
  // }

  return (
    <>
      <StatusBar backgroundColor={random} />
      <View style={[styles.container, {backgroundColor: random}]}>
        <TouchableOpacity onPress={changeBg}>
          <Text style={styles.text}>Tap me </Text>
        </TouchableOpacity>

        //AUTOPLAY BUTTONS
        {/* <TouchableOpacity onPress={autoplay}>
          <Text style={styles.text}>Auto Play</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={stopAutoplay}>
          <Text style={styles.text}>Stop</Text>
        </TouchableOpacity> */}

        <Text style={[styles.copytext, {position: 'absolute', bottom: 0}]}>
          Made with ❤ by Lovish{' '}
        </Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
  copytext: {
    fontSize: 10,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});
