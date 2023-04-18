function isNumber(value){
    if(value==1 || value==2){
        return true;
    }
    for(let i=2;i<value;i++){
        if((value)%i==0){
            return false;
        }else{
            return true;
        }
    }
}

function showNumber(isValue){
    if(isValue==true){
        document.write("la so nguyen to");
    }else{
        document.write("khong phai la so nguyen to");
    }
}

showNumber(isNumber(8));