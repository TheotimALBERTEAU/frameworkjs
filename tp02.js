const namePlayer = "Cacakill"
let PV = 100
let Weapon = "paff"

console.log(`le joueur ${namePlayer} commence la game avec ${PV}PV et comme arme son ${Weapon}`)

let inventory = [
    "potion",
    "shield"
]
console.log(inventory)

inventory.push("bow")
console.log(inventory)

inventory.forEach((inventory) => {
    console.log(`Objet trouvé : ${inventory.toUpperCase()}`)
})

let enemies = [
    "goblin (landry)",
    "troll",
    "ogre",
]

for (let enemy of enemies) {
    console.log(`Un ${enemy} apparaît`)
}

let damages = [5, 10, 20]
for (let enemy of enemies) {
    PV -= damages[enemies.indexOf(enemy)]
}
console.log(PV)
