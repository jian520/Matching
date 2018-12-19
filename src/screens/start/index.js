import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text ,Separator} from "native-base";

import styles from "./styles";
import common from "../../common/common";

const launchscreenBg = require("../../../assets/startpage-bg.png");
const launchscreenLogo = require("../../../assets/startpage-logo.png");

export default class Start extends Component {
  render() {
    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
                <View style={styles.logoContainer}>
                    <ImageBackground source={launchscreenLogo} style={styles.logo} />
                </View>
                <View
                    style={{
                        alignItems: "center",
                        marginBottom: 50,
                        backgroundColor: "transparent"
                    }}
                >


                </View>
                <View style={{marginLeft:60, marginBottom: 80,marginRight:60, }}>

                    <Button block rounded style={{backgroundColor: common.colorA,marginBottom: 20}} onPress={() => this.props.navigation.navigate('login')} >
                        <Text>登錄</Text>
                    </Button>

                    <Button block rounded style={{backgroundColor: common.colorE,marginBottom: 20}} onPress={() => this.props.navigation.navigate('RegSetpA')} >
                        {/*<Text style={{color: common.colorA}}>尋找伴侶</Text>*/}
                        <Text style={{color: common.colorA}}>註冊</Text>
                    </Button>

                    {/*<Button block rounded style={{backgroundColor: common.colorE,marginBottom: 20}} onPress={() => this.props.navigation.navigate('reg3')} >*/}
                        {/*<Text style={{color: common.colorA}}>成為配對大師</Text>*/}
                    {/*</Button>*/}


                </View>
            </ImageBackground>
        </Container>
    );
  }
}
