
var assert = function(value,description){
    description = description || ''
    if (value === true){
        console.info('[成功]' + description)
    }else{
        console.error('[失败]' + description)
    }
}

assert(typeof 1 === number,'数字')
assert(1 === 1)
