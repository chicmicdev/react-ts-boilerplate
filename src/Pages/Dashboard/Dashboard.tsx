import { useTranslation } from 'react-i18next';
import Wrapper from '../../Components/CustomComponents/TileEditor/Wrapper';

export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <div>
      Dashboard{t('hello_world') || ''}
      <Wrapper isWithControls={false} />
    </div>
  );
}
