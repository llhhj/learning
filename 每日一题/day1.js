const add = x => y => z => {
    console.log(x, y, z)
    return x + y + z
}

add(3)(4)(5)     