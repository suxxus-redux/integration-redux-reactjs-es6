import React from 'react';

class Hello extends React.Component {

    render() {
        const { greet } = this.props;
        return (<div>{ greet }</div>);
    }
}

Hello.propTypes = {
    greet: React.PropTypes.string.isRequired
};

export default Hello;
