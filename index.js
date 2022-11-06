function bmi() {
    let name = document.querySelector("#name").value;
    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = weight/(height/100 *height/100 )
    const fixed = result.toFixed(1);
    document.querySelector("#result").innerHTML=`Dear ${name} your BMI is=${fixed}`
    if (result<18.5) {
        document.querySelector("#low").innerHTML=`Your BMI is Low`
    }else if(result>=18.5 && result<=24.9) {
        document.querySelector("#normal").innerHTML=`Your BMI is Normal`
    }else if (result>24.9) {
        document.querySelector("#high").innerHTML=`Your BMI is High`
    }else{
        document.querySelector("#error").innerHTML=`Please fill the fields`
    }
    
}