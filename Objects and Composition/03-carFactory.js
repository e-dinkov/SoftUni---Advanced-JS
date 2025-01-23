function carFactory(input) {
    let transformedObj = {model : input.model}
    if (input.power <= 90) {
        transformedObj.engine = { power: 90, volume: 1800 }
    }
    else if (input.power <= 120) {
        transformedObj.engine = { power: 120, volume: 2400 }
    }
    else {
        transformedObj.engine = { power: 200, volume: 3500 }
    }
    transformedObj.carriage = { type: input.carriage, color: input.color }
    transformedObj.wheels = [input.wheelsize - 1 + (input.wheelsize % 2),
        input.wheelsize - 1 +input.wheelsize % 2,
        input.wheelsize - 1 + input.wheelsize % 2,
        input.wheelsize - 1 + input.wheelsize % 2
     ]
return transformedObj
}
carFactory({
    model: 'Opel Vectra',

    power: 110,

    color: 'grey',

    carriage: 'coupe',

    wheelsize: 17
})
// Small engine: { power: 90, volume: 1800 }

// Normal engine: { power: 120, volume: 2400 }

// Monster engine: { power: 200, volume: 3500 }