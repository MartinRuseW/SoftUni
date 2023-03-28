function numbers1NWith3Steps(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
numbers1NWith3Steps(["10"])