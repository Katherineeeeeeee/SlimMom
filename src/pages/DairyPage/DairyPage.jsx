import { useMediaQuery } from 'react-responsive';

import Button from 'components/Shared/Button';
import DiaryAddProductForm from '../../components/Dairy/DiaryAddProductForm';
import DiaryDateСalendar from '../../components/Dairy/DiaryDateСalendar';
import DiaryProductsList from '../../components/Dairy/DiaryProductsList';

const DairyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      {isMobile && <Button type="button" btnClass="btnDairyPage" />}
    </>
  );
};

export default DairyPage;
