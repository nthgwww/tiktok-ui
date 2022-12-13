import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.styles(styles);

function AccountItem() {
    return (
        <div className="wrapper">
            <img src={cx('avatar')} alt="Hoaa" />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>
                        Nguyen Van A
                    </span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
