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
                src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/278083423_1512575072478802_4220335025709622618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dnV89Hd2PXsAX8KqWhc&tn=oagKpV3iKE-5O-0f&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfC3OT9f2YTxSoirWjtM-bFsGLMtlYBjq1pt9Zo81RFm7Q&oe=639D6403"
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