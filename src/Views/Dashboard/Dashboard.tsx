import { useTranslation } from 'react-i18next';
import { useDemoApiQuery } from '../../Services/Api/module/demoApi';
// import useNotifications from '../../Hooks/useNotifications';

export default function Dashboard() {
  const { data, error } = useDemoApiQuery('');
  console.log(data, error);
  const { t } = useTranslation();
  // const { notifySuccess } = useNotifications();
  // useEffect(() => {
  //   if (notifySuccess) {
  //     setTimeout(() => {
  //       notifySuccess('Example notification');
  //     }, 3000);
  //   }
  // }, [notifySuccess]);
  return <div>Dashboard{t('hello_world')}</div>;
}
