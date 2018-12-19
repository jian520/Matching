import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    ScrollView,Dimensions
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import common from '../../common/common'
const images = [
    {
        url: "http://localhost/Public/Uploads/pic/z_5a92be3d65f9b.jpg"
    },
    {
        url: "http://localhost/Public/Uploads/pic/z_5a92be3d65f9b.jpg"
    }, {
        url: "http://localhost/Public/Uploads/pic/z_5a92be3d65f9b.jpg"
    }
]

export  default  class PhotoViewer extends Component {

    constructor(props) {
        super(props);


        this.state = {
            imageIndex: Number(0) ,
            images: [],
        };
    }

    componentWillMount() {
        // 上个界面传来的照片集合

        let images = this.props.navigation.state.params.images
        let pageNum = this.props.navigation.state.params.pageNum

        this.setState({
            images: images,
            imageIndex:  Number(pageNum)  ,
        });
    }

    render() {
        return (

                <ImageViewer
                    index={this.state.imageIndex} // 初始显示第几张
                    imageUrls={this.state.images}
                    failImageSource={{
                        url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
                        width: common.deviceWidth,
                        height:  common.deviceWidth
                    }}
                    onClick={(e) => { // 图片单击事件
                        this.props.navigation.goBack()

                    }}

                />


        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

module.exports = PhotoViewer;
