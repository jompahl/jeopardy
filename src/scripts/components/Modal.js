'use strict';

// Libs
var React = require('react');

var AppActionCreators = require('../actions/AppActionCreators');
var OpenModalButton = require('./OpenModalButton');
var CloseModalButton = require('./CloseModalButton');

require('../../styles/modal.scss');

var ESC_KEY = 27;

var Modal = React.createClass({
	defaultProps: {
		open: React.PropTypes.bool.isRequired
	},
	 
	componentDidMount: function() {
		document.addEventListener('keyup', this._onKeyUp);
	},

	componentWillUnmount: function() {
		document.removeEventListener('keyup', this._onKeyUp);
	},

	render: function() {
		return (
			<div className="container">
				<div 
					className="Modal-overlay" 
					id="ModalWindow"
					aria-hidden={!this.props.open}
					role="dialog"
					aria-labelledby="Modal_title"
					key="modalOverlay"
					onClick={this._onBackgroundClick}
					onKeyDown={this.handleKeyDown}
				>

					<div className="Modal-content" id="Modal_holder" role="document">
						{this.props.children}	

						<CloseModalButton />
					</div>

				</div>
			</div>
		);
	},

	_onBackgroundClick: function(e) {
		if (e.target.id === "ModalWindow") {
			AppActionCreators.closeWebshop();
		}
	},
	
	_onKeyUp: function(e) {
		if (e.which === ESC_KEY) {
			AppActionCreators.closeWebshop();
		}
	},

});

module.exports = Modal;
