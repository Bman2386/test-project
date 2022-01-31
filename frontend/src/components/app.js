import mainContainer from './main/mainContainer';
import sessionContainer from './session/sessionContainer';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={mainContainer} />
            <ProtectedRoute path='/session' component={sessionContainer} />
        </Switch>
    </div>
);

export default App;