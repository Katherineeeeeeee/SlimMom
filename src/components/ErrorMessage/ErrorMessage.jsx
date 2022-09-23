import s from './ErrorMessage.module.scss'

const ErrorMessage = ({status}) => {

    return <div className={s.errorMessageBlock}>
        <p className={s.errorMessageTitle}>Something went wrong :-(</p>
        <p className={s.errorMessageText}>{status}</p>
        </div>
};

export default ErrorMessage;