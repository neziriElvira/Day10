function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Zdravko Colic",
            title: "Okano",
            release_year: 2000,
            formats: {
                1: "8T",
                2: "LP",
                3: "CD"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;