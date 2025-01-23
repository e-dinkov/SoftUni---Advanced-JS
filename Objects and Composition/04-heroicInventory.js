function heroOBJ(input){
    let heroesData = []
 for (let element of input){
    let [name, level,items] = element.split(' / ')
     items =  items ? items.split(', ') : []
    let currentHero = {
        name,
        level,
        items : items
    }
    console.log(currentHero)
    
    heroesData.push(JSON.stringify(currentHero))
 }
return heroesData
}
heroOBJ(['Isacc / 25',

    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'])