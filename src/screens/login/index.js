import React, {Component} from "react";
import {
    StyleSheet,
    Image,
    AsyncStorage,

    TouchableHighlight,
    ActivityIndicator,
    ScrollView,
    Keyboard,
    KeyboardAvoidingView,
    DeviceEventEmitter,
    InteractionManager
} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Body,
    Left,
    Right,
    Item,
    Input,
    Form, Separator, Thumbnail, View, Text, Spinner
} from "native-base";
import styles from "./styles";
import gStyles from "../../common/globalStyles"
import common from "../../common/common"

const cover = require("../../../assets/login-icon.png");
import service from "../../common/service"

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '504822765@qq.com',
            password: '123456',
            loading: false,
            isSentVerify: true,
        };

    }

    start() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'tabRoot'}),

            ]
        })
        this.props.navigation.dispatch(resetAction)

    }

    componentWillMount() {

        service.getEmail()
            .then((email) => {
                console.log(" email is " + email)

                if (email.length != 0 ) {
                    this.setState({
                        email: email
                    });
                }

            });

        service.getPassword()
            .then((password) => {

                if (password.length != 0) {

                    this.setState({
                        password: password
                    });
                }

            });

    }

    onEmailChanged(text) {
        this.setState({email: text});
    }

    onPwdChanged(text) {
        this.setState({password: text});
    }

    doLogin() {
        Keyboard.dismiss()
        console.log('doLogin')

        if (this.state.loading) return;
        if (this.state.email == '') {
            common.toast("請輸入郵件！")
            return;
        }
        if (!common.validateEmail(this.state.email)) {
            common.toast("郵件格式不正確！")
            return;
        }

        if (this.state.password == '') {
            common.toast("請輸入密碼！")
            return;
        }


        this.setState({
            loading: true,

        });

        service.loginSystem(this.state.email, this.state.password)
            .then((wrapData) => {
                console.log('wrapData  ')
                console.log(wrapData)

                this.setState({
                    loading: false,

                });

                if (wrapData.flag == "Success") {
                    // common.toast(wrapData.msg)
                    // DeviceEventEmitter.emit('DidLogin', true);
                    this.start()
                } else {
                    common.toast(wrapData.msg)
                }

            }).then((items) => {

        }).catch((error) => {
            console.log(error);

            this.setState({
                loading: false,

            });


        })

    }


    render() {
        return (
            <Container style={gStyles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#000"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>登錄</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content padder>
                    <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                    <View style={{flex: 1, alignItems: "center", flexWrap: "wrap", marginLeft: 40, marginRight: 40}}>
                        <Thumbnail large source={cover}/>

                        <Separator style={{backgroundColor: "#FFF", height: 40}}/>


                        <Item rounded>
                            <Input placeholder="請輸入電郵" placeholderTextColor={common.colorC}
                                   onChangeText={(e) => {
                                       this.onEmailChanged(e)
                                   }}
                                   value={this.state.email}
                            />
                        </Item>

                        <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                        <Item rounded>
                            <Input placeholder="請輸入密碼" placeholderTextColor={common.colorC} secureTextEntry
                                   onChangeText={(e) => {
                                       this.onPwdChanged(e)
                                   }}
                                   value={this.state.password}
                            />
                        </Item>
                        <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                        <Spinner
                            style={{position: "absolute",alignSelf: 'center'}}
                            animating={this.state.loading} size="large" color="red"/>

                        <Button block rounded style={{backgroundColor: common.colorA}} onPress={() => this.doLogin()}>
                            <Text>登錄</Text>
                        </Button>
                        <Separator style={{backgroundColor: "#FFF", height: 15}}/>


                        <Text style={gStyles.textBColor}>忘記密碼？</Text>


                        {/*<Separator style={{backgroundColor: "#FFF", height: 10}}/>*/}


                        {/*<Button block rounded style={{backgroundColor: common.colorE}}>*/}
                        {/*<Text style={{color: common.colorA}}>注册</Text>*/}
                        {/*</Button>*/}
                    </View>
                </Content>
            </Container>
        );
    }
}

