import React, {Component} from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {(this.props.loading)? 'Loading': ''}
            </div>
        )
    }
}

export default Loading;