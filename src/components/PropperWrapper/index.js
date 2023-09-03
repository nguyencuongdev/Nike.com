import classnames from 'classnames/bind';
import styles from './Propper.module.css';


const cx = classnames.bind(styles);
function ProppWrapper(
    { children }
) {
    const className = cx('wrapper', {
    })
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ProppWrapper;