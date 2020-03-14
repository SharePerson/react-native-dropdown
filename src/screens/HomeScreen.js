import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.mainContainer}>
                <Button
                    title="React Native Material Dropdown"
                    onPress={() => navigation.navigate('RNMD')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });