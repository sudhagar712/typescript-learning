enum Direction{
    left,
    right,
    up,
    down
}

function move(direction){
    console.log(`moving, ${Direction[direction].toLowerCase()}`)
}

move(Direction.up)