/**
 * Created by jianzhang on 2017/6/8.
 */
import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import common from '../../common/common'
const img1 = require("../../../assets/swiper-1.png");
const img2 = require("../../../assets/swiper-2.png");
const img3 = require("../../../assets/swiper-3.png");
const img4 = require("../../../assets/swiper-4.png");



export default class SwiperImage extends Component {

    constructor(props) {
        super(props);
        this.state = {


        };


    }
    render() {
        return (
            <View>

                <Swiper style={styles.wrapper} height={200}
                        autoplay
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>}
                        activeDot={<View style={{
                            backgroundColor: '#fff',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>}
                        paginationStyle={{
                            bottom: 10
                        }} loop>
                    <View style={styles.slide}>
                        <TouchableOpacity onPress={ (e) => {
                            this.pushToWB()
                        }   }>
                            <Image resizeMode='stretch' style={styles.image}

                                   source={img1}

                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide}>
                        <TouchableOpacity onPress={ (e) => {
                            this.pushToWB()
                        }   }>
                            <Image resizeMode='stretch' style={styles.image}  source={img2}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide}>
                        <TouchableOpacity onPress={ (e) => {
                            this.pushToWB()
                        }   }>
                            <Image resizeMode='stretch' style={styles.image}   source={img3}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide}>
                        <TouchableOpacity onPress={ (e) => {
                            this.pushToWB()
                        }   }>
                            <Image resizeMode='stretch' style={styles.image}   source={img4}/>
                        </TouchableOpacity>
                    </View>
                </Swiper>
            </View>
        )
    }

    pushToWB() {
        this.props.navigation.navigate("PhotoAlbum")
    }
}









const styles = {
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: common.deviceWidth ,
        height: 200

    }
}

