'use strict';
var React = require('react');

export default React.createClass({
    componentDidMount() {
        this.getDOMNode().volume = this.props.volume || 1;
        this.getDOMNode().play();
    },

    componentDidUpdate(prevProps) {
        if (this.props.play === true && prevProps.play === false) {
            this.getDOMNode().play();
        }
    },

    render() {
        return (
            <audio aria-hidden="true" preload>
                <source src="gun.mp3" type="audio/mpeg" />
            </audio>
        );
    }
});
