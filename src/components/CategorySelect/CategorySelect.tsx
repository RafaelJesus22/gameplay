import React from 'react';
import { ScrollView } from 'react-native';
import { Category } from '../Category/Category';

import { styles } from './style';
import { categories } from '../../utils/categories';

interface Props {
  categorySelected: number;
}

export const CategorySelect = (props: Props) => {
  const { categorySelected } = props;

  return (
    <ScrollView 
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            icon={category.icon}
            title={category.title}
            checked={category.id === categorySelected }
          />
        )

        )
      }
    </ScrollView>
      
  );
}