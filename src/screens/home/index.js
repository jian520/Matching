import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text ,Separator} from "native-base";

import styles from "./styles";
import common from "../../common/common";

const launchscreenBg = require("../../../assets/startpage-bg.png");
const launchscreenLogo = require("../../../assets/startpage-logo.png");

class Home extends Component {
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

                    <Button block rounded style={{backgroundColor: common.colorA,marginBottom: 20}}>
                        <Text>登錄</Text>
                    </Button>

                    <Button block rounded style={{backgroundColor: common.colorE}}>
                        <Text style={{color: common.colorA}}>注册</Text>
                    </Button>
                </View>
            </ImageBackground>
        </Container>
    );
  }
}

export default Home;
