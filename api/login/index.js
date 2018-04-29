
let loginByToken = async data => {  
    console.log('loginByToken'); 
    return {status : 1, name : "loginByToken"};
}

let loginByPassword = async data => {
    console.log('loginByPassword');
    return {status : 1, name : "loginByPassword"};
}

let loginByFacebook = async data => {  
    console.log('loginByFacebook');
    return new Promise( (reslove, reject) => {
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

// export const loginByToken = loginByToken;
// export const loginByPassword = loginByPassword;
// export const loginByFacebook = loginByFacebook;
// export const loginByGoogle = loginByGoogle;

module.exports = {
    loginByToken : loginByToken,
    loginByPassword : loginByPassword,
    loginByFacebook : loginByFacebook,
    loginByGoogle : loginByGoogle
}