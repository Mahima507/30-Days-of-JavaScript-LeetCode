/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const obj = {
        toBe(otherVal){
            if(val === otherVal){
                return true;
            }else{
                throw new Error("Not Equal"); 
            }
        },
        notToBe(ohterVal){
            if(val!== ohterVal){
                return true;
            }else{
                throw new Error("Equal");
            }
        },
    };
    return obj;
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
