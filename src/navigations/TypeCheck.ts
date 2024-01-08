/* eslint-disable prettier/prettier */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {SCREENS} from '../constant/constant';
import {RouteProp} from '@react-navigation/native';

type MainStackParams = {
  HOME: undefined;
  SPLASHSCREEN: undefined;
};

export type PropsPush = NativeStackScreenProps<MainStackParams, SCREENS.HOME>;
export type PropsRoute = RouteProp<MainStackParams, SCREENS.HOME>;
