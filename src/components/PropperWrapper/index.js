import classnames from 'classnames/bind';
import styles from './Propper.module.css';


const cx = classnames.bind(styles);
function ProppWrapper(
    { children, oneMenu }
) {
    const className = cx('wrapper', {
        oneMenu,
    })
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ProppWrapper;