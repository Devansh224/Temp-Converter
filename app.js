let celsius = document.getElementById("val")
let fah = document.getElementById("data")

const converter = (deg) => {
    if (deg === "F") {
        let val = fah.value
        let celCon = (val - 32) / (9 / 5);
        celsius.value = Math.round(celCon)

        if (val === "") {
            celsius.value = null;
        }
    } else if (deg === "C") {
        let val = celsius.value
        let fahCon = val * (9 / 5) + 32;

        fah.value = Math.round(fahCon)
        if (val === "") {
            fah.value = null;
        }
    }
}