import React, { Component } from 'react'
import dayjs from 'dayjs'

import locales from '../locales/locales'


export default class Logform extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hours: 0,
			strings: locales('logform')
		}
	}

	render() {
		return (
			<section className="log">
				<span className="commits-this-week">{ this.state.strings.misc.recap } { this.state.hours }</span>
				<div className="live-update">{ this.msg }</div>
				<input
					type="text"
					className="log-input"
					id="log"
					placeholder="log time"
					onFocus="begin()"
					onBlur="abort()"
					onKeyUp="nextField()" />
			</section>
		)
	}

}
