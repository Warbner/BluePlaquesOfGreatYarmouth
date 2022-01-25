//  --- React and React Native --- \\
import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

// --- Own Assets --- \\
import { commonSheet } from './styles'
const styles = commonSheet;

class Page extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.page}>
                <View style={styles.pageContainer}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        )
    }
}

export default Page;