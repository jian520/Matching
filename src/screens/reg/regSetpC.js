import React, {Component} from "react";
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
    Form, Separator, Thumbnail, View, Text, Segment, ListItem, Spinner,
} from "native-base";

import gStyles from "../../common/globalStyles"
import common from "../../common/common"
import {Grid, Row, Col} from "react-native-easy-grid";
import Picker from 'react-native-picker';
import area from '../../common/area.json';
import service from "../../common/service";

const cover = require("../../../assets/login-icon.png");
import User from '../../model/User'

import UserParams from '../../model/UserParams'
import {NavigationActions} from "react-navigation";
import {marrydatas, education} from '../../common/datas.js';


var userParams = Object.create(UserParams);
export default class RegSetpC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            sex:'',
            birthday: '',
            marriage: '',
            education: '',
            height: '',
            area: '',
        };
    }


    showSexPicker() {

        Picker.init({
            pickerData: ['男', '女'],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇性別",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    sex: pickedValue[0]
                });
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();

    }




    showBirthdayPicker() {

        let date = [];
        for (let i = 1977; i < 2018; i++) {
            let month = [];
            for (let j = 1; j < 13; j++) {
                let day = [];
                if (j === 2) {
                    for (let k = 1; k < 29; k++) {
                        day.push(k + '日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if (i % 4 === 0) {
                        day.push(29 + '日');
                    }
                }
                else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
                    for (let k = 1; k < 32; k++) {
                        day.push(k + '日');
                    }
                }
                else {
                    for (let k = 1; k < 31; k++) {
                        day.push(k + '日');
                    }
                }
                let _month = {};
                _month[j + '月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i + '年'] = month;
            date.push(_date);
        }


        Picker.init({
            pickerData: date,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇出生日期",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);

                this.setState({
                    birthday: pickedValue[0] + pickedValue[1] + pickedValue[2],
                });

                userParams.ageyear = parseInt(pickedValue[0])
                userParams.agemonth = parseInt(pickedValue[1])
                userParams.ageday = parseInt(pickedValue[2])


            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    showMarriagePicker() {

        Picker.init({
            pickerData: marrydatas,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇婚姻狀況",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: (pickedValue, pickedIndex) => {
                this.setState({
                    marriage: pickedValue[0]
                });
                userParams.marrystatus = parseInt(pickedIndex) + 1


            },
            onPickerCancel: pickedValue => {
                //console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                //console.log('area', pickedValue);
            }
        });
        Picker.show();

    }


    showEducationPicker() {
        Picker.init({
            pickerData: education,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇學歷",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                this.setState({
                    education: pickedValue[0]
                });

                userParams.education = parseInt(pickedIndex) + 1

            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                // console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();
    }


    showHeightPicker() {

        let date = [];
        for (let i = 130; i <= 200; i++) {
            date.push(i);
        }
        Picker.init({
            pickerData: date,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇身高",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                this.setState({
                    height: pickedValue[0] + 'CM'
                });
                userParams.height = parseInt(pickedValue[0])

            },
            onPickerCancel: pickedValue => {
                // console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();
    }


    showAreaPicker() {
        let data = [];
        let len = area.length;
        for (let i = 0; i < len; i++) {
            let city = [];
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        Picker.init({
            pickerData: data,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇所在地區",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    area: pickedValue[0] + ' ' + pickedValue[1]
                });
                userParams.city = pickedValue[1]

            },
            onPickerCancel: pickedValue => {
                // console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();

    }


    doReg() {

        // Keyboard.dismiss()
        // console.log('doReg')
        if (this.state.loading) return;
        //

        if (this.state.birthday.length == 0) {
            common.toast("請選擇生日")
            return;
        }
        if (this.state.marriage.length == 0) {
            common.toast("請選擇 婚姻狀況")
            return;
        }
        if (this.state.education.length == 0) {
            common.toast("請選擇學歷")
            return;
        }

        if (this.state.height == 0) {
            common.toast("請選擇身高")
            return;
        }

        if (this.state.area.length == 0) {
            common.toast("請選擇所在地區")
            return
        }

        this.setState({
            loading: true,

        });

        let p = this.props.navigation.state.params.p
        console.log(p[0])

        var user = p[0];

        userParams.gender = p[1]

        console.log(userParams)


        service.regSystem(user, userParams)
            .then((wrapData) => {
                console.log('wrapData  ')

                console.log(wrapData)


                this.setState({
                    loading: false,

                });

                if (wrapData.flag == 'Success') {

                    common.toast(wrapData.msg)

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


    start() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'tabRoot'}),

            ]
        })
        this.props.navigation.dispatch(resetAction)

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
                    <Title style={gStyles.textAColor}>註冊</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>

                    <ListItem itemDivider>
                        <Text style={gStyles.textBColor}>基本資料</Text>
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
                        <Text style={gStyles.textBColor}>郵箱</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>333 </Text>

                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Body>
                        <Text style={gStyles.textBColor}>姓名</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}></Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>
                    <ListItem icon
                              button
                              onPress={() => this.showSexPicker()}
                    >
                        <Body>
                        <Text style={gStyles.textBColor}>性别</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.sex}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>

                    <ListItem icon button
                              onPress={() => this.showBirthdayPicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>出生年月日</Text>
                        </Body>

                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.birthday}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>

                    <ListItem icon button
                              onPress={() => this.showMarriagePicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>婚姻狀況</Text>
                        </Body>

                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.marriage}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>

                    </ListItem>


                    <ListItem icon button
                              onPress={() => this.showEducationPicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>學歷</Text>
                        </Body>

                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.education}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>

                    </ListItem>


                    <ListItem icon button
                              onPress={() => this.showHeightPicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>身高</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.height}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>


                    {/*<ListItem icon button*/}
                              {/*onPress={() => this.showAreaPicker()}>*/}
                        {/*<Body>*/}
                        {/*<Text style={gStyles.textBColor}>所在地區</Text>*/}
                        {/*</Body>*/}
                        {/*<Right>*/}
                            {/*<Text style={gStyles.textCColor}>{this.state.area}</Text>*/}
                            {/*<Icon active name="arrow-forward" style={gStyles.textCColor}/>*/}
                        {/*</Right>*/}
                    {/*</ListItem>*/}


                    <View style={{flex: 1, alignItems: "center", flexWrap: "wrap", marginLeft: 40, marginRight: 40}}>


                        <Separator style={{backgroundColor: "#FFF", height: 25}}/>

                        <Grid style={{width: 190}}>
                            <Col>
                                <View style={{borderRadius: 5 / 2, width: 60, height: 5, backgroundColor: "#ECECEC"}}/>
                            </Col>
                            <Col>
                                <View style={{borderRadius: 5 / 2, width: 60, height: 5, backgroundColor: "#ECECEC"}}/>

                            </Col>
                            <Col>
                                <View style={{
                                    borderRadius: 5 / 2,
                                    width: 60,
                                    height: 5,
                                    backgroundColor: common.colorA
                                }}/>
                            </Col>
                        </Grid>

                        <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                        <Spinner
                            style={{position: "absolute", alignSelf: 'center'}}
                            animating={this.state.loading} size="large" color="red"/>


                        <Grid style={{width: 100}}>
                            <Col>
                                <Button block rounded style={{backgroundColor: common.colorA, height: 35, width: 90}}
                                        onPress={() => this.doReg()}>
                                    <Text>確定</Text>
                                </Button>
                            </Col>
                        </Grid>


                    </View>


                </Content>
            </Container>
        );
    }
}

