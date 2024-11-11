import React from "react";
import Routes from "./routes";
import toast, { Toaster } from 'react-hot-toast';

class App extends React.Component {

    render() {
        return (
            <>
                <Routes />
                <Toaster />
            </>
        );
    }
}

export default App;