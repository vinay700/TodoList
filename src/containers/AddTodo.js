import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        //redux store 
        this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }

    render() {
        return (
            <>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#018de5', padding: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Todo App</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={{ fontSize: 18 }}>Enter Your List:</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TextInput
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder="      Eg. Create New Video"
                        style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                    />
                    <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                        <View style={{ height: 50, backgroundColor: '#eaeaea', alignItems: 'center', justifyContent: 'center' }}>
                            <Icons name="plus" size={30} style={{ color: '#de9595', padding: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});