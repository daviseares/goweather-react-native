import { useEffect } from 'react';
import { isEmpty } from '~/modules';
import { useStores } from '~/stores';
import { Routes, useNavigation } from '~/utils';
import Start from './Start';

const StartContainer: React.FC = () => {
  const { locationStore } = useStores();
  const navigation = useNavigation();

  const handleNavigate = () => {
    if (!isEmpty(locationStore.location)) {
      navigation.navigate(Routes.FORECAST);
    }
  };

  const loadPermissions = async () => {
    await locationStore.getLocation();
  };

  useEffect(() => {
    loadPermissions();
  }, []);

  return <Start handleNavigate={handleNavigate} />;
};

export default StartContainer;
