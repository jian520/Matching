import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Text,
    Left,
    Right,
    Body,
    List,
    ListItem, View,ActionSheet
} from "native-base";
import TimerMixin from 'react-native-timer-mixin';
import styles from "./styles";
import gStyles from "../../common/globalStyles";
import common from "../../common/common";
import {NavigationActions} from "react-navigation";
import {StartRoot} from "../../App";
import service from "../../common/service"

const datas = [
    {
        route: "NHBasicList",
        text: "編輯資料"
    },
    {
        route: "NHListDivider",
        text: "條款及細則"
    },
    {
        route: "NHListHeader",
        text: "分享給朋友"
    },
    {
        route: "NHListIcon",
        text: "推廣通知"
    },
    {
        route: "NHListAvatar",
        text: "廣告查詢"
    },
    {
        route: "NHListThumbnail",
        text: "常見問題及聯酪我們"
    },
    {
        route: "NHListSeparator",
        text: "私隠條款"
    }
];


var BUTTONS = [
    { text: "確定", icon: "american-football", iconColor: "#2c8ef4" },

    { text: "取消", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 1;
export default class Setting extends Component {

    logout() {
        service.logout()

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'StartRoot'}),

            ]
        })
        this.props.navigation.dispatch(resetAction)


    }
    /**
     * 卸载 组建
     */
    componentDidUnMount() {
        // this.timer && clearTimeout(this.timer);


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
                    <Title style={gStyles.textAColor}>設置</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Left>
                                    <Text>
                                        {data.text}
                                    </Text>

                                </Left>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>}
                    />
                    <View style={{flex: 1, alignItems: "center", flexWrap: "wrap", marginLeft:40, marginRight:40, marginTop:40}}>
                        <Button block rounded style={{backgroundColor: common.colorA}}
                                onPress={() =>
                            ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "確定退出登錄？"
                                },
                                buttonIndex => {
                                   if (buttonIndex == 0) {


                                       //延迟多久执行(只执行一次)
                                       // this.timer = setTimeout(()=> {
                                           this.logout()
                                       // }, 1000);



                                   }
                                }
                            )}




                        >
                            <Text>退出登錄</Text>
                        </Button>
                    </View>


                </Content>
            </Container>
        );
    }
}
