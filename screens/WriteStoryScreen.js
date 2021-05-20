import React from "react";
import { StyleSheet, Text, View, Header, TextInput, TouchableOpacity } from "react-native";


export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state={
            title: "",
            author: "",
            story: ""
        }
    }

    render(){
        return(
            <View>
                <Header 
                    backgroundColor={"#64a390"}
                    centerComponent={{
                        text: "bookread.io Editor", 
                        style:{
                            color: "#FFFFFF",
                            fontSize: 16,
                            fontWeight: "bold"
                        }
                    }}
                />

                <TextInput
                    style={styles.titleInput}
                    onChangeText={(text)=>{this.setState({title: text})}}
                    value={this.state.title}
                    placeholder="Story Title"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.authorInput}
                    onChangeText={(text)=>{this.setState({author: text})}}
                    value={this.state.author}
                    placeholder="Author Name"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.storyInput}
                    onChangeText={(text)=>{this.setState({story: text})}}
                    value={this.state.story}
                    placeholder="Write your story here"
                    keyboardType="numeric"
                    multiline={true}
                />

                <TouchableOpacity style={styles.submitButton}>
                    <Text style={{color: "black", fontSize: 20}}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleInput:{
        marginTop: 15,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: '#64a390',
        width: 300,
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        outline: 'none',
        fontSize: 20,
    },
    authorInput:{
        marginTop: 15,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: '#64a390',
        width: 300,
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        outline: 'none',
        fontSize: 20,
      },
      storyInput:{
        marginTop: 15,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: '#64a390',
        width: 300,
        height: 30,
        textAlign: 'center',
        alignSelf: 'center',
        outline: 'none',
        fontSize: 20,
      },

      submitButton:{
        borderWidth: 5,
        borderColor: "#000000",
        marginTop: 20,
        width: 150,
        height: 50,
        backgroundColor: "#64a390",
        borderRadius: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
      }
});