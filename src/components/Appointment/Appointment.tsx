import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { GuildIcon } from '../GuildIcon'; 
import { styles } from './style';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

export interface GuildProps {
  id: string;
  owner: boolean;
  name: string;
  icon: null;
}

export interface AppointmentProps {
  id: string;
  guild: GuildProps;
  category: string;
  description: string;
  date: string;
}

interface Props extends RectButtonProps {
  data: AppointmentProps;
}

export const Appointment = (props: Props) => {
  const { data, ...rest } = props;
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  const [category] = categories.filter(item => item.id === data.category);

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              { data.guild.name }
            </Text>
            <Text style={styles.category}>
              { category.title }
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>
                { data.date }
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg 
                fill={ owner ? primary : on }
              />

              <Text style={[
                styles.player,
                { color: owner ? primary : on }
              ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>
          
        </View>
      </View>
    </RectButton>
  );
}