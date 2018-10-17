import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onInputChange = function (event) {
        event.preventDefault();

        this.setState({
            term: event.target.value
        })
    };

    onFormSubmit = function (event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Get forecast in the city..."
                       className="form-control"
                       value={this.state.term}
                       onChange={this.onInputChange}
                       type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispathcToProps(dispath) {
    return bindActionCreators({fetchWeather}, dispath);
}

export default connect(null, mapDispathcToProps)(SearchBar);
