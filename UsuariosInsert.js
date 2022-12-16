import React,{Component} from 'react';
import {View, text, Button, StyleSheet} from  'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default class UsuariosInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state={user:'',password:''};

    }

    InsertRecord=()=>
    {
        var user=this.state.user;
        var password=this.state.password;

        if(user.length==0 || password.length == 0)
        {
            alert("Preencha todos campos");
        }
        else
        {
           var InsertAPIURL="http://10.0.2.2:80/api/insert.php";
        
            var headers={
              'Accept' : 'application/json',
              'Content-Type': 'application.json'
            };

            var Data={
                user:user,
                password:password
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                })
                .catch((error)=>
                {
                    alert("ERROR"+error);
                })
        
        }


    }
    render()
    {
        return(
            <View style={styles.ViewStyle}>
                <TextInput
                    placeholder={"user"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                    onChangeText={user=>this.setState({user})}

                />
                
                <TextInput
                    placeholder={"password"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                    onChangeText={password=>this.setState({password})}
                    />
                <Button
                    title={"Adicionar User"}
                    onPress={this.InsertRecord}
                    />
            </View>
        );
    }
}

const styles=StyleSheet.create({

        ViewStyle:
        {
            flex:1,
            padding:20,
            marginTop:10
        },
        txtStyle:
        {
            borderBottomWidth:1,
            borderBottomColor:'red',
            marginBottom:20
        }

});