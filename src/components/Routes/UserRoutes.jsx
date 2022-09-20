import Loader from 'components/Loader';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const CalcPage = lazy(() => import('pages/CalcPage'));
const DairyPage = lazy(() => import('pages/DairyPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dairy" element={<DairyPage />} />
        <Route path="/calculator-calories" element={<CalcPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
