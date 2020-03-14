import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

import {getSupportTypes} from '../../api/api';

export default class ReactNativeMaterialDropdownScreen extends Component {

    state = {supportTypes: []};

    static navigationOptions = {
        title: 'React Native Material Dropdown'
    };

    componentDidMount() {
        const types = getSupportTypes();
        this.setState({ ...this.state, supportTypes: types });
    }

    renderDropdown() {
        console.log('data:', this.state.supportTypes);
        if(this.state.supportTypes && this.state.supportTypes.length > 0) {
            return (
                <Dropdown
                    label="Support Types"
                    data={this.state.supportTypes}
                />
            );
        }
    }

    render() {
        return (
            <View>
               {this.renderDropdown()}
            </View>
        );
    }
}