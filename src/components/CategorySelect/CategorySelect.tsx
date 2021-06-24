import React from 'react';
import { FlatList } from 'react-native';
import { Category } from '../Category/Category';

import { categories } from '../../utils/categories';

interface Props {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export const CategorySelect = (props: Props) => {
  const { categorySelected, setCategory, hasCheckBox } = props;

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
          onPress={() => setCategory(item.id)}
          hasCheckBox={hasCheckBox}
        />
      )}
    />
  );
}