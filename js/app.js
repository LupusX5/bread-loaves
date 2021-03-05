var ruble;
var euro;
var lira;
var peso;

var currencyRate = {
  RUB: ruble,
  EUR: euro,
  TRY: lira,
  MXN: peso
}

var incomeRatePerSecond = {
  // famous personalities
  Musk: 1978.44/10.00,
  Bezos: 2447.68/10.00,
  // average citizens income rates
  averageAmerican: (31133.00/31536000.00)/10.00,
  averageGerman: (((2412.14*12)/0.83)/31536000.00)/10.00,
  averageRussian: (((34184.74*12)/74.80)/31536000.00)/10.00,
  averageTurkish: (((3177.48*12)/7.44)/31536000.00)/10.00,
  averageMexican: (((10010.25*12)/20.86)/31536000.00)/10.00,
  // government/politics-tied titles
  averageSenatorUS: (174000/31536000.00)/10.00, // source: https://www.senate.gov/senators/SenateSalariesSince1789.htm
  averageSenatorRU: ((28309766.15/74.80)/31536000.00)/10.00,
  averageSenatorDE: (((10083.47*12)/0.83)/31536000.00)/10.00  // source: https://www.bundestag.de/en/members/remuneration
}


// costs of the options (USD)
var TeslaModelSPriceUSD = 203890;
var iPhone12ProMaxPriceUSD = 1099.00;
var minimunUSfederalWagePerAnnum= 13920.00;
var AmericanHousePriceUSD = 340000.00;
var goldKgPriceUSD = 56554.00;

// USD per loaf of bread (Local --> USD)
var loaf = {
  DE: 1.33/0.83,
  MX: 31.5/20.86, 
  RU: 35.00/74.80,
  TR: 2.70/7.44,
  US: 2.70, 
}

var bread = loaf.US;
var counter = 0;

//the number to add.  You can change it by modifying the variable
var value = muskIncReal; 

// the function updates the state of elements each 1/10 fraction of a second.
var counterCalc = setInterval(function() {
  
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  counter+= value;
  document.getElementById('USDCount').innerHTML=formatter.format(counter);  

  var rubFormatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

  var usdToRub = counter*74.80;
  document.getElementById('localCount').innerHTML=rubFormatter.format(usdToRub);



  //   document.getElementById('USDCount').innerHTML= '$ ' + counter.toFixed(2);


  if (value==muskIncReal) {
    document.getElementById('targetAName').innerText="Elon Musk";
  } else if (value==bezosIncReal) {
    document.getElementById('targetAName').innerText="Jeff Bezos";
  } else if (value==avgUSwageIncReal) {
    document.getElementById('targetAName').innerText="a US citizen";
  } else if (value==avgTRwageIncReal) {
    document.getElementById('targetAName').innerText="a Turkish";
  } else if (value==avgMXwageIncReal) {
      document.getElementById('targetAName').innerText="a Mexican";
  } else if (value==avgRUwageIncReal) {
      document.getElementById('targetAName').innerText="a Russian";
  } else if (value==avgDEwageIncReal) {
    document.getElementById('targetAName').innerText="a German";
  } else if (value==avgStateDumaDeputyRU) {
    document.getElementById('targetAName').innerText="a Russian State Duma deputy";
  }

  if (value!=myselfOption) {
    document.getElementById('caseMyselfChosen').style.display='none';
  }
  
},100);


function subjects(str){
  console.log(`selected option is ${str}`);
  
  var userTopInputField = document.getElementById('userTopInput');

  if (str != userTopInputField.value) {
      userTopInput.hidden="true";
      document.getElementById('myselfOptionInput').hidden="true";
  } else if (str == userTopInputField.value) {
      userTopInputField.hidden="false";
      document.getElementById('myselfOptionInput').hidden="false";
  }


  if (str == document.getElementById('elonMuskOption').value) {
      value = muskIncReal;
      bread = loaf.US;
      counter = 0;
      timeCounter=0;
      console.log(value)
  } else if (str == document.getElementById('jeffBezosOption').value) {
      value = bezosIncReal;
      bread = loaf.US;
      counter = 0;
      timeCounter=0;
      console.log(value);
  } else if (str == document.getElementById('avgAmericanCitizen').value) {
      value = avgUSwageIncReal;
      bread = loaf.US;
      counter = 0;
      timeCounter=0;
      console.log(value);
  } else if (str == document.getElementById('avgTurkishCitizen').value) {
      value = avgTRwageIncReal;
      bread = loaf.TR;
      counter=0;
      timeCounter=0;
      console.log(value);
  } else if (str == document.getElementById('avgMexicanCitizen').value) {
      value = avgMXwageIncReal;
      bread = loaf.MX;
      counter = 0;
      timeCounter=0;
      console.log(value);
  } else if (str == document.getElementById('avgRussianCitizen').value) {
      value = avgRUwageIncReal;
      bread = loaf.RU;
      counter = 0;
      timeCounter=0;
      console.log(value);
  } else if (str == document.getElementById('avgGermanCitizen').value) {
      value = avgDEwageIncReal;
      bread = loaf.DE;
      counter = 0;
      timeCounter=0;
      console.log(value);
  } else if (str == document.getElementById('RUDuma').value) {
      value = avgStateDumaDeputyRU;
      bread = loaf.RU;
      counter = 0;
      timeCounter=0;
      console.log(value);
  }
}


var numbersApplied = setInterval(function(){
  var howManyTeslas=counter/TeslaModelSPriceUSD;
  document.getElementById('teslasCounter').innerText=howManyTeslas.toFixed(1);

  var howManyiPhones = counter/iPhone12ProMaxPriceUSD;
  document.getElementById('iPhonesCounter').innerText=howManyiPhones.toFixed(1);

  var howManyFederalAnnualWages = counter/minimunUSfederalWagePerAnnum;
  document.getElementById('wagesCount').innerText=howManyFederalAnnualWages.toFixed(1);

  var howManyKgOfGold = counter/bread;
  document.getElementById('loafCounter').innerText=howManyKgOfGold.toFixed(2);
},100);


var timeCounter = 0;
var timeValue=1;
var timeCounterFunc = setInterval(function() {
    
    timeCounter += timeValue; 
    var mins = ~~((timeCounter % 3600) / 60);
    mins += timeValue;

    document.getElementById('timeCounter').innerText= mins.toFixed(0);
  
},1000);




// var cTarget=document.getElementById('targetChidden').hidden="true";





function myScript() {
    var kek = document.getElementById('userTopInput').value;
    document.getElementById('cheburek').innerText=kek;
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function tryRate() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    // document.getElementById("usd_rate").innerHTML = myObj.rates.TRY.toFixed(2);
    console.log(myObj.rates.EUR.toFixed(2));

  }
};
xmlhttp.open("GET", 'https://api.exchangeratesapi.io/latest?symbols=EUR&base=USD', true);
xmlhttp.send();


