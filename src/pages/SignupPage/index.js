import classnames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { post } from '~/utils/requests';
import Input from '~/components/Input';
import { ArrowDownIcon } from '~/components/Icon';
import styles from './SignupPage.module.css';
const cx = classnames.bind(styles);


function SignupPage() {
    const [emailValue, setEmailValue] = useState('');
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [genderValue, setGenderValue] = useState('Male');
    const [birthDayValue, setBirthDayValue] = useState('');

    const [verifyEmailValue, setVerifyEmailValue] = useState(false);
    const [verifyFirstNameValue, setVerifyFirstNameValue] = useState(false);
    const [verifyLastNameValue, setVerifyLastNameValue] = useState(false);
    const [verifyPasswordValue, setVerifyPasswordValue] = useState(false);
    const [verifyBirthdayValue, setVerifyBirthdayValue] = useState(false);


    const emailFieldRef = useRef(null);
    const firstNameFieldRef = useRef(null);
    const lastNameFieldRef = useRef(null);
    const passwordFieldRef = useRef(null);
    const birdthdayFieldRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!verifyEmailValue) {
            let inputEmail = emailFieldRef.current.querySelector('#input-email');
            let elementError = emailFieldRef.current.querySelector(`.${cx('message-error')}`);

            inputEmail.classList.add('error');
            elementError.innerText = 'Không được để trống trường này!';
        }
        if (!verifyFirstNameValue) {
            let inputFirstName = firstNameFieldRef.current.querySelector('#input-firstname');
            let elementError = firstNameFieldRef.current.querySelector(`.${cx('message-error')}`);

            inputFirstName.classList.add('error');
            elementError.innerText = 'Không được để trống trường này!';
        }
        if (!verifyLastNameValue) {
            let inputLastName = lastNameFieldRef.current.querySelector('#input-lastname');
            let elementError = lastNameFieldRef.current.querySelector(`.${cx('message-error')}`);

            inputLastName.classList.add('error');
            elementError.innerText = 'Không được để trống trường này!';
        }
        if (!verifyPasswordValue) {
            let inputPassword = passwordFieldRef.current.querySelector('#input-password');
            let elementError = passwordFieldRef.current.querySelector(`.${cx('message-error')}`);

            inputPassword.classList.add('error');
            elementError.innerText = 'Không được để trống trường này!';
        }
        if (!verifyBirthdayValue) {
            let inputBirthday = birdthdayFieldRef.current.querySelector('#input-birthday');
            let elementError = birdthdayFieldRef.current.querySelector(`.${cx('message-error')}`);

            inputBirthday.classList.add('error');
            elementError.innerText = 'Không được để trống trường này!';
        }
        if (verifyEmailValue && verifyFirstNameValue && verifyLastNameValue &&
            verifyPasswordValue
        ) {
            try {
                const res = await post('/users', {
                    email: emailValue,
                    fullName: firstNameValue + lastNameValue,
                    password: passwordValue,
                    genderValue: genderValue,
                    birthday: birthDayValue,
                    createAt: new Date(),
                    updateAt: new Date(),
                })
                console.log(res);
                console.log('submited');
            } catch (e) {
                console.log(e.message);
            }
        }
        else
            console.log('submit failed');
    }
    function handleChoiceGender(e) {
        e.stopPropagation();
        setGenderValue(e.target.innerText);
    }
    function handleValidationEmail(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;

        if (!value.length) {
            setVerifyEmailValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Không được để trống trường này!';
            return;
        }

        let regx = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}\.*[a-z]*$/;
        if (regx.test(value)) {
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
            setVerifyEmailValue(true);
        }
        else {
            setVerifyEmailValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Email không hợp lệ!';
        }
    }
    function handleOnChangeEmail(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        const regx = /^[A-Za-z0-9]/;// using match first character;
        if (value.length && !regx.test(value)) {
            e.target.value = '';
            return;
        }
        else {
            setEmailValue(value);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        }
    }
    function handleOnFocus(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        e.target.classList.remove(cx('error'));
        elementError.innerText = ' ';
    }
    function handleOnChangeLastName(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        const regx = /^[A-Za-z]/;// using match first character;
        if (value.length && !regx.test(value)) {
            e.target.value = '';
            return;
        }
        else {
            setLastNameValue(value);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        }

    }
    function handleOnChangeFirstName(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        const regx = /^[A-Za-z]/;// using match first character;
        if (value.length && !regx.test(value)) {
            e.target.value = '';
            return;
        }
        else {
            setFirstNameValue(value);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        }
    }
    function handleValidationFirstName(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        if (!value.length) {
            setVerifyFirstNameValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Không được để trống trường này!';
            return;
        }
        if (value.trimEnd().length > 20) {
            setVerifyFirstNameValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'First name không được quá 20 characters';
            return;
        }

        setVerifyFirstNameValue(true);
    }
    function handleValidationLastName(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        if (!value.length) {
            setVerifyLastNameValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Không được để trống trường này!';
            return;
        }
        if (value.trimEnd().length > 20) {
            setVerifyLastNameValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'First name không được quá 20 characters';
            return;
        }

        setVerifyLastNameValue(true);
    }
    function handleChangePassword(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        const regx = /^[A-Za-z0-9]/;// using match first character;
        if (value.length && !regx.test(value)) {
            e.target.value = '';
            return;
        }
        else {
            setPasswordValue(value);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        }
    }
    function handleValidationPassword(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;

        if (!value.length) {
            setVerifyPasswordValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Không được để trống trường này!';
            return;
        }

        if (value.length < 8) {
            setVerifyPasswordValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Độ dài của password phải lớn hơn 8 ký tự!';
            return;
        }

        let regx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]).{8,}$/;

        if (regx.test(value)) {
            setVerifyPasswordValue(true);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        }
        else {
            setVerifyPasswordValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Password phải bao gồm 1 ký tự viết hoa, viết thường và 1 ký tự đặc biệt!';
        }
    }

    return (
        <div className={cx('signup')}>
            <div className={cx('overlay')}></div>
            <form className={cx('form-signup', 'form')} onSubmit={handleSubmit}>
                <span className={cx('logo-nike')}>
                    <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                        <path fill="currentColor" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"></path>
                    </svg>
                </span>
                <h2 className={cx('signup-title')}>BECOME A NIKE MEMBER</h2>
                <p className={cx('signup-description')}>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                <div className={cx('form-group')} ref={emailFieldRef}>
                    <Input name='email' placeholder='Email address' value={emailValue}
                        id='input-email'
                        type='text'
                        classNameAdd={cx('form-signup-control', 'input-email')}
                        onBlur={handleValidationEmail}
                        onFocus={handleOnFocus}
                        onChange={handleOnChangeEmail}
                    />
                    <span className={cx('message-error')}></span>
                </div>
                <div className={cx('form-group')} ref={firstNameFieldRef}>
                    <Input name='firstName' placeholder='First Name' value={firstNameValue}
                        id='input-firstname'
                        type='text'
                        classNameAdd={cx('form-signup-control')}
                        onChange={handleOnChangeFirstName}
                        onBlur={handleValidationFirstName}
                        onFocus={handleOnFocus}
                    />
                    <span className={cx('message-error')}></span>
                </div>
                <div className={cx('form-group')} ref={lastNameFieldRef}>
                    <Input name='lastName' placeholder='Last Name' value={lastNameValue}
                        id='input-lastname'
                        type='text'
                        classNameAdd={cx('form-signup-control')}
                        onChange={handleOnChangeLastName}
                        onBlur={handleValidationLastName}
                        onFocus={handleOnFocus}
                    />
                    <span className={cx('message-error')}></span>
                </div>
                <div className={cx('form-group')} ref={passwordFieldRef}>
                    <Input name='password' placeholder='Password' value={passwordValue}
                        id='input-password'
                        type='password'
                        classNameAdd={cx('form-signup-control')}
                        onChange={handleChangePassword}
                        onFocus={handleOnFocus}
                        onBlur={handleValidationPassword}
                    />
                    <span className={cx('message-error')}></span>
                </div>
                <div className={cx('form-group')} ref={birdthdayFieldRef}>
                    <Input name='birthday' placeholder='Date of Birth' value={birthDayValue}
                        id='input-birthday'
                        type='text'
                        classNameAdd={cx('form-signup-control')}
                        onChange={(e => {
                            setBirthDayValue(e.target.value);
                            setVerifyBirthdayValue(true);
                        }
                        )}
                        onFocus={handleOnFocus}
                    />
                    <span className={cx('message-error')}></span>
                </div>
                <div className={cx('form-group', 'form-inline')}>
                    <button type="button" className={cx('form-signup-btn', {
                        'active': genderValue === 'Male'
                    })}
                        onClick={handleChoiceGender}>
                        <ArrowDownIcon className={cx('form-icon')} width='16px' height='16px' />
                        Male
                    </button>
                    <button type="button" className={cx('form-signup-btn', {
                        'active': genderValue === 'Female'
                    })}
                        onClick={handleChoiceGender}>
                        <ArrowDownIcon className={cx('form-icon')} width='16px' height='16px' />
                        Female
                    </button>
                </div>
                <p className={cx('form-privacy')}>
                    By creating an account, you agree to Nike's <br />
                    <Link to="/privacy" className={cx('form-redirect-link')}>Privacy Policy</Link>
                    and
                    <Link to="/privacy" className={cx('form-redirect-link')}>Terms of Use</Link>.</p>
                <button type="submit" className={cx('form-signup-submit')}>Join Us</button>
                <p className={cx('form-redirect')}>
                    Already a Member ?
                    <Link to='/login' className={cx('form-redirect-link')}>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default SignupPage;