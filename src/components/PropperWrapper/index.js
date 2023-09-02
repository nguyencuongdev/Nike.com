import classnames from 'classnames/bind';
import styles from './Propper.module.css';


const cx = classnames.bind(styles);
function ProppWrapper(
    { children, container }
) {
    const className = cx('wrapper', {
        container
    })
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ProppWrapper;