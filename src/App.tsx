// routing
import Routes from 'routes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import Snackbar from 'ui-component/extended/Snackbar';
import ThemeCustomization from 'themes';

// auth provider
// import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// ==============================|| APP ||============================== //

const App = () => (
    <ThemeCustomization>
        {/* RTL layout */}
        <NavigationScroll>
            {/* <AuthProvider> */}
            <>
                <Routes />
                <Snackbar />
            </>
            {/* </AuthProvider> */}
        </NavigationScroll>
    </ThemeCustomization>
);

export default App;
