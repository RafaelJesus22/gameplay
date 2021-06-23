import React, { useState } from 'react';
import { View } from 'react-native';

import { Profile } from '../../components/Profile/Profile';
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect/CategorySelect';
import { styles } from './styles';


export function Home() {
  const [category, setCategory] = useState('');

  const handleCategorySelect = (categoryId: string) => {
    setCategory(categoryId === category ? '' : categoryId)
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>

    </View>
  );
}