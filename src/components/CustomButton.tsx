/* eslint-disable prettier/prettier */
import {Text, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { style } from './Style';

type Props = {
  title: string;
  style?: ViewStyle
};
export const PrimaryButton = (props: Props) => (
  <TouchableOpacity style={[style.btnPrimary, props.style]}>
    <Text style={style.textWhite}>{props.title}</Text>
  </TouchableOpacity>
);

export const OutlineButton = (props: Props) => (
    <TouchableOpacity style={[style.btnOutline, props.style]}>
      <Text style={style.textWhite}>{props.title}</Text>
    </TouchableOpacity>
  );
