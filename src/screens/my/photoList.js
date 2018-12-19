import React, {Component} from "react";
import {
    Platform, View, NativeModules, Alert, StyleSheet,

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
    Thumbnail, Spinner,ActionSheet
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
import Album from "../../model/Album";

const deleteIcon = require("../../../assets/delete.png");
// var ImagePicker = NativeModules.ImageCropPicker;

import ImagePicker  from 'react-native-image-picker';
import {Grid, Row, Col} from "react-native-easy-grid";

var BUTTONS = [
    { text: "確定", icon: "american-football", iconColor: "#2c8ef4" },

    { text: "取消", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 1;

export default class PhotoList extends Component {
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
                        this.loadData();
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

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                alert(source)
                this.upload(source)
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                // this.setState({
                //     avatarSource: source
                // });
            }
        });
    }




    pickSingleWithCamera() {
        ImagePicker.openCamera({

            cropping: false,
            width: 500,
            height: 500,
            includeExif: true,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height},
                images: null
            });
            let source = { uri: image.path };
            this.upload(  source)
        }).catch(e => alert(e));
    }


    pickSingle(cropit, circular = false) {
        ImagePicker.openPicker({
            // multiple: true,
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
        return <Thumbnail source={{uri: API.ImageUrl + this.state.user.avatar}} style={{height: 60}}/>


    }

    upload(path) {
        console.log('path image', path);
        let params = {
            userid: this.state.user.id,   //用户id
            path: path   //本地文件地址
        }
        service.uploadImage(API.PhotoAlbumUpload, params)
            .then(res => {

                common.toast(res.msg)
                if (res.flag == "Success") {
                    this.loadData()
                }


            }).catch(err => {
            //请求失败
        })


    }

    loadData() {

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

    press(data, url) {

        var data = this.state.dataSource;

        var list = [];
        var index = 0
        for (var i in data) {

            let url2 = API.ImageUrl + data[i].uploadimage

            list.push({url: url2});

            if (url == url2) {
                index = i
            }
        }

        console.log(url)

        this.props.navigation.navigate("PhotoViewer", {images: list, pageNum: index})
    }

    delete(id) {
        console.log(id)

        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "確定刪除嗎？"
            },
            buttonIndex => {
                if (buttonIndex == 0) {

                    service.photoAlbumDel(id)
                        .then((wrapData) => {
                            console.log('wrapData  ')
                            console.log(wrapData)

                            this.setState({
                                loading: false,
                            });

                            if (wrapData.flag == "Success") {
                                common.toast(wrapData.msg)
                                // DeviceEventEmitter.emit('DidLogin', true);
                                this.loadData()

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
            }
        )



    }



    render() {


        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#000"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={globalStyles.textAColor}>我的相冊</Title>
                    </Body>
                    <Right>

                        <Button transparent onPress={() =>
                            this.selectPhotoTapped()

                           }    >
                            <Icon active name="camera" style={{color: "#aaa"}}/>
                        </Button>
                    </Right>
                </Header>

                <Content>
                    {/*<List*/}
                    {/*dataArray={this.state.dataSource}*/}
                    {/*renderRow={data =>*/}
                    {/*<ListItem thumbnail style={{height: 86}}>*/}
                    {/*<Left>*/}
                    {/*<Thumbnail large square source={{uri: API.AVATAR + data.uploadimage}}/>*/}

                    {/*</Left>*/}

                    {/*<Body style={{borderColor: "#fff"}}>*/}

                    {/*</Body>*/}
                    {/*<Right style={styles.rightS}>*/}


                    {/*<Text numberOfLines={1} style={globalStyles.textCColor}>*/}
                    {/*删除*/}
                    {/*</Text>*/}

                    {/*</Right>*/}

                    {/*</ListItem>}*/}
                    {/*/>*/}

                    {this.loadView()}


                </Content>
            </Container>
        );
    }


    loadView() {
        if (this.state.dataSource.length == 0) {
            return (
                <View style={{flex: 1, marginTop: common.deviceHeight / 2, alignSelf: 'center'}}>
                    <Spinner

                        animating={this.state.loading} size="large" color="red"/>
                </View>

            )
        } else {
            // return (
            //
            //     <List goods={this.state.dataSource}></List>
            // )


            var data = this.state.dataSource;

            console.log("sadfadf")
            console.log(data[0])
            var list = [];
            for (var i in data) {
                if (i % 2 === 0) {
                    var album1 = Object.create(Album);
                    var album2 = Object.create(Album);
                    Object.assign(album1, data[i])
                    Object.assign(album2, data[parseInt(i) + 1])


                    var row = (
                        <View key={i} style={styles.row}>
                            <Item url={API.ImageUrl + album1.uploadimage}
                                  press={this.press.bind(this, album1, API.ImageUrl + album1.uploadimage)}
                                  delete={this.delete.bind(this, album1.id)}

                            ></Item>
                            <Item
                                url={API.ImageUrl + album2.uploadimage}
                                press={this.press.bind(this, album2, API.ImageUrl + album2.uploadimage)}
                                delete={this.delete.bind(this, album2.id)}

                            ></Item>
                        </View>

                    );
                    list.push(row);
                }
            }

            return (
                <ScrollView style={{marginTop: 10, marginRight:10}}>
                    {list}
                </ScrollView>
            );


        }
    }




}


//单元格组件
class Item extends Component {
    render() {
console.log(this.props.url )
        if (this.props.url == API.ImageUrl) {
            return (
                <View style={{  flex:1,
                    marginLeft:10,

                    marginRight:10,
                    height:165,
                    backgroundColor: '#fff'}}>


                </View>
            );
        }

        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.props.press}>
                    <ImageBackground style={styles.img} // resizeMode="contain"
                                     source={{uri: this.props.url}}>


                        <View style={{alignSelf: 'flex-end', flexDirection: 'column' }}>
                            <View style={{flex: 1}}/>
                            {/*<Button   onPress={this.props.delete}  >*/}
                            <TouchableOpacity onPress={this.props.delete}>
                                <Thumbnail square small source={deleteIcon} />
                            </TouchableOpacity>
                            {/*</Button>*/}
                        </View>

                    </ImageBackground>
                </TouchableOpacity>

            </View>
        );
    }
}


/**
 //列表组件
 class List extends Component {
    render() {
        var data = this.props.goods;

        console.log("sadfadf")
        console.log(data[0])
        var list = [];
        for (var i in data) {
            if (i % 2 === 0) {
                var album1 = Object.create(Album);
                var album2 = Object.create(Album);
                Object.assign(album1, data[i])
                Object.assign(album2, data[parseInt(i) + 1])
                let url1 = API.ImageUrl + album1.uploadimage
                let url2 = API.ImageUrl + album2.uploadimage

                var row = (
                    <View key={i} style={styles.row}>
                        <Item url={url1}
                              press={this.press.bind(this, album1)}></Item>
                        <Item
                            url={url2}
                            press={this.press.bind(this, album2)}></Item>
                    </View>);
                list.push(row);
            }
        }

        return (
            <ScrollView style={{marginTop: 10}}>
                {list}
            </ScrollView>
        );
    }

    press(data) {
        alert("您选择了：" + data.uploadimage);


        // this.props.navigation.navigate("PhotoViewer")
    }

    pressDel(data) {
        alert("您del：" + data.id);


        // this.props.navigation.navigate("PhotoViewer")
    }
}
 */

//主应用
// export default class Main extends Component {
//     render() {
//         return (
//             <View style={[styles.flex,{marginTop:20}]}>
//                 <List goods={Goods}></List>
//             </View>
//         );
//     }
// }
