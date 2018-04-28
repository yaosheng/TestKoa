
let loginByToen = async function (data, next) {  
    console.log('loginByToen'); 
    return {status : 1, name : "loginByToen"};
}

let loginByPassword = async function(data, next) {
    console.log('loginByPassword');
    return {status : 1, name : "loginByPassword"};
}

let loginByFacebook = async function (data, next) {  
    // console.log('​data', data);
    console.log('loginByFacebook');
    return new Promise( (reslove, reject) => {
        let res = {status : 1, name : "loginByFacebook"};
        reslove(res);
    })
}

let loginByGoogle = async function (data) {  
    console.log('​loginByGoogle');
    return new Promise( (reslove, reject) => {
        let res = {status : 1, name : "loginByGoogle"};
        reslove(res);
    })
}


module.exports = {
    loginByToen : loginByToen,
    loginByPassword : loginByPassword,
    loginByFacebook : loginByFacebook,
    loginByGoogle : loginByGoogle
}