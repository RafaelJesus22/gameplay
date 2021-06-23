import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Category } from '../Category/Category';

import { styles } from './style';
import { categories, CategoryProps } from '../../utils/categories';

interface Props {
  categorySelected: number;
}

export const CategorySelect = (props: Props) => {
  const { categorySelected } = props;

  return (
    <FlatList 
      data={categories}
      contentContainerStyle={{ paddingRight: 24, paddingLeft: 24 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={ item => item.id.toString() }
      renderItem={({ item }) => (
        <Category 
          key={item.id}
          icon={item.icon}
          title={item.title}
          checked={item.id === categorySelected }
        />
      )}
    />
  );
}