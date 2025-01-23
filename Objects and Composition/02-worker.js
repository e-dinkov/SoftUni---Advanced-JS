function worker(input) {
    if (input['dizziness']) {
        input['levelOfHydrated'] = input.levelOfHydrated + input.weight * 0.1 * input.experience
    }
    return input

}
worker({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true
})