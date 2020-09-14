let a = {
    "prop1": "hello",
    "prop2" : 4,
    "prop3": [10, 20]
}

function test(param:any): void {
    console.log(arguments)
    console.log(arguments.length)
    console.log(param)
}

test({...a})
test(a)
