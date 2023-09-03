import { forwardRef, useRef, useImperativeHandle } from 'react';
import Menu from '~/components/Menu';
import classnames from 'classnames/bind';

import PropperWrapper from '~/components/PropperWrapper';

import styles from './Dropdown.module.css';
const cx = classnames.bind(styles);

function DropdownMenu({ data }, ref) {
    const dropDownRef = useRef(null);

    const className = cx('dropdown-menu', 'h-100', 'hidden', {
    })

    useImperativeHandle(ref, () => {
        return {
            onShow: () => {
                dropDownRef.current.classList.remove(styles.hidden);
            },
            onHidden: () => {
                dropDownRef.current.classList.add(styles.hidden);
            }
        }
    }, []);

    function handleHidden() {
        dropDownRef.current.classList.add(styles.hidden);
    }

    function handleShow() {
        dropDownRef.current.classList.remove(styles.hidden);
    }

    return (
        <div className={className} ref={dropDownRef}
            onMouseOut={handleHidden}
            onMouseOver={handleShow}
        >
            <PropperWrapper container>
                {data.map((menu, index) => {
                    return <Menu title={menu.title} menuItems={menu.children} key={index} />
                })}
            </PropperWrapper>
        </div>
    )
}

export default forwardRef(DropdownMenu);