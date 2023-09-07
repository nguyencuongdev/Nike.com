import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Media.module.css';
const cx = classnames.bind(styles);


function Media({ classNameAdd, img, title, subtitle, button, to, href }) {
    let Comp = 'div';
    const className = cx('media', classNameAdd, {

    })

    const props = {
        className,
    }
    if (to) {
        props.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp {...props} >
            <img src={img?.src} alt="media-img" className={cx('media-img')} />
            <div className={cx('media-body')}>
                <h4 className={cx('media-subtitle')}>{subtitle}</h4>
                <h2 className={cx('media-title')}>{title}</h2>
                {button && <Button to='/shop' classNameAdd={cx('media-btn')}>{button.title}</Button>}
            </div>
        </Comp>
    );
}

export default Media;