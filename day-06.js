//Solving problems using array functions on rest countries data


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){

        var res=JSON.parse(request.response);
        console.log(res);
    
//(a)Get all the countries from Asia continent /region using Filter method

var reg=res.filter((ele)=>ele.region =="Asia");
console.log(reg);


//(b)Get all the countries with a population of less than 2 lakhs using Filter method

var popu=res.filter((ele)=>ele.population<200000);
console.log(popu);

//(c)Print the following details name, capital, flag, using forEach method

var country=res.forEach(ele => { console.log(ele.name);
    console.log(ele.capital);
    console.log(ele.flag); 
    
});

//(d)Print the total population of countries using reduce method

var tpopu=res.reduce((acc,cv)=>acc+cv.population,0);
console.log(tpopu);

//(e)Print the country that uses US dollars as currency.

var currency = res.filter((ele ) => {
    for(let key in ele .currencies){
       if(ele .currencies[key].code == "USD"){
           return ele ;
       }
    }
  });
       console.log(currency);
     


}