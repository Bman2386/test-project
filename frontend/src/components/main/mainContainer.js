import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import Main from './main';

const mSTP = (state) => {
    return {
    };
};

const mDTP = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
    }
}

export default connect(mSTP, mDTP)(Main)