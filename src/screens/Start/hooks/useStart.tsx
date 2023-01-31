import { isEmpty } from '~/modules';
import { useStores } from '~/stores';
import { Routes, useNavigation } from '~/utils';

export default function useStart() {
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

  return {
    loadPermissions,
    handleNavigate,
  };
}
