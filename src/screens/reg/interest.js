import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    CheckBox,
    Text,
    Left,
    Right,
    Body
} from "native-base";
import styles from "../login/styles";
import gStyles from "../../common/globalStyles";
import common from "../../common/common"

const datas = [
    {
        index: 1,
        text: "運動"
    },
    {
        index: 2,
        text: "看電影"
    },
    {
        index: 3,
        text: "看電視"
    },
    {
        index: 4,
        text: "閱讀"
    },
    {
        index: 5,
        text: "購物"
    },
    {
        index: 6,
        text: "單車"
    },
    {
        index: 7,
        text: "球類運動"
    },
    {
        index: 8,
        text: "行山"
    },
    {
        index: 9,
        text: "跳舞"
    },
    {
        index: 10,
        text: "與朋友共聚"
    },
    {
        index: 11,
        text: "政治"
    },
    {
        index: 12,
        text: "經濟"
    },
    {
        index: 13,
        text: "時事"
    },
    {
        index: 14,
        text: "電腦"
    },
    {
        index: 15,
        text: "上網"
    },
    {
        index: 16,
        text: "打機"
    },
    {
        index: 17,
        text: "模型"
    },
    {
        index: 18,
        text: "集郵"
    },
    {
        index: 19,
        text: "攝影"
    },
    {
        index: 20,
        text: "畫畫"
    },
    {
        index: 21,
        text: "烹飪"
    },
    {
        index: 22,
        text: "義工服務"
    },
    {
        index: 23,
        text: "聽音樂"
    },
    {
        index: 24,
        text: "陽光與海灘"
    },
    {
        index: 25,
        text: "寫作"
    },
    {
        index: 26,
        text: "品酒"
    },
    {
        index: 27,
        text: "天文地埋"
    },
    {
        index: 28,
        text: "駕駛車輛"
    },
    {
        index: 29,
        text: "卡拉OK"
    },
    {
        index: 30,
        text: "足球"
    }
];


export default class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox0: false,
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,
            checkbox8: false,
            checkbox9: false,
            checkbox10: false,
            checkbox11: false,
            checkbox12: false,
            checkbox13: false,
            checkbox14: false,
            checkbox15: false,
            checkbox16: false,
            checkbox17: false,
            checkbox18: false,
            checkbox19: false,
            checkbox20: false,
            checkbox21: false,
            checkbox22: false,
            checkbox23: false,
            checkbox24: false,
            checkbox25: false,
            checkbox26: false,
            checkbox27: false,
            checkbox28: false,
            checkbox29: false,

        };
    }

    toggleSwitch(index) {
        if (index == 0) {

            this.setState({
                checkbox0: !this.state.checkbox0
            });
        } else if (index == 1) {
            this.setState({
                checkbox1: !this.state.checkbox1
            });
        } else if (index == 2) {
            this.setState({
                checkbox2: !this.state.checkbox2
            });
        } else if (index == 3) {
            this.setState({
                checkbox3: !this.state.checkbox3
            });
        } else if (index == 4) {
            this.setState({
                checkbox4: !this.state.checkbox4
            });
        } else if (index == 5) {
            this.setState({
                checkbox5: !this.state.checkbox5
            });
        } else if (index == 6) {
            this.setState({
                checkbox6: !this.state.checkbox6
            });
        } else if (index == 7) {
            this.setState({
                checkbox7: !this.state.checkbox7
            });
        } else if (index == 8) {
            this.setState({
                checkbox8: !this.state.checkbox8
            });
        } else if (index == 9) {
            this.setState({
                checkbox9: !this.state.checkbox9
            });
        } else if (index == 10) {
            this.setState({
                checkbox10: !this.state.checkbox10
            });
        } else if (index == 11) {
            this.setState({
                checkbox11: !this.state.checkbox11
            });
        } else if (index == 12) {
            this.setState({
                checkbox12: !this.state.checkbox12
            });
        } else if (index == 13) {
            this.setState({
                checkbox13: !this.state.checkbox13
            });
        } else if (index == 14) {
            this.setState({
                checkbox14: !this.state.checkbox14
            });
        } else if (index == 15) {
            this.setState({
                checkbox15: !this.state.checkbox15
            });
        } else if (index == 16) {
            this.setState({
                checkbox16: !this.state.checkbox16
            });
        } else if (index == 17) {
            this.setState({
                checkbox17: !this.state.checkbox17
            });
        } else if (index == 18) {
            this.setState({
                checkbox18: !this.state.checkbox18
            });
        } else if (index == 19) {
            this.setState({
                checkbox19: !this.state.checkbox19
            });
        } else if (index == 20) {
            this.setState({
                checkbox20: !this.state.checkbox20
            });
        } else if (index == 21) {
            this.setState({
                checkbox21: !this.state.checkbox21
            });
        } else if (index == 22) {
            this.setState({
                checkbox22: !this.state.checkbox22
            });
        } else if (index == 23) {
            this.setState({
                checkbox23: !this.state.checkbox23
            });
        } else if (index == 24) {
            this.setState({
                checkbox24: !this.state.checkbox24
            });
        } else if (index == 25) {
            this.setState({
                checkbox25: !this.state.checkbox25
            });
        } else if (index == 26) {
            this.setState({
                checkbox26: !this.state.checkbox26
            });
        } else if (index == 27) {
            this.setState({
                checkbox27: !this.state.checkbox27
            });
        } else if (index == 28) {
            this.setState({
                checkbox28: !this.state.checkbox28
            });
        } else if (index == 29) {
            this.setState({
                checkbox29: !this.state.checkbox29
            });
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" style={{color: "#0D0D0D"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>選擇興趣</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                    <ListItem button onPress={() => this.toggleSwitch(0)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox0}
                                  onPress={() => this.toggleSwitch(0)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[0].text}</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.toggleSwitch(1)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox1}
                                  onPress={() => this.toggleSwitch(1)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[1].text}</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.toggleSwitch(2)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox2}
                                  onPress={() => this.toggleSwitch(2)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[2].text}</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.toggleSwitch(3)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox3}
                                  onPress={() => this.toggleSwitch(3)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[3].text}</Text>
                        </Body>
                    </ListItem>


                    <ListItem button onPress={() => this.toggleSwitch(4)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox4}
                                  onPress={() => this.toggleSwitch(4)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[4].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(5)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox5}
                                  onPress={() => this.toggleSwitch(5)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[5].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(6)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox6}
                                  onPress={() => this.toggleSwitch(6)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[6].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(7)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox7}
                                  onPress={() => this.toggleSwitch(7)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[7].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(8)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox8}
                                  onPress={() => this.toggleSwitch(8)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[8].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(9)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox9}
                                  onPress={() => this.toggleSwitch(9)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[9].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(10)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox10}
                                  onPress={() => this.toggleSwitch(10)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[10].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(11)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox11}
                                  onPress={() => this.toggleSwitch(11)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[11].text}</Text>
                        </Body>
                    </ListItem>


                    <ListItem button onPress={() => this.toggleSwitch(12)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox12}
                                  onPress={() => this.toggleSwitch(12)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[12].text}</Text>
                        </Body>
                    </ListItem>



                    <ListItem button onPress={() => this.toggleSwitch(13)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox13}
                                  onPress={() => this.toggleSwitch(13)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[13].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(14)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox14}
                                  onPress={() => this.toggleSwitch(14)}
                        />
                        <Body>
                            <Text style={gStyles.textBColor}>{datas[14].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(15)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox15}
                                  onPress={() => this.toggleSwitch(15)}
                        />
                        <Body>
                            <Text style={gStyles.textBColor}>{datas[15].text}</Text>
                        </Body>
                    </ListItem>


                    <ListItem button onPress={() => this.toggleSwitch(16)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox16}
                                  onPress={() => this.toggleSwitch(16)}
                        />
                        <Body>
                            <Text style={gStyles.textBColor}>{datas[16].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(17)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox17}
                                  onPress={() => this.toggleSwitch(17)}
                        />
                        <Body>
                            <Text style={gStyles.textBColor}>{datas[17].text}</Text>
                        </Body>
                    </ListItem>


                    <ListItem button onPress={() => this.toggleSwitch(18)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox18}
                                  onPress={() => this.toggleSwitch(18)}
                        />
                        <Body>
                            <Text style={gStyles.textBColor}>{datas[18].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(19)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox19}
                                  onPress={() => this.toggleSwitch(19)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[19].text}</Text>
                        </Body>
                    </ListItem>


                    <ListItem button onPress={() => this.toggleSwitch(20)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox20}
                                  onPress={() => this.toggleSwitch(20)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[20].text}</Text>
                        </Body>
                    </ListItem>



                    <ListItem button onPress={() => this.toggleSwitch(21)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox21}
                                  onPress={() => this.toggleSwitch(21)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[21].text}</Text>
                        </Body>
                    </ListItem>


                    <ListItem button onPress={() => this.toggleSwitch(22)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox22}
                                  onPress={() => this.toggleSwitch(22)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[22].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(23)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox23}
                                  onPress={() => this.toggleSwitch(23)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[23].text}</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.toggleSwitch(24)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox24}
                                  onPress={() => this.toggleSwitch(24)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[24].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(25)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox25}
                                  onPress={() => this.toggleSwitch(25)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[25].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(26)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox26}
                                  onPress={() => this.toggleSwitch(26)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[26].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(27)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox27}
                                  onPress={() => this.toggleSwitch(27)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[27].text}</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.toggleSwitch(28)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox28}
                                  onPress={() => this.toggleSwitch(28)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[28].text}</Text>
                        </Body>
                    </ListItem>



                    <ListItem button onPress={() => this.toggleSwitch(29)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox29}
                                  onPress={() => this.toggleSwitch(29)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[29].text}</Text>
                        </Body>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

