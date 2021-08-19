var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 7;
var packedWell = false;

/* if (danishPrice < myBudget) {
    console.log('Danish kheye Denmark jabo');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon diye cha khamu');
}
else if (toastBiscuitPrice < myBudget) {
    console.log('Toast biscuit diye cha khamu');
}
else {
    console.log('Batasha diye cha khamu');
} */

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('danish khabo');
    }
    else {
        console.log('danish khamu na! karon valovabe packet kora silo na');
    }
}
