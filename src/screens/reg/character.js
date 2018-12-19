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

import gStyles from "../../common/globalStyles";
import common from "../../common/common"

const datas = [
    {
        index: 1,
        text: "活潑開朗"
    },
    {
        index: 2,
        text: "懂得尊重人"
    },
    {
        index: 3,
        text: "有教養"
    },
    {
        index: 4,
        text: "愛冒險"
    },
    {
        index: 5,
        text: "溫柔親切"
    },
    {
        index: 6,
        text: "善於表達"
    },
    {
        index: 7,
        text: "親切友善"
    },
    {
        index: 8,
        text: "誠實"
    },
    {
        index: 9,
        text: "忠誠"
    },
    {
        index: 10,
        text: "愛說話"
    },
    {
        index: 11,
        text: "文雅嬌柔"
    },
    {
        index: 12,
        text: "實際"
    },
    {
        index: 13,
        text: "注重家庭"
    },
    {
        index: 14,
        text: "風趣幽默"
    },
    {
        index: 15,
        text: "愛玩耍"
    },
    {
        index: 16,
        text: "仁慈"
    },
    {
        index: 17,
        text: "勤奮"
    },
    {
        index: 18,
        text: "樂天"
    },
    {
        index: 19,
        text: "細心"
    },
    {
        index: 20,
        text: "良好的聆聽者"
    },
    {
        index: 21,
        text: "獨立"
    },
    {
        index: 22,
        text: "深情浪漫"
    },
    {
        index: 23,
        text: "有才智"
    },
    {
        index: 24,
        text: "自省的"
    },
    {
        index: 25,
        text: "有愛心及同情心"
    },
    {
        index: 26,
        text: "有領導能力"
    },
    {
        index: 27,
        text: "有急智"
    },
    {
        index: 28,
        text: "有組織力"
    },
    {
        index: 29,
        text: "熱情的"
    },
    {
        index: 30,
        text: "成熟穩重的"
    },
    {
        index: 31,
        text: "正面的"
    },
    {
        index: 32,
        text: "屬靈的"
    },
    {
        index: 33,
        text: "虔誠的"
    },
    {
        index: 34,
        text: "可信賴"
    },
    {
        index: 35,
        text: "堅強的"
    },
    {
        index: 36,
        text: "時髦的"
    },
    {
        index: 37,
        text: "有自發性"
    },
    {
        index: 38,
        text: "口甜舌滑"
    }
];


export default class Character extends Component {
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
            checkbox30: false,
            checkbox31: false,
            checkbox32: false,
            checkbox33: false,
            checkbox34: false,
            checkbox35: false,
            checkbox36: false,
            checkbox37: false,
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
        }else if (index == 30) {
            this.setState({
                checkbox30: !this.state.checkbox30
            });
        }else if (index == 31) {
            this.setState({
                checkbox31: !this.state.checkbox31
            });
        }else if (index == 32) {
            this.setState({
                checkbox32: !this.state.checkbox32
            });
        }else if (index == 33) {
            this.setState({
                checkbox33: !this.state.checkbox33
            });
        }else if (index == 34) {
            this.setState({
                checkbox34: !this.state.checkbox34
            });
        }else if (index == 35) {
            this.setState({
                checkbox35: !this.state.checkbox35
            });
        }else if (index == 36) {
            this.setState({
                checkbox36: !this.state.checkbox36
            });
        }else if (index == 37) {
            this.setState({
                checkbox37: !this.state.checkbox37
            });
        }
    }

    render() {
        return (
            <Container style={gStyles.container}>
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
                    <Title style={gStyles.textAColor}>選擇性格</Title>
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


                    <ListItem button onPress={() => this.toggleSwitch(30)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox30}
                                  onPress={() => this.toggleSwitch(30)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[30].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(31)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox31}
                                  onPress={() => this.toggleSwitch(31)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[31].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(32)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox32}
                                  onPress={() => this.toggleSwitch(32)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[32].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(33)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox33}
                                  onPress={() => this.toggleSwitch(33)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[33].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(34)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox34}
                                  onPress={() => this.toggleSwitch(34)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[34].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(35)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox35}
                                  onPress={() => this.toggleSwitch(35)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[35].text}</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.toggleSwitch(36)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox36}
                                  onPress={() => this.toggleSwitch(36)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[36].text}</Text>
                        </Body>
                    </ListItem>

                    <ListItem button onPress={() => this.toggleSwitch(37)}>
                        <CheckBox color={common.colorA}
                                  checked={this.state.checkbox37}
                                  onPress={() => this.toggleSwitch(37)}
                        />
                        <Body>
                        <Text style={gStyles.textBColor}>{datas[37].text}</Text>
                        </Body>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

