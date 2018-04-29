
let loginByToken = async data => {  
    await console.log('loginByToken'); 
    return {status : 1, name : "loginByToken"};
}

let loginByPassword = async data => {
    console.log('loginByPassword');
    return {status : 1, name : "loginByPassword"};
}

let loginByFacebook = async data => {  
    return new Promise( (reslove, reject) => {
        console.log('loginByFacebook');
        let res = {status : 1, name : "loginByFacebook"};
        reslove(res);
    })
}

let loginByGoogle = async data => {  
    console.log('​loginByGoogle');
    return new Promise( (reslove, reject) => {
        let res = {status : 1, name : "loginByGoogle"};
        reslove(res);
    })
}

module.exports = {
    loginByToken : loginByToken,
    loginByPassword : loginByPassword,
    loginByFacebook : loginByFacebook,
    loginByGoogle : loginByGoogle
}