import { authActions } from '~/redux/authSlice';
import { post } from '~/utils/requests';

export const registerService = async (data, dispatch, navigate) => {
    dispatch(authActions.registerStart());
    try {
        await post('/users', data);
        dispatch(authActions.registerSuccess());
        navigate('/login');
    }
    catch (err) {
        dispatch(authActions.registerFailure());
    }
}

export const loginService = async (data, dispatch, navigate) => {
    dispatch(authActions.loginStart());
    try {
        const res = await post('/users', data);
        console.log(res);
        dispatch(authActions.loginSuccess(res));
        navigate('/');

    } catch (e) {
        dispatch(authActions.loginFailure());
    }
}
