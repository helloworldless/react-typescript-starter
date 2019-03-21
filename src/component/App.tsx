import * as React from 'react';

type AppProps = {
    message: string
}

function App(props: AppProps) {
    return (<h1>{props.message}</h1>);
}

export default App;
