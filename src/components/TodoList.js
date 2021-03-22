import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { MaterialIcons } from '@expo/vector-icons';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo =>
            (!todo.is_deleted) ?
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginVertical: 10 }} key={todo.id}>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 24,
                            textDecorationLine: todo.completed ?  'line-through': 'none' 
                        }}>{todo.id}.  {todo.text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={{ backgroundColor: todo.completed ? "green" : "red", justifyContent: 'center', padding: 10, borderRadius: 5 }} >
                        <Text style={{ color: '#fff' }}>{todo.completed ? "Completed" : "Not Completed"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                        <MaterialIcons name="delete" size={25} />
                    </TouchableOpacity>
                </View>
                : null

        )}
    </View>
)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});