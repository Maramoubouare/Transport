import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import  {StyleSheet} from 'react-native';

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor:style.COLORS.blue,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: style.COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
    COLORS: {
        // base colors
        primary: "#FC6D3F", // orange
        secondary: "#CDCDD2",   // gray
    
        // colors
        black: "#1E1F20",
        white: "#FFFFFF",
        grey: '#908e8c',
        lightGray: "#F5F5F6",
        lightGray2: "#F6F6F7",
        lightGray3: "#EFEFF1",
        lightGray4: "#F8F8F9",
        transparent: "transparent",
        darkgray: '#898C95',
        blue:'#0000FF',
    }
    });
    

export default Button;