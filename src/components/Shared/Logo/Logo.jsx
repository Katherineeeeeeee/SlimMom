import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import ld from '../../../images/logo/logo-desc.png';
import ld2x from '../../../images/logo/logo-desc@2x.png';
import lt from '../../../images/logo/logo-tab.png';
import lt2x from '../../../images/logo/logo-tab@2x.png';
import lm from '../../../images/logo/logo-mob.png';
import lm2x from '../../../images/logo/logo-mob@2x.png';

import { getLogin } from 'redux/auth/auth-selectors';

const Logo = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const isLogin = useSelector(getLogin);

  return (
    <>
      {isMobile && !isRetina && !isLogin && (
        <Link to="/dairy">
          <img src={lm} alt="web-site logo" width="46" />
        </Link>
      )}

      {isMobile && isRetina && !isLogin && (
        <Link to="/dairy">
          <img src={lm2x} alt="web-site logo" width="46" />
        </Link>
      )}

      {isMobile && !isRetina && isLogin && (
        <Link to="/dairy">
          <img src={lt} alt="web-site logo" width="160" />
        </Link>
      )}

      {isMobile && isRetina && isLogin && (
        <Link to="/dairy">
          <img src={lt2x} alt="web-site logo" width="160" />
        </Link>
      )}

      {isTablet && !isRetina && (
        <Link to="/dairy">
          <img src={lt} alt="web-site logo" width="162" />
        </Link>
      )}

      {isTablet && isRetina && (
        <Link to="/dairy">
          <img src={lt2x} alt="web-site logo" width="162" />
        </Link>
      )}

      {isDesctop && !isRetina && (
        <Link to="/dairy">
          <img src={ld} alt="web-site logo" width="167" />
        </Link>
      )}

      {isDesctop && isRetina && (
        <Link to="/dairy">
          <img src={ld2x} alt="web-site logo" width="167" />
        </Link>
      )}
    </>
  );
};

export default Logo;
