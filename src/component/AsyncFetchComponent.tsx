import React, { PureComponent } from 'react';
import axios from 'axios';

interface State {
    response?: any;
    error?: any;
}

class AsyncFetchComponent extends PureComponent<{}, State> {
    state: State = {
        response: null,
        error: null
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://httpbin.org/uuid');
            this.setState({ response: response.data });
        } catch (e) {
            this.setState({ error: e.message });
        }
    }

    render() {
        const { response, error } = this.state;
        return (
            <div>
                <h1>Fetch Result</h1>
                {response && <div data-testid="fetch-data">{JSON.stringify(response)}</div>}
                {error && <div>{error}</div>}
            </div>
        );
    }
}

export default AsyncFetchComponent;
