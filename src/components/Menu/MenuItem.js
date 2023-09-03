import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import classnames from 'classnames/bind';
import styles from './Menu.module.css';
const cx = classnames.bind(styles);


function MenuItem({ itemData }) {
    return (
        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
            <Link to={itemData.url} className={cx('menu-link')}>{itemData.title}</Link>
        </ListGroup.Item>
    )
}

export default MenuItem;
