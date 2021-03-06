import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import Session from './session';

    const mSTP = state => {

        const name = state.session.isAuthenticated && state.session.user ? state.session.user : ""
        return {
            loggedIn: state.session.isAuthenticated,
            name: name
        }
    };


    const mDTP = dispatch => {
        return {
            logout: () => dispatch(logout()),
        }
    };
    export default connect(mSTP, mDTP)(Session);

