import { useNavigation as _useNavigation } from '@react-navigation/native';

export const useNavigation = () => {
  const navigation = _useNavigation<NavigationProps>();
  return navigation;
};
