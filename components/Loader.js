import React from 'react';
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={{marginLeft: 10, fontSize: 16}}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor:  "#FFFFFF",
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});
export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    blue:'#0000FF',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Arial", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Arial", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily:  "Arial", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily:  "Arial", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily:  "Arial", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily:  "Arial", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily:  "Arial", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Arial", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Arial", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;


