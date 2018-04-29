
let verify = async data => {
    console.log('verify');
    let bool = true;
    let res = {};
    return bool;

}

let verify4Token = async data => {
    return true;
}

let verify4Parameter = async data => {
    return true;
}

// const _verify = verify;
// export { _verify as verify };

// exports.verify = verify;
// export const verify = verify;
// export const verify = verify;
// export const verify4Token = verify4Token;
// export const verify4Parameter = verify4Parameter;

module.exports = {
    verify,
    verify4Token,
    verify4Parameter
}