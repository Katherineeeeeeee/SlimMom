import { Component } from "react";
import PropTypes from 'prop-types';
import Button from "components/Shared/Button";

import s from "./Modal.module.scss"

class Modal extends Component {

    static defaultProps = {
        close: () => {}
    }

    static propTypes = {
        close: PropTypes.func,
    }

    componentDidMount(){
        document.addEventListener("keydown", this.closeModal)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal)
    }

    closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            this.props.close()
        }
    }

    render(){
        const {closeModal} = this;

        return (
            <div className={s.overlay} onClick={closeModal}>
                <div className={s.modal}>
                    <div className={s.mobileClose}>
                        <span onClick={closeModal} className={s.closeM}></span>
                    </div>
                    <span onClick={closeModal} className={s.closeOther}></span>
                    <h2 className={s.modalTitle}>Your recommended daily calorie intake is</h2>
                    <p className={s.modalText}>2800<span className={s.textDescription}> kcal</span></p>
                    <div className={s.menuGroup}>
                        <p className={s.menuGroupTitle}>Foods you should not eat</p>
                        <ol className={s.menuGroupList}>
                            <li className={s.menuGroupItems}>Flour products</li>
                            <li className={s.menuGroupItems}>Milk</li>
                        </ol>
                    </div>
                    <Button text='Start losing weight' type='submit' btnClass='btn' />
                </div>
            </div>
        )
    }
}

export default Modal;

Modal.defaultProps = {
    content: {},
}

Modal.propTypes = {

}
