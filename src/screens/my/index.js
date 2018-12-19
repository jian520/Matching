import React, {Component} from "react";
import {Platform, View, NativeModules, Alert} from "react-native";
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
    Thumbnail
} from "native-base";
import styles from "./styles";
import common from "../../common/common"
import globalStyles from "../../common/globalStyles"


const icon1 = require("../../../assets/my-icon-01.png");
const icon2 = require("../../../assets/my-icon-02.png");
const icon3 = require("../../../assets/my-icon-03.png");
const icon4 = require("../../../assets/my-icon-04.png");
const icon5 = require("../../../assets/my-icon-05.png");
import service from "../../common/service"

import API from '../../common/API'

const DefaultAvatar = require("../../../assets/login-icon.png");
var ImagePicker = NativeModules.ImageCropPicker;
const Item = Picker.Item;


export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            image: null,
            images: null
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
                }


            });
    }

    pickSingle(cropit, circular = false) {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            cropperCircleOverlay: circular,
            compressImageMaxWidth: 640,
            compressImageMaxHeight: 480,
            compressImageQuality: 0.5,
            compressVideoPreset: 'MediumQuality',
            includeExif: true,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
                images: null
            });

            this.upload(image.path)


        }).catch(e => {
            console.log(e);
            Alert.alert(e.message ? e.message : e);
        });
    }


    renderAsset(image) {
        if (image)
            return <Thumbnail source={image} style={{height: 60}}/>

        if (this.state.user.avatar == null) {
           return <Thumbnail source={DefaultAvatar} style={{height: 60}}/>
        }
        return <Thumbnail source={{uri: API.ImageUrl + this.state.user.avatar}} style={{width:60, height: 60}}/>


    }

    upload(path) {
        console.log('path image', path);
        let params = {
            userid:this.state.user.id,   //用户id
            path:path   //本地文件地址
        }
        service.uploadImage(API.UPLOADAVATAR,params )
            .then( res=>{
                //请求成功
                if(res.header.statusCode == 'success'){
                    //这里设定服务器返回的header中statusCode为success时数据返回成功
                    // upLoadImgUrl = res.body.imgurl;  //服务器返回的地址
                }else{
                    //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
                    // console.log(res.header.msgArray[0].desc);
                }
            }).catch( err=>{
            //请求失败
        })


    }


    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        {/*<Button   transparent onPress={() => this.props.navigation.goBack()}>*/}
                        {/*<Icon name="arrow-back"  style={{color:"#000"}}/>*/}
                        {/*</Button>*/}
                    </Left>
                    <Body>
                    <Title style={globalStyles.textAColor}>我的檔案</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>

                    <ListItem avatar style={{height: 86}} onPress={() =>  this.pickSingle(true, true)}>
                        <Left>
                            {/*<Thumbnail  source={{uri:   API.AVATAR+this.state.user.avatar }}   style={{height: 60}}/>*/}
                            {this.renderAsset(this.state.image)}
                        </Left>

                        <Body style={{borderColor: "#fff"}}>
                        <Text style={[globalStyles.textBColor, {marginBottom: 10}]}>
                            {this.state.user.username}
                        </Text>
                        <Text numberOfLines={1} style={globalStyles.textCColor}>
                            交友ID： {this.state.user.id}
                        </Text>
                        </Body>
                        <Right style={styles.rightS}>

                            <Icon name="arrow-forward"/>

                        </Right>
                    </ListItem>

                    <Separator style={{height: 10}}/>

                    <ListItem icon  onPress={() =>  this.props.navigation.navigate("Profile")}>
                        <Left>
                            <Thumbnail square small source={icon1} style={{width: 25, height: 25}}/>
                        </Left>
                        <Body>
                        <Text style={globalStyles.textBColor}>編輯資料</Text>
                        </Body>
                        <Right >

                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>

                    <ListItem icon
                              onPress={() => this.props.navigation.navigate("PhotoList")}

                    >
                        <Left>
                            <Thumbnail square small source={icon1} style={{width: 25, height: 25}}/>
                        </Left>
                        <Body style={{borderColor: "#fff"}}>
                        <Text style={globalStyles.textBColor}>我的相冊</Text>
                        </Body>
                        <Right style={styles.rightS}>

                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <Separator style={{height: 10}}/>


                    <ListItem icon style={globalStyles.listItemH}>
                        <Left>
                            <Thumbnail square small source={icon2} style={{width: 25, height: 25}}/>
                        </Left>
                        <Body style={{borderColor: "#fff"}}>
                        <Text style={globalStyles.textBColor}>配對狀態</Text>
                        </Body>
                        <Right style={styles.rightS}>

                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <Separator style={globalStyles.separatorStyle}/>

                    <ListItem icon style={globalStyles.listItemH}>
                        <Left>
                            <Thumbnail square small source={icon3} style={{width: 25, height: 25}}/>
                        </Left>
                        <Body style={{borderColor: "#fff"}}>
                        <Text style={globalStyles.textBColor}>配對歷史</Text>
                        </Body>
                        <Right style={styles.rightS}>

                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <Separator style={globalStyles.separatorStyle}/>

                    <ListItem icon style={globalStyles.listItemH}>
                        <Left>
                            <Thumbnail square small source={icon4} style={{width: 25, height: 25}}/>
                        </Left>
                        <Body style={{borderColor: "#fff"}}>
                        <Text style={globalStyles.textBColor}>查看MM資料</Text>
                        </Body>
                        <Right style={styles.rightS}>

                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <Separator style={globalStyles.separatorStyle}/>

                    <ListItem icon button style={globalStyles.listItemH}
                              onPress={() => this.props.navigation.navigate("Setting")}>
                        <Left>
                            <Thumbnail square source={icon5} style={{width: 25, height: 25}}/>
                        </Left>
                        <Body style={{borderColor: "#fff"}}>
                        <Text style={globalStyles.textBColor}>設置</Text>
                        </Body>
                        <Right style={styles.rightS}>

                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <Separator style={globalStyles.separatorStyle}/>


                </Content>
            </Container>
        );
    }
}

