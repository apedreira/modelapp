const ntArr = [90]
const times = [0, 2, 4, 8, 12, 16, 20, 24, 30, 36, 48]
const charge = 26
const mu = 2
const lam = 1

const mathFunct = (ntArr, times, charge, mu, lam) => {

    let result = []
    
    let result2 = []

    let value;
    let value2;


    for (let i = 0; i < times.length; i++) {
        value = Math.log10(ntArr[0]) + (charge / (1 + Math.exp((4 * mu / charge) * (lam - times[i]) + 2)))
        value 2 =
        result.push(value)
    }
    console.log(result)
}

mathFunct(ntArr, times, charge, mu, lam)