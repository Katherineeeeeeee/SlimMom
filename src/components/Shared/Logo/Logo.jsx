import { Link } from 'react-router-dom';
// import { isRetina, isDesctop, isTablet, isMobile } from 'helpers/screen-sizes';
import { useMediaQuery } from 'react-responsive';

const Logo = () => {
  const isDesctop = useMediaQuery({ query: '(max-width: 1280px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <>
      {isMobile && (
        <Link to="/dairy">
          <img src="../../../images/logo/logo-mob.png" alt="web-site logo" />
        </Link>
      )}
      {isTablet && (
        <Link to="/dairy">
          <img src="" alt="web-site logo" />
        </Link>
      )}
      {isDesctop && (
        <Link to="/dairy">
          <img src="" alt="web-site logo" />
        </Link>
      )}
      {isMobile && isRetina && (
        <Link to="/dairy">
          <img src="" alt="web-site logo" />
        </Link>
      )}
      {isTablet && isRetina && (
        <Link to="/dairy">
          <img src="" alt="web-site logo" />
        </Link>
      )}
      {isDesctop && isRetina && (
        <Link to="/dairy">
          <img src="" alt="web-site logo" />
        </Link>
      )}
    </>
  );
};

export default Logo;
