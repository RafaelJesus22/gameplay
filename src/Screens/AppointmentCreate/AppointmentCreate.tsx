import React, { useState } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/BackGround';
import { GuildIcon } from '../../components/GuildIcon';
import { CategorySelect } from '../../components/CategorySelect/CategorySelect';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';


export const AppointmentCreate = () => {
  const [category, setCategory] = useState();

  return (
    <Background>
      <View>
        <Header
          title='Agendar partida'
        />

        <Text 
          style={{
            marginLeft: 24, 
            marginTop: 36,
            marginBottom: 18,
            ...styles.label
          }}
        >
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          category={category}
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              {
                // <View style={styles.image} />
                <GuildIcon/>
              }
              
              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  Selecione um servidor
                </Text>
              </View>
              
              <Feather 
                name='chevron-right'
                color={colors.heading}
                size={18}
              />
            </View>
          </RectButton>
        </View>
      </View>

    </Background>
  );
}

const { colors, fonts } = theme;
const styles = StyleSheet.create({
  label:{
    fontSize: 18,
    fontFamily: fonts.title700,
    color: colors.highlight
  },
  form:{
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select:{
    width: '100%',
    flexDirection: 'row',
    height: 68,
    borderColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden',
  },
  selectBody: {
    flex: 1,
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  }
});