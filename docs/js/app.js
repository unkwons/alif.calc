let input 
input = document.getElementById('inpt');
document.getElementById('inpt').focus();

input.oninput = function() {
    const comissionThreeMn = 6;
    const comissionSixMn = 10;
    const comissionNineMn = 15;
    const comissionTwelvMn = 20;
    const comissionFifteenMn = 24;
    const comissionEighteenMn = 27;
    const comissionTwenyFourMn = 30;
    
    const calcThreeMn = (+input.value / 100) * comissionThreeMn + +input.value;
    const calcSixMn = (+input.value / 100) * comissionSixMn + +input.value;
    const calcNineMn = (+input.value / 100) * comissionNineMn + +input.value;
    const calcTwelvMn = (+input.value / 100) * comissionTwelvMn + +input.value;
    const calcFifteenMn = (+input.value / 100) * comissionFifteenMn + +input.value;
    const calcEighteenMn = (+input.value / 100) * comissionEighteenMn + +input.value;
    const calcTwenyFourMn = (+input.value / 100) * comissionTwenyFourMn + +input.value;
    
    const devideThreeMn = calcThreeMn / 3;
    const devideSixMn = calcSixMn / 6;
    const devideNineMn = calcNineMn / 9;
    const devideTwelvMn = calcTwelvMn / 12;
    const devideFifteenMn = calcFifteenMn / 15;
    const devideEighteeMn = calcEighteenMn / 18;
    const devideTwenyFourMn = calcTwenyFourMn / 24;
    
    const monthlyPayment3 = devideThreeMn.toFixed(2);
    const monthlyPayment6 = devideSixMn.toFixed(2);
    const monthlyPayment9 = devideNineMn.toFixed(2);
    const monthlyPayment12 = devideTwelvMn.toFixed(2);
    const monthlyPayment15 = devideFifteenMn.toFixed(2);
    const monthlyPayment18 = devideEighteeMn.toFixed(2);
    const monthlyPayment24 = devideTwenyFourMn.toFixed(2);
    
    const factualPay3 = calcThreeMn - input.value;
    const factualPay6 = calcSixMn - input.value;
    const factualPay9 = calcNineMn - input.value;
    const factualPay12 = calcTwelvMn - input.value;
    const factualPay15 = calcFifteenMn - input.value;
    const factualPay18 = calcEighteenMn - input.value;
    const factualPay24 = calcTwenyFourMn - input.value;
    
    document.getElementById('monthlyPayment3').innerHTML = monthlyPayment3;
    document.getElementById('monthlyPayment6').innerHTML = monthlyPayment6;
    document.getElementById('monthlyPayment9').innerHTML = monthlyPayment9;
    document.getElementById('monthlyPayment12').innerHTML = monthlyPayment12;   
    document.getElementById('monthlyPayment15').innerHTML = monthlyPayment15;
    document.getElementById('monthlyPayment18').innerHTML = monthlyPayment18;
    document.getElementById('monthlyPayment24').innerHTML = monthlyPayment24;
    
    document.getElementById('factualPayment3').innerHTML = factualPay3.toFixed(0); 
    document.getElementById('factualPayment6').innerHTML = factualPay6.toFixed(0); 
    document.getElementById('factualPayment9').innerHTML = factualPay9.toFixed(0); 
    document.getElementById('factualPayment12').innerHTML = factualPay12.toFixed(0);
    document.getElementById('factualPayment15').innerHTML = factualPay15.toFixed(0); 
    document.getElementById('factualPayment18').innerHTML = factualPay18.toFixed(0); 
    document.getElementById('factualPayment24').innerHTML = factualPay24.toFixed(0);

    document.getElementById('result3').innerHTML = calcThreeMn.toFixed(0);
    document.getElementById('result6').innerHTML = calcSixMn.toFixed(0);
    document.getElementById('result9').innerHTML = calcNineMn.toFixed(0);
    document.getElementById('result12').innerHTML = calcTwelvMn.toFixed(0);
    document.getElementById('result15').innerHTML = calcFifteenMn.toFixed(0);
    document.getElementById('result18').innerHTML = calcEighteenMn.toFixed(0);
    document.getElementById('result24').innerHTML = calcTwenyFourMn.toFixed(0);

  };

let inptForAcsia;

inptForAcsia = document.getElementById('inptForAcsia');
inptForAcsia.oninput = function() {
    const acsia24 = 7;
    const calcAcsia18 = +inptForAcsia.value;
    const calcAcsia24 = (+inptForAcsia.value / 100) * acsia24 + +inptForAcsia.value;

    const acsiaMonth18 = calcAcsia18 / 18
    const acsiaMonth24 = calcAcsia24 / 24


    const acsiaFactual18 = +inptForAcsia.value - calcAcsia18;
    const acsiaFactual24 = calcAcsia24 - +inptForAcsia.value;


    document.getElementById('acsiaResult18').innerHTML = calcAcsia18;
    document.getElementById('acsiaResult24').innerHTML = calcAcsia24;

    document.getElementById('acsiaMonthlyPay18').innerHTML = acsiaMonth18.toFixed(2);
    document.getElementById('acsiaMonthlyPay24').innerHTML = acsiaMonth24.toFixed(2);
    
    document.getElementById('acsiaFactual18').innerHTML = acsiaFactual18.toFixed(2);
    document.getElementById('acsiaFactual24').innerHTML = acsiaFactual24.toFixed(2);

}