import React, {PureComponent, PropTypes} from 'react';
import {StatusBar, DeviceEventEmitter} from 'react-native';


import {Root} from "native-base";
import {StackNavigator, TabNavigator, TabBarBottom} from "react-navigation";

import TabBarItem from './widget/TabBarItem'

import StartScreen from "./screens/start/";
import LoginScreen from "./screens/login/";
import RegSetpA from "./screens/reg/regSetpA";
import RegSetpB from "./screens/reg/regSetpB";
import RegSetpC from "./screens/reg/regSetpC";


import  VideoPlayer    from "./screens/reg/VideoPlayer"

import InterestScreen from "./screens/reg/interest";
import CharacterScreen from "./screens/reg/character";



import HomeScreen from "./screens/home/";

//
//
// import MessageScreen from "./screens/message/";
// import MyCardScreen from "./screens/mycard/";
//
// import ExamineScreen from "./screens/examine/";
import MyScreen from "./screens/my/";
import Profile  from "./screens/my/profile";
import PhotoList from "./screens/my/photoList";
import PhotoViewer from "./screens/my/PhotoViewer";

import SettingScreen from "./screens/setting/";
import Character from "./screens/reg/character";
import service from "./common/service"



function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

// create a component
export class TabRoot extends PureComponent {
    constructor() {
        super()

        StatusBar.setBarStyle('light-content')
    }

    componentDidMount() {
        //    SplashScreen.hide()

    }

    render() {
        return (
            <AppNavigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            // if (lightContentScenes.indexOf(currentScene) >= 0) {
                            //     StatusBar.setBarStyle('light-content')
                            // } else {
                            //     StatusBar.setBarStyle('dark-content')
                            // }
                        }
                    }
                }
            />
        );
    }
}

export class StartAndTabRoot extends PureComponent {
    constructor() {
        super()
        this.state = {
            isLogin: false,

        }
        StatusBar.setBarStyle('light-content')
    }

    componentDidMount() {
        service.getUserFromCache()
            .then((user) => {

                if (user.id == 0) {
                    this.setState({
                        isLogin: false
                    });

                } else {
                    this.setState({
                        isLogin: true
                    });

                }
            });

    }
    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }

    componentWillMount() {
        // this.subscription = DeviceEventEmitter.addListener('DidLogin', (value) => {
        //     console.log("DidLogin")
        //     console.log(value)
        //
        //     this.setState({
        //         isLogin: value
        //     });
        //
        //
        // })



    }




    render() {

        if(this.state.isLogin) {
            return (
                <AppNavigator
                    onNavigationStateChange={
                        (prevState, currentState) => {
                            const currentScene = getCurrentRouteName(currentState);
                            const previousScene = getCurrentRouteName(prevState);
                            if (previousScene !== currentScene) {
                                // if (lightContentScenes.indexOf(currentScene) >= 0) {
                                //     StatusBar.setBarStyle('light-content')
                                // } else {
                                //     StatusBar.setBarStyle('dark-content')
                                // }
                            }
                        }
                    }
                />
            );
        }



        return (
            <StartNavigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            // if (lightContentScenes.indexOf(currentScene) >= 0) {
                            //     StatusBar.setBarStyle('light-content')
                            // } else {
                            //     StatusBar.setBarStyle('dark-content')
                            // }
                        }
                    }
                }
            />
        );
    }
}



export class StartRoot extends PureComponent {


    render() {



        return (
            <StartNavigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            // if (lightContentScenes.indexOf(currentScene) >= 0) {
                            //     StatusBar.setBarStyle('light-content')
                            // } else {
                            //     StatusBar.setBarStyle('dark-content')
                            // }
                        }
                    }
                }
            />
        );
    }
}






const HomeStack = StackNavigator({
        Home: {screen: HomeScreen},


    },
    {
        initialRouteName: "Home",
        headerMode: "none"
    }
);


const MessageStack = StackNavigator({
        Message: {screen: HomeScreen},


    },
    {
        initialRouteName: "Message",
        headerMode: "none"
    }
);

const MyCardStack = StackNavigator({

        MyCard: {screen: HomeScreen},
    },
    {
        initialRouteName: "MyCard",
        headerMode: "none"
    }
);

const ExamineStack = StackNavigator({

        Examine: {screen: HomeScreen},
    },
    {
        initialRouteName: "Examine",
        headerMode: "none"
    }
);


const MyStack = StackNavigator({

        My: {screen: MyScreen},
    },
    {
        initialRouteName: "My",
        headerMode: "none"
    }
);


const Tabs = TabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: ({navigation}) => ({
                //    header:true,

                tabBarLabel: '首頁',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tab/home.png')}
                        selectedImage={require('../assets/tab/home-select.png')}
                    />
                ),
            }),


        },

        Message: {
            screen: MessageStack,

            navigationOptions: ({navigation}) => ({
                //    header:true,

                tabBarLabel: '消息',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tab/message.png')}
                        selectedImage={require('../assets/tab/message-select.png')}
                    />
                ),
            }),

        },
        MyCard: {
            screen: MyCardStack,
            navigationOptions: ({navigation}) => ({
                //    header:true,

                tabBarLabel: '儲值',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tab/mycard.png')}
                        selectedImage={require('../assets/tab/mycard-select.png')}
                    />
                ),
            }),

        },

        Examine: {
            screen: ExamineStack,
            navigationOptions: ({navigation}) => ({
                //    header:true,

                tabBarLabel: '查看',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tab/examine.png')}
                        selectedImage={require('../assets/tab/examine-select.png')}
                    />
                ),
            }),

        },


        My: {
            screen: MyStack,
            navigationOptions: ({navigation}) => ({
                //    header:true,

                tabBarLabel: '我',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tab/my.png')}
                        selectedImage={require('../assets/tab/my-select.png')}
                    />
                ),
            }),

        },

    },
    {
        // navigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let iconName;
        //         if (routeName === 'Home') {
        //             iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        //         } else if (routeName === 'Settings') {
        //             iconName = `ios-options${focused ? '' : '-outline'}`;
        //         }
        //
        //         // You can return any component that you like here! We usually use an
        //         // icon component from react-native-vector-icons
        //         return <Ionicons name={iconName} size={25} color={tintColor} />;
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: '#D35253',
            inactiveTintColor: '#CACACA',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);


//StackNavigator(RouteConfigs, StackNavigatorConfig)
const AppNavigator = StackNavigator({
        Tabs: {
            screen: Tabs,
        },

        Profile: {screen: Profile},

        PhotoList: {screen: PhotoList},
        PhotoViewer: {screen: PhotoViewer},


        Setting: {screen: SettingScreen},

        StartRoot: {screen: StartRoot},
    },

    {
        headerMode: "none",
        navigationOptions: {
            //    header:true,
            headerBackTitle: null,
            headerTintColor: 'white',
            // headerStyle: {backgroundColor: Colors.mainColor},

        },

        /**

         mode: 'modal',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
         headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
         onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
         onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
         */
    }
);



export const StartNavigator = StackNavigator({

        start: {screen: StartScreen},
        login: {screen: LoginScreen},
        RegSetpA: {screen: RegSetpA},
        RegSetpB: {screen: RegSetpB},
        RegSetpC: {screen: RegSetpC},


        VideoPlayer: {screen: VideoPlayer},

        interest: {screen: InterestScreen},
        character: {screen: CharacterScreen},

        tabRoot: {screen: TabRoot},
    },
    {
        initialRouteName: "start",
        headerMode: "none"
    }
);


export default () =>



    <Root>
        <StartAndTabRoot/>
    </Root>;
