module.exports = function(){
    if (arguments.length < 3) return false;
    let result = arguments[0];
    for (let i = 1; i < arguments.length-1; i++){
        try{
            if (result.hasOwnProperty(arguments[i])){
                result = result[arguments[i]];
            }
            else{
                throw new Error();
            }
        }
        catch (e) {
            return arguments[arguments.length-1];
        }
    }
    return result;
}