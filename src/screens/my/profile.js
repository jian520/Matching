import React, {Component} from "react";
import {
    Platform, View, NativeModules, Alert, StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    ListItem,
    Text,
    Badge,
    Left,
    Right,
    Body,
    Switch,
    Radio,
    Picker,
    Separator,
    Thumbnail, Spinner, ActionSheet
} from "native-base";

import common from "../../common/common"
import gStyles from "../../common/globalStyles"
import service from "../../common/service"
import {Grid, Row, Col} from "react-native-easy-grid";
import Swiper from 'react-native-swiper'
import API from "../../common/API";
import Album from "../../model/Album";


const img1 = require("../../../assets/swiper-1.png");
const img2 = require("../../../assets/swiper-2.png");
const img3 = require("../../../assets/swiper-3.png");
const img4 = require("../../../assets/swiper-4.png");


var BUTTONS = [
    {text: "確定", icon: "american-football", iconColor: "#2c8ef4"},

    {text: "取消", icon: "close", iconColor: "#25de5b"}
];
var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 1;

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            image: null,
            images: null,
            dataSource: [],
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }

    componentWillMount() {
        service.getUserFromCache()
            .then((user) => {

                if (user) {
                    this.setState({
                        user: user
                    });

                    this.setState({user: user}, function () {
                        this.loadPhotoData();
                        console.log(this.state.user.id)
                    })

                }


            });
    }


    componentDidMount() {
    }

    componentDidUpdate() {

        // this.loadData();
    }

    loadPhotoData() {

        service.photoAlbumList(this.state.user.id)
            .then((wrapData) => {
                console.log('wrapData  ')
                console.log(wrapData)

                this.setState({
                    loading: false,

                });

                if (wrapData.flag == "Success") {
                    // common.toast(wrapData.msg)
                    // DeviceEventEmitter.emit('DidLogin', true);

                    this.setState({
                        dataSource: wrapData.data,
                    });

                } else {
                    common.toast(wrapData.msg)
                    this.setState({
                        dataSource: [],

                    });
                }

            }).then((items) => {

        }).catch((error) => {
            console.log(error);

            this.setState({
                loading: false,

            });


        })
    }

    renderPhotos() {

        var data = this.state.dataSource;
        var list = [];
        for (var i in data) {
            let imgUrl = {uri: API.ImageUrl + data[i].uploadimage}

            var row = (
                <View key={i} style={styles.slide}>
                    <TouchableOpacity onPress={(e) => {
                        this.pushToPhotoList()
                    }}>
                        <Image resizeMode='stretch' style={styles.image} source={imgUrl}/>
                    </TouchableOpacity>
                </View>


            );
            list.push(row);

        }

        if (list.length == 0) {
            return (
                <View></View>
            )
        }

        return (

            <Swiper style={styles.wrapper} height={200}
                    autoplay
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 5,
                        height: 5,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}/>}
                    activeDot={<View style={{
                        backgroundColor: '#fff',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}/>}
                    paginationStyle={{
                        bottom: 10
                    }} loop>


                    {list}
            </Swiper>


        )
    }

    pushToPhotoList() {
        this.props.navigation.navigate("PhotoList")
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
                    <Title style={gStyles.textAColor}>修改資料</Title>
                    </Body>
                    <Right>


                    </Right>
                </Header>

                <Content>

                        {/*{this.renderPhotos()}*/}



                    <ListItem itemDivider>
                        <Text>基本資料</Text>
                    </ListItem>

                    <ListItem icon>
                        <Body>
                        <Text style={gStyles.textBColor}>手機號</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>12345678 </Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Body>
                        <Text style={gStyles.textBColor}>郵件</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>504822765@qq.com</Text>
                        </Right>
                    </ListItem>

                </Content>
            </Container>
        );
    }


}


const styles = {
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: common.deviceWidth,
        height: 200

    }
}

