const CalculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);    
    

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);
    // alert(valueTemp , numberTemp);

    const celToFah = (cel) =>{
        let Fahrenheit = Math.round((cel * 9/5) + 32) ;
        // alert(` line 13 ${Fahrenheit}`);
        return Fahrenheit;
    }
    const fahToCel = (fah) =>{
        // alert(` line 17 ${fah}`);
        let Celsius = Math.round((fah - 32) * 5/9) ;
        // alert("inside to fahtocel fun",valueTemp , numberTemp);
        return Celsius;
    }

    let result;

    if(valueTemp=='Cel'){
        result= celToFah(numberTemp);
        document.getElementById('resultContainer').innerText= `=${result}°Fahrenheit `;
    }else{
        result= fahToCel(numberTemp);
        document.getElementById('resultContainer').innerText=  `=${result}°Celsius `;
    }
}