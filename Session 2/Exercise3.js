

function loop(n, testfn, updatefn, bodyfn) {
    for (n; testfn(n); n = updatefn(n)) {
        bodyfn(n)
    }
}


loop(
    3,
    n => n > 0,
    n => n - 1,
    console.log
)
// → 3
// → 2
// → 1