import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg'

export interface MemberProps {
  id: string;
  userName: string;
  avatar_url: string;
  status: string;
}

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


export interface CategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
}