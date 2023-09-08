import { forwardRef, useRef, useImperativeHandle } from 'react';
import Menu from '~/components/Menu';
import classnames from 'classnames/bind';

import PropperWrapper from '~/components/PropperWrapper';

import styles from './ListMenu.module.css';
const cx = classnames.bind(styles);

function ListMenu({ data }, ref) {
    const listMenuRef = useRef(null);

    const className = cx('list-menu', 'hidden', {
    })

    useImperativeHandle(ref, () => {
        return {
            onShow: () => listMenuRef.current.classList.remove(styles.hidden),
            onHidden: () => listMenuRef.current.classList.add(styles.hidden)
        }
    }, []);

    function handleHidden(e) {
        e.stopPropagation();
        listMenuRef.current.classList.add(styles.hidden);
    }

    function handleShow() {
        listMenuRef.current.classList.remove(styles.hidden);
    }

    return (
        <div className={className} ref={listMenuRef}
            onMouseOver={handleShow}
        >
            <div className={cx('list-body')}>
                <PropperWrapper>
                    {data && data.map((menu, index) => {
                        return <Menu title={menu.title} menuItems={menu.children} key={index} />
                    })}
                </PropperWrapper>
            </div>
            <div className={cx('list-overlay')}
                onMouseOver={handleHidden}
            ></div>
        </div>
    )
}

export default forwardRef(ListMenu);