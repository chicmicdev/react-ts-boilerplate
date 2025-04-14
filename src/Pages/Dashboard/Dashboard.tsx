import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <div className="text-3xl font-bold underline">
      Dashboard{t('hello_world') || ''}
    </div>
  );
}
