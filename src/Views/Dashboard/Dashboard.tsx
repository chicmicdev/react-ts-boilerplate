import { useEffect, useState } from 'react';
import {
  useDemoApiQuery,
  usePhotosMutation,
} from '../../Services/Api/module/demoApi';

interface ArrayList {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export default function Dashboard() {
  const { data, error } = useDemoApiQuery('');
  const [photos] = usePhotosMutation();
  console.log('data, error: ', data, error);

  const [list, setList] = useState<ArrayList[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = (await photos('').unwrap()) as ArrayList[];
      setList(response);
    } catch (err) {
      console.log('error: ', err);
    }
  };

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Dashboard
      <div className="row">
        {list?.slice(0, 30)?.map((photo) => (
          <div className="col-3" key={photo.id}>
            <span>{photo.title}</span>
            <img className="img-fluid" src={photo.thumbnailUrl} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
