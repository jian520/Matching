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
    Form, Separator, Thumbnail, View, Text, Segment, ListItem,
} from "native-base";

import gStyles from "../../common/globalStyles"
import common from "../../common/common"
import {Grid, Row, Col} from "react-native-easy-grid";
import Picker from 'react-native-picker';
import service from "../../common/service";
import {Keyboard} from "react-native";


const cover = require("../../../assets/login-icon.png");

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            marriage: '',
            birthday: '',
            education: '',
            job: '',
            height: 0,
            weight: 0,
            interest: '',
        };
    }




    showMarriagePicker() {

        Picker.init({
            pickerData: ['未婚', '已婚', '離異', '喪偶'],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇婚姻狀況",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    marriage: pickedValue[0]
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
                    birthday: pickedValue[0] + pickedValue[1] + pickedValue[2]
                });

            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }


    showEducationPicker() {
        Picker.init({
            pickerData: ['博士', '博士后'],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇學歷",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                this.setState({
                    education: pickedValue[0]
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

    showJobPicker() {


        Picker.init({
            pickerData: ['在校學生'],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇身高",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                this.setState({
                    job: pickedValue[0]
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
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                this.setState({
                    height: pickedValue[0]
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

    showWeightPicker() {

        let date = [];
        for (let i = 30; i <= 150; i++) {

            date.push(i);
        }

        Picker.init({
            pickerData: date,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇體重",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                console.log('weight', pickedValue[0]);


                this.setState({
                    weight: pickedValue[0]
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

    showAgeRangePicker() {

        Picker.init({
            pickerData: ['20-30', '31-39', '40以上'],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇年齡範圍",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    marriage: pickedValue[0]
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

    showSalaryRangePicker() {

        Picker.init({
            pickerData: ['60000', '40000'],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇年齡範圍",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    marriage: pickedValue[0]
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
                        <Text style={gStyles.textBColor}>姓名</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>张建</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                        <Text style={gStyles.textBColor}>性别</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>男</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.showBirthdayPicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>出生日期</Text>
                        </Body>

                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.birthday}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                        <Text style={gStyles.textBColor}>年齡</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>22岁</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.showMarriagePicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>婚姻状况</Text>
                        </Body>

                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.marriage}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>

                    </ListItem>

                    <ListItem>
                        <Text style={gStyles.textBColor}>电邮</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={gStyles.textBColor}>电话</Text>
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
                              onPress={() => this.showJobPicker()}>
                        <Body>
                        <Text>職業</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.job}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>

                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.showHeightPicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>身高</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.height}CM</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.showWeightPicker()}>
                        <Body>
                        <Text style={gStyles.textBColor}>體重</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.weight}KG</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>


                    </ListItem>
                    <ListItem>
                        <Text>种族</Text>
                    </ListItem>
                    <ListItem>
                        <Text>宗教</Text>
                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.props.navigation.navigate("interest")}>
                        <Body>
                        <Text>興趣</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.interest}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.props.navigation.navigate("character")}>
                        <Body>
                        <Text>性格</Text>
                        </Body>
                        <Right>
                            <Text style={gStyles.textCColor}>{this.state.interest}</Text>
                            <Icon active name="arrow-forward" style={gStyles.textCColor}/>
                        </Right>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>交友条件</Text>
                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.showAgeRangePicker()}>

                        <Body>
                        <Text>年龄</Text>
                        </Body>

                        <Right>
                            <Text></Text>
                            <Icon active name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                        <Text>居住地</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                        <Text>身高</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                        <Text>学历</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button
                              onPress={() => this.showSalaryRangePicker()}>

                        <Body>
                            <Text>月收入</Text>
                        </Body>
                        <Right>

                            <Text> </Text>
                            <Icon active name="arrow-forward"/>

                        </Right>
                    </ListItem>


                    <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                    <View style={{flex: 1, alignItems: "center", flexWrap: "wrap", marginLeft: 40, marginRight: 40}}>

                        <Separator style={{backgroundColor: "#FFF", height: 35}}/>
                        <Grid style={{width: 135, height: 20}}>
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

                        <Separator style={{backgroundColor: "#FFF", height: 25}}/>

                        <Grid style={{width: 100}}>
                            <Col>
                                <Button block rounded style={{backgroundColor: common.colorA, height: 35, width: 90}}
                                        onPress={() => this.doReg()}>
                                    <Text>確定</Text>
                                </Button>
                            </Col>
                        </Grid>
                        <Separator style={{backgroundColor: "#FFF", height: 40}}/>


                    </View>


                </Content>
            </Container>
        );
    }
}

