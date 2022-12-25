import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/319219068_1503434800138677_3940043810551891142_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lZOVA6YiOM8AX_6Vppp&_nc_oc=AQmIm9krXbmYtgedyWvmHDA8rPWnqY_s_D4MhHbirp37sE2oSMDX0zaWOq1vLTTiuRQ&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDxZG417_MD6YS2l8r8IN9dW0b2raYyJq-xBlxeFi-gag&oe=63A9749A "
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;