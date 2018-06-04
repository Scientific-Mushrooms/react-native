import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease, reset, login } from '../../redux/actions/action';

class Home extends Component {

    _onPressReset() {
        this.props.dispatch(reset());
    }

    _onPressInc() {
        this.props.dispatch(increase());
    }

    _onPressDec() {
        this.props.dispatch(decrease());
    }

    _login() {
        this.props.dispatch(login());
    }

    render() {
        return (
        <View style={styles.container}>
                <Text style={styles.counter}>{this.props.counter.count}</Text>
                
                <TouchableOpacity style={styles.reset} onPress={()=>this._onPressReset()}>
                <Text>归零</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.start} onPress={()=>this._onPressInc()}>
                <Text>加1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.stop} onPress={()=>this._onPressDec()}>
                <Text>减1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.stop} onPress={()=>this._login("233333333")}>
                <Text>33333333333333333</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.stop} onPress={()=>this._login("233333333")}>
                <Text>{this.props.user}</Text>
                </TouchableOpacity>
                
        </View>
        );
    }
}

const styles = StyleSheet.create({

    mainContainer: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

const mapStateToProps = state => ({
    user: state.user.name,
    counter: state.counter,
})

export default connect(mapStateToProps)(Home);