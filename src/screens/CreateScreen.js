import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    // const { state } = useContext(Context);

    // const blogPost = state.find(
    //     blogPost => blogPost.id === navigation.getParam('id')
    // );

    return (
        <View>
            <Text>Enter Title</Text>
            <TextInput />
            <Text>Enter Content</Text>
            <TextInput />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    trash: {
        fontSize: 20,
    },
});

export default CreateScreen;