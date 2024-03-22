import { useDemoApiQuery } from '../../Services/Api/module/demoApi';
// import useNotifications from '../../Hooks/useNotifications';

export default function Dashboard() {
  const { data, error } = useDemoApiQuery('');
  console.log(data, error);
  // const { notifySuccess } = useNotifications();
  // useEffect(() => {
  //   if (notifySuccess) {
  //     setTimeout(() => {
  //       notifySuccess('Example notification');
  //     }, 3000);
  //   }
  // }, [notifySuccess]);

  return <div>Dashboard</div>;
}
