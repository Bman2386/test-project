import mainContainer from './main/mainContainer';
import sessionContainer from './session/sessionContainer';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import React from 'react';

const App = () => (
    <div>
            <AuthRoute exact path="/" component={mainContainer} />
            <ProtectedRoute path='/session' component={sessionContainer} />
    </div>
);

export default App;