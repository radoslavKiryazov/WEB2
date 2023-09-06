require("./scripts.js")

function rtlScriptNames(scripts) {
    return scripts
        .filter(s => s.living)
        .reduce(((a, b) => a.year < b.year ? a : b)).name;
}

console.log(rtlScriptNames(SCRIPTS))
// → [ "Adlam", "Arabic", "Imperial Aramaic", ... ]