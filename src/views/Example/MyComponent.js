import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Thai',
        university: 'PTIT',
    };

    handleOnChangeName(event) {
        return this.setState({
            name: event.target.value,
        });
    }

    render() {
        return (
            <>
                <input
                    value={this.state.name}
                    type="text"
                    onChange={(event) => this.handleOnChangeName(event)}
                />
                <p>
                    My name is {this.state.name}, I'm learning at{' '}
                    {this.state.university}
                </p>
            </>
        );
    }
}

export default MyComponent;
