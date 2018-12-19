'use strict';

import {
    AsyncStorage,
    Alert,
    DeviceEventEmitter
} from 'react-native';
import API from './API'

import L from './Log'
import User from '../model/User'


var GLOBAL_USER = Object.create(User);

class Service {

    constructor() {

    }

    //检查手机号
    checkPhone(phone) {
        let param = {'phone': phone};
        console.log("准备请求 param: ", param);
        return this.fetchNet(API.CheckPhone, param, 'POST')
    }

    photoAlbumDel( id) {
        let param = {'id': id};
        console.log("准备请求 param: ", param);
        return this.fetchNet(API.PhotoAlbumDelete, param, 'POST')

    }
    photoAlbumList(userid) {
        let param = {'userid': userid};
        console.log("准备请求 param: ", param);
        return this.fetchNet(API.PhotoAlbum, param, 'POST')

    }
    checkReg(username, email) {
        let param = {'username': username, 'email': email};

        return this.fetchNet(API.REGCHECK, param, 'POST')

    }

    loginSystem(email, pwd) {

        let param = {'email': email, 'password': pwd};
        console.log("准备请求 param: ", param);

        console.log("准备请求地址: ", API.LOGIN);


        return new Promise((resolve, reject) => {

            this.fetchNet(API.LOGIN, param, 'POST').then((wrapData) => {
                if (wrapData.flag == "Success") {
                    Object.assign(GLOBAL_USER, wrapData.data)
                    this.saveUser2Disk();
                    AsyncStorage.setItem("email", email);
                    AsyncStorage.setItem("password", pwd);

                }

                resolve(wrapData);
            }).catch((error) => {
                reject(error);
            })
        })
    }

    // 合并对象
      extend(target, source) {
        for (var obj in source) {
            target[obj] = source[obj];
        }
        return target;
    }


    regSystem(user, userParams) {



        console.log("准备请求 user: ", user);
        console.log("准备请求 userParams: ", userParams);

        var param = this.extend(user, userParams);
        delete param.userid;
     //   var param2 = Object.assign(user, userParams);


        // let param = {'username': "jian"};
        console.log("准备请求 param: ", param);
        console.log("准备请求地址: ", API.REGISTER);


        return new Promise((resolve, reject) => {

            this.fetchNet(API.REGISTER, param, 'POST').then((wrapData) => {
                if (wrapData.flag == "Success") {
                    Object.assign(GLOBAL_USER, wrapData.data)
                    this.saveUser2Disk();
                    AsyncStorage.setItem("email", user.email);
                    AsyncStorage.setItem("password", user.password);

                }


                resolve(wrapData);
            }).catch((error) => {
                reject(error);
            })
        })
    }

    fetchNet(url, param, method) {


        return new Promise((resolve, reject) => {

            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: this.toQueryString(param)

            })
                .then((response) => response.json())
                .catch((error) => {
                    reject(error);
                }).then((responseData) => {

                console.log("responseData ", responseData);


                if (!responseData) {
                    reject(new Error('responseData is null'));
                    return;
                }
                resolve(responseData);
                //   this.saveData(url,responseData.result)
            }).done();

        })
    }


    /**
     * 使用fetch实现图片上传
     * @param {string} url  接口地址
     * @param {JSON} params body的请求参数
     * @return 返回Promise
     */
     uploadImage(url,params){
        return new Promise(function (resolve, reject) {
            let formData = new FormData();
            for (var key in params){
                formData.append(key, params[key]);
            }
            let file = {uri: params.path, type: 'application/octet-stream', name: 'image.jpg'};
            formData.append("pic", file);
            fetch( url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data;charset=utf-8',
                    // "x-access-token": token,
                },
                body: formData,
            }).then((response) => response.json())
                .then((responseData)=> {
                    console.log('uploadImage', responseData);
                    resolve(responseData);
                })
                .catch((err)=> {
                    console.log('err', err);
                    reject(err);
                });
        });
    }


    toQueryString(obj) {
        return obj ? Object.keys(obj).sort().map(function (key) {
            var val = obj[key];
            if (Array.isArray(val)) {
                return val.sort().map(function (val2) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
                }).join('&');
            }

            return encodeURIComponent(key) + '=' + encodeURIComponent(val);
        }).join('&') : '';
    }


    getUserFromCache() {
        //AsyncStorage.removeItem("user");
        return AsyncStorage.getItem("user")
            .then((result) => {
                if (result) {
                    L.info("getUserFromCache>OSC user:{}", result);
                    Object.assign(GLOBAL_USER, JSON.parse(result));
                }
                return GLOBAL_USER;
            }).catch(err => {
                L.info('getUserFromCache err is: ' + err);
            });
    }

    logout() {
        AsyncStorage.removeItem("user");
        DeviceEventEmitter.emit('DidLogin', false);
    }

    isLogined() {
        return GLOBAL_USER && GLOBAL_USER.id != 0;
    }

    saveUser2Disk() {
        L.info("saveUser2Disk:{}", GLOBAL_USER)
        AsyncStorage.setItem("user", JSON.stringify(GLOBAL_USER));
    }

    checkNeedLoginWithPromise(promiseFunc, navigator) {
        if (!this.isLogined()) {
            navigator.push({
                id: 'login',
                sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                title: '该操作需要登陆',
                nextPromiseFunc: promiseFunc,
            });
        } else {
            return promiseFunc();
        }
    }

    saveFirstStart() {

        AsyncStorage.setItem("FirstStart", '1');
    }


    getFirstStart() {
        //AsyncStorage.removeItem("user");
        return AsyncStorage.getItem("FirstStart")
            .then((result) => {
                console.log('FirstStart : ' + result);
                if (result == null) {
                    return '2'
                }
                return result
            }).catch(err => {
                L.info('FirstStart : ' + err);
            });
    }


    getEmail() {

        return AsyncStorage.getItem("email")
            .then((result) => {
                if (result) {

                    return result
                }
                return ""

            }).catch(err => {
                L.info('getUserFromCache email err is: ' + err);
            });
    }

    getPassword() {

        return AsyncStorage.getItem("password")
            .then((result) => {
                if (result) {

                    return result
                }
                return ""

            }).catch(err => {
                L.info('getUserFromCache password err is: ' + err);
            });
    }
}

const service = new Service();
module.exports = service;
module.exports.GLOBAL_USER = GLOBAL_USER;
