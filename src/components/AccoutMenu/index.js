import Tipy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';

import Menu from '~/components/Menu';
import ProppWrapper from '~/components/PropperWrapper';


import styles from './AccountMenu.module.css';
const cx = classnames.bind(styles);


function AccountMenu({ children, data }) {
    return (
        <Tipy
            interactive
            placement='bottom-end'
            render={() => {
                return (
                    <div className={cx('wrapper')}>
                        <ProppWrapper oneMenu>
                            <Menu title={data.title} menuItems={data.children} />
                        </ProppWrapper>
                    </div>
                )
            }}
        >
            {children}
        </Tipy>
    )
}

export default AccountMenu;