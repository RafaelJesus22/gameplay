import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Profile } from '../../components/Profile/Profile';
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect/CategorySelect';
import { ListHeader } from '../../components/ListHeader/ListHeader';
import { Appointment } from '../../components/Appointment/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/BackGround';
import { styles } from './styles';


export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 22h',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero ab aliquid delectus. Reprehenderit, ullam?id: '
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 22h',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero ab aliquid delectus. Reprehenderit, ullam?id: '
    },
  ]

  const handleCategorySelect = (categoryId: string) => {
    setCategory(categoryId === category ? '' : categoryId)
  }

  return (
    <Background>
      
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader 
            title='Patidas agendadas'
            subtitle='total 6'
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            renderItem={({ item }) => (
              <Appointment 
                data={item}
              />
            )}
          />
        </View>
      </View>

    </Background>
  );
}