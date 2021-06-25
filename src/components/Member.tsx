import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../global/styles/theme';

import { Avatar } from './Avatar'

export interface MemberProps {
  id: string;
  userName: string;
  avatar_url: string;
  status: string;
}

interface Props {
 data: MemberProps;
}

export const Member = (props: Props) => {
  const { data } = props;
  const { avatar_url, status, userName } = data;
  const isOnline = status === 'online';

  return (
    <View style={styles.container}>
      <Avatar 
        imageUrl={ avatar_url }
      />

      <View>
        <Text style={styles.title}>
          { userName }
        </Text>

        <View style={styles.status}>
        <View  
          style={[
            styles.bulletStatus,
            {backgroundColor: isOnline ? colors.on : colors.primary}
          ]}
        />
        <Text style={styles.nameStatus}>
          { isOnline ? 'Disponível' : 'Ocupado' }
        </Text>
      </View>
      </View>
    </View>
  );
}

const { fonts, colors } = theme;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9,
  },
  nameStatus: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
  },
})