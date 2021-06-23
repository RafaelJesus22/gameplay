import React from 'react';
import { SvgProps } from 'react-native-svg';

import Ranked from '../assets/ranked.svg';
import DuelSvg from '../assets/duel.svg';
import FunSvg from '../assets/fun.svg';
import TrainingSvg from '../assets/training.svg';

export interface CategoryProps {
  id: number;
  title: string;
  icon: React.FC<SvgProps>
}

export const categories: CategoryProps[] = [
  { id: 1, title: 'Ranqueada', icon: Ranked },
  { id: 2, title: 'Duelo 1x1', icon: DuelSvg },
  { id: 3, title: 'Diversão', icon: FunSvg },
  { id: 4, title: 'Treino', icon: TrainingSvg },
];