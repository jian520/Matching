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
    Form, Separator, Thumbnail, View, Text, Segment
} from "native-base";
import styles from "../login/styles";
import gStyles from "../../common/globalStyles"
import common from "../../common/common"
import {Grid, Row, Col} from "react-native-easy-grid";

const cover = require("../../../assets/login-icon.png");

export default class RegSetpA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roleType: 0,

        };
    }


    next() {


        this.props.navigation.navigate("RegSetpB",   {p:this.state.roleType } )

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

                <Content padder>
                    <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                    <View style={{flex: 1, alignItems: "center", flexWrap: "wrap", marginLeft: 40, marginRight: 40}}>
                        <Thumbnail large source={cover}/>
                        <Separator style={{backgroundColor: "#FFF", height: 30}}/>

                        {/*<Text style={gStyles.textBColor}>請選擇</Text>*/}
                        <Separator style={{backgroundColor: "#FFF", height: 30}}/>
                        <Segment style={{
                            backgroundColor: "transparent",
                            borderColor: common.colorA,

                        }}>

                            <Button rounded style={{height: 45, marginRight: 10}}
                                    active={this.state.roleType === 0 ? true : false}
                                    onPress={() => this.setState({roleType: 0})}
                            >
                                <Text>尋找伴侶</Text>
                            </Button>

                            <Button rounded style={{height: 45, marginLeft: 10}}
                                    active={this.state.roleType === 1 ? true : false}
                                    onPress={() => this.setState({roleType: 1})}
                            >
                                <Text>成為配對大師</Text>
                            </Button>
                        </Segment>


                        <Separator style={{backgroundColor: "#FFF", height: 20}}/>
                        <Grid  style={{width:190,}} >
                            <Col >
                                <View style={{borderRadius:5 / 2, width:60, height:5, backgroundColor:common.colorA}} />
                            </Col>
                            <Col>
                                <View style={{ borderRadius:5 / 2, width:60, height:5,backgroundColor: "#ECECEC"}} />
                            </Col>
                            <Col>
                                <View style={{ borderRadius:5 / 2, width:60, height:5,backgroundColor: "#ECECEC"}} />

                            </Col>

                        </Grid>

                        <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                        <Grid  style={{width:100 }} >
                            <Col>
                                <Button block rounded style={{backgroundColor: common.colorA, height: 35, width: 90}} onPress={() => this.next()} >
                                    <Text>下一步</Text>
                                </Button>
                            </Col>
                        </Grid>



                    </View>
                </Content>
            </Container>
        );
    }
}

