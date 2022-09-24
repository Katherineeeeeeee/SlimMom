import { Link, useLocation } from 'react-router-dom';

import Button from 'components/Shared/Button';
import s from '../../components/NotFound/NotFound.module.scss';
import $ from 'jquery';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  var pageX = $(document).width();
  var pageY = $(document).height();
  var mouseY = 0;
  var mouseX = 0;

  $(document).mousemove(function (event) {
    //verticalAxis
    mouseY = event.pageY;
    var yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

    //horizontalAxis
    mouseX = event.pageX / -pageX;
    var xAxis = -mouseX * 100 - 100;

    $('#face').css({
      transform: 'translate(' + xAxis + '%,-' + yAxis + '%)',
    });
  });
  return (
    <div className={s.container}>
      <div className={s.booWrapper}>
        <div className={s.boo}>
          <div className={s.face} id="face"></div>
        </div>
        <div className={s.shadow}></div>

        <h1 className={s.title}>Oops!</h1>
        <p className={s.txt}>
          We couldn't find the page you
          <br />
          were looking for.
        </p>

        <Link to={backLinkHref}>
          <Button text="Come back" btnClass="btnLight" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
