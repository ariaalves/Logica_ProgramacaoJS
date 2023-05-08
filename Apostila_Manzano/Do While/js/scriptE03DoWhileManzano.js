function divisivelQuatro(){
    let contadora=1;
    let resto=0;
    do{
        resto=contadora%4
        if(resto==0){
            console.log(contadora)
        }
        contadora++
    }while(contadora<200)
}