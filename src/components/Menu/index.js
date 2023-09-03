import { ListGroup } from 'react-bootstrap';
import classnames from 'classnames/bind';

import MenuItem from './MenuItem';
import styles from './Menu.module.css';
const cx = classnames.bind(styles);


function Menu({ title, menuItems }) {
    return (
        <div className={cx('menu', 'col', 'px-0')}>
            {title && <h2 className={cx('menu-header')}>{title}</h2>}
            <ListGroup as='ul'>
                {
                    menuItems.map((item, index) => {
                        return <MenuItem key={index} itemData={item} />
                    })
                }
            </ListGroup>
        </div>
    )
}


export default Menu;
