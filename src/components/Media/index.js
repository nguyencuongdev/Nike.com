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
    const propsButton = {}

    if (to) {
        props.to = to;
        propsButton.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        propsButton.href = href;
        Comp = 'a';
    }

    return (
        <Comp {...props} >
            <img src={img?.src} alt="media-img" className={cx('media-img')} />
            <div className={cx('media-body')}>
                <h4 className={cx('media-subtitle')}>{subtitle}</h4>
                <h2 className={cx('media-title')}>{title}</h2>
                {button && <Button {...propsButton} classNameAdd={cx('media-btn', button?.className)}>{button?.title}</Button>}
            </div>
        </Comp>
    );
}

export default Media;