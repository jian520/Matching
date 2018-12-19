
import {Platform, Dimensions, PixelRatio} from "react-native";

import {
    Toast,
} from "native-base";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function toast(msg) {
    Toast.show({
        text: msg,
    })

}




export default {
    deviceHeight: deviceHeight,
    deviceWidth: deviceWidth,
    colorA: "#e6464e",
    colorB: "#0f0f0f",
    colorC: "#999999",
    colorD: "#F4F4F4",
    colorE: "#FBEFEF",

    colorF: "#d7d7d7",

    validateEmail,
    toast,

};


