import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import Progress from 'react-progressbar';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            all: 0,
            complete: 0
        }
    }

    componentDidMount() {
        ipcRenderer.on('status', (e, arg) => {
            this.setState({ status: arg });
        });
        ipcRenderer.on('all', (e, arg) => {
            this.setState({ all: arg });
        });
        ipcRenderer.on('complete', (e, arg) => {
            this.setState({ complate: this.state.complete + 1 });
        });
    }

    render() {
        return(
            <div>
                <span>{this.state.status} ({this.state.complete}/{this.state.all})</span>
                <Progress completed={this.state.complete / this.state.all * 100} />
            </div>
        );
    }
}

ReactDOM.render(
    <SplashScreen />,
    document.getElementById('content')
);