const content = []
let id = 1

function calculateId(content) {
    const ids = content.map(function (element) {
        return element.id
    })
    const max = ids.reduce((previous, current) => current > previous ? current : previous) 
    return max
}


function get() {
    return content
}

function getById(id) {
    const result = content.filter(x => x.id==id) 
    if (result.length > 0) {
        return result[0].value
    }
    return null
}


function post(product) {
    content.push({id, value: product})
    return id++
}


function put(id, product) {
    const index = content.findIndex(x => x.id === id)
    if (index == -1) {
        return false
    }
    content[index].value = product
    return true
}




module.exports = {get, getById, post, put}