/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import { COLORS, IMAGES, TEXT } from '../../constant/constant';
import LinearGradient from 'react-native-linear-gradient';
import { style } from './Style';
import { OutlineButton, PrimaryButton } from '../../components/CustomButton';

const imgLogo = require("../../images/splashscreen.jpg")
export default function SlashScreen() {
  return (
    <View>
      <Image source={imgLogo} resizeMode="cover"/>
      {/* <Image source={imgLogo}/> */}
      <LinearGradient style={style.absolute} colors={[COLORS.transparent, COLORS.black]}>
        <View style={[style.containerContent]}>
          <Text style = {style.title}>Cooking a Delicious Food Easily</Text>
          <Text style= {style.subTitle}>Discover more than 1200 food recipts in your hands and cooking it easily</Text>
        <PrimaryButton style={style.mtLarge} title = {TEXT.LOGIN} />
        <OutlineButton style={style.mtSmall} title = {TEXT.SIGNUP} />
        </View>
      </LinearGradient>
    </View>
  );
}
