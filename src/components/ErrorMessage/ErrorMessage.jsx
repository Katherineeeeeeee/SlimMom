import s from './ErrorMessage.module.scss'
import style from '../NotFound/NotFound.module.scss'

const ErrorMessage = ({status}) => {

    return <div className={s.errorMessageBlock}>
        <div className={style.boo}>
            <div className={style.face} id="face"></div>
        </div>
        <p className={s.errorMessageTitle}>Something went wrong...</p>
        <p className={s.errorMessageText}>{status}</p>
        </div>
};

export default ErrorMessage;