import { Link } from 'react-router-dom';
import { isRetina, isDesctop, isTablet, isMobile } from 'helpers/screen-sizes';

const Logo = () => {
  return (
    <>
      {isMobile && (
        <Link>
          <img src="" alt="" />
        </Link>
      )}
      {isTablet && (
        <Link>
          <img src="" alt="" />
        </Link>
      )}
      {isDesctop && (
        <Link>
          <img src="" alt="" />
        </Link>
      )}
      {isMobile && isRetina && (
        <Link>
          <img src="" alt="" />
        </Link>
      )}
      {isTablet && isRetina && (
        <Link>
          <img src="" alt="" />
        </Link>
      )}
      {isDesctop && isRetina && (
        <Link>
          <img src="" alt="" />
        </Link>
      )}
    </>
  );
};

export default Logo;
