/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import { COLORS, IMAGES, TEXT } from '../../constant/constant';
import LinearGradient from 'react-native-linear-gradient';
import { style } from './Style';
import { OutlineButton, PrimaryButton } from '../../components/CustomButton';

export default function SlashScreen() {
  return (
    <View>
      <Image src= {IMAGES.backgroundSlashScreen} resizeMode='repeat'/>
      <LinearGradient style={style.absolute} colors={[COLORS.transparent, COLORS.black]}>
        <View style={[style.absolute, style.containerContent]}>
          <Text style = {style.title}>Cooking a Delicious Food Easily</Text>
          <Text style= {style.subTitle}>Discover more than 1200 food recipts in your hands and cooking it easily</Text>
        </View>
        <PrimaryButton style={style.mtLarge} title = {TEXT.LOGIN}></PrimaryButton>
        <OutlineButton style={style.mtSmall} title = {TEXT.SIGNUP}></OutlineButton>
      </LinearGradient>
    </View>
  );
}
