/* let mOve = document.querySelector('.focus')
let sTatic = document.querySelector('.box')
let eLement = true

mOve.addEventListener('mouseover', function() {
    document.addEventListener('mousemove', function(event){
        if(eLement) {
            let x = event.clientX
            let y = event.clientY

            mOve.style.transform = `translate(${x}px,${y}px)`
        }
    })
})

mOve.addEventListener('mouseout', function() {
    document.addEventListener('mousemove', function() {
        if(eLement) {
            let x = event.clientX
            let y = event.clientY

            mOve.style.transform = `translate(${x}px,${y}px)`
        }
    })
})


mOve.addEventListener('mouseover' , function(){

    sTatic.addEventListener('mouseenter' , function(){
        if(mOve === 'box') {
            mOve.classList = 'none'
        }
        else{
            mOve.classList = 'block'
        }
    })
}) */

/* let fIrel = 12
if(true) {
    let tWoel = '25'
    console.log('local', fIrel)
    console.log('local', tWoel)
}

console.log('global', fIrel)
console.log ('global', tWoel) */

/* let yearsVWid = pareInt(prompt('Your number'))
switch(true){
    case(yearsVWid >= 55 && yearsVWid <= 99):
        alert('alright')
    break
    default:
        alert('wrong')
} */

/* let askAge = prompt('how much u old?')
switch(true){
    case(askAge >= 0 && askAge <= 14):
    alert('child')
    break

    case(askAge >= 15 && askAge <= 60):
    alert('adult')
    break

    case(askAge >= 61 && askAge <= 100):
    alert('pensioner')
    break

    default:
        alert('ufo')

} */

/* let wVidName = prompt('write your name')
let wVidSure = prompt('write your Surename')
let sUm

switch(true){
    case(wVidName.length >= 4 && wVidSure.length >= 5):
    sUm = wVidName.length + wVidSure.length
    alert(sUm)
    break
    default:
        alert('ups...')
} */

/* let langMonth = prompt('Choose u langueage: ua, eng, fr')
switch(true){
    case(langMonth === 'ua'):
    alert('Липень')
    break

    case(langMonth === 'eng'):
    alert('July')
    break

    case(langMonth === 'fr'):
    alert('Juillet')
    break

    default:
        alert('we haven`t such language')
} */

/* let opTion = prompt('How u what to take your box')
let nodEliv = 'My own'
let dEliv = 'Delievery please'
switch(true) {
    case (opTion === nodEliv ):
        alert('You can bring it tomorrow at 12 a.m.')
    break

    case (opTion === dEliv):
        alert('Your box will come at 14 p.m.')
    break

    default:
        alert('Wait a minute. We will call you')
} */




/* let hOtel = prompt('What amount do you count on?')
switch(true){
    case (hOtel >= 20 && hOtel < 30):
        alert('We can recomend 1 star room')
    break

    case (hOtel >= 30 && hOtel < 50):
        alert('We can recomend 2 stars room')
    break
    
    case (hOtel >= 50 && hOtel < 70):
        alert('We can recomend 3 stars room')
    break

    case (hOtel >= 70 && hOtel < 120):
        alert('We can recomend 4 stars room')
    break

    case (hOtel >= 120):
        alert('We can recomend 5 stars room')
    break

    default:
        alert('Rest isn`t for you')
} */

/* let fIrst = document.querySelector('.input')
let Second = document.querySelector('.input_1')
let tExt = document.querySelector('.text')

fIrst.addEventListener('click', function(){
    if(fIrst.checked){
        Second.checked = false
        tExt.classList.add('active')
        tExt.classList.remove('passive')
    }
    else{
        tExt.classList.remove('active')
    }
})
Second.addEventListener('click', function(){
    if(Second.checked){
        fIrst.checked = false
        tExt.classList.add('passive')
        tExt.classList.remove('active')
    }
    else{
        tExt.classList.remove('passive')
    }
}) */


/* let pUt = document.querySelector('.sell')
pUt.addEventListener('change', function(){
    

switch(pUt.value) {
    case 'val1':
        alert('Your Coffee will be ready in 10 minutes')
    break

    case 'val2':
        alert('Your Tea will be ready in 5 minutes')
    break

    case 'val3':
        alert('Your Juice will be ready in a minute')
    break

    default:
        alert('Maybe you don`t choose yet')
}
})  */

/* let dAy = prompt('What day of the week is today?')

switch(true) {
    case (dAy === 'Monday' || dAy === 'Tuesday' || dAy === 'Wednesday' || dAy === 'Thursday' || dAy === 'Friday' ):
        alert('It`s work day')
    break
    case (dAy === 'Saturday' || dAy === 'Sunday'):
        alert('You can have a rest')
    break 

    default:
        alert('Go and learn the days of the week in English')
} */

/* let mOnth = prompt('what is the number of the month now?')

switch(true) {
    case (mOnth === '01' || mOnth === '02' || mOnth === '12' ):
        alert('That`s winter')
    break

    case (mOnth === '03' || mOnth === '04' || mOnth === '05' ):
        alert('That`s spring')
    break

    case (mOnth === '06' || mOnth === '07' || mOnth === '08' ):
        alert('That`s summer')
    break

    case (mOnth === '09' || mOnth === '10' || mOnth === '11' ):
        alert('That`s autumn')
    break

    default:
        alert('Go and learn months in English')
} */

/* let dMon = prompt('How many days in this month')

switch(true) {
    case (dMon === '04' || dMon === '06' || dMon === '11' || dMon === '09'):
        alert ('30 days')
    break

    case (dMon === '01' || dMon === '03' || dMon === '05' || dMon === '07'|| dMon === '08' || dMon === '10' || dMon === '12'):
        alert ('31 days')
    break

    case (dMon === '02'):
        alert('February has 28 days in non-leap years, and 29 in leap years')
    break

    default:
        alert ('There are only 12 months in a year')
} */

/* let colOr = prompt('What do the colors at the traffic lights mean? White a color')
 switch(true) {
    case(colOr === 'red'):
        alert('STOP')
    break

    case(colOr === 'yellow'):
        alert('Wait a little')
    break

    case(colOr === 'green'):
        alert('You can go')
    break

    default:
        alert('There is no such color at a traffic light')
 } */

/*  let intNumbers = document.querySelector('.int-numbers')

let intNumbers2 = document.querySelector('.int-numbers-2')

let selektSimvols = document.querySelector('.select-simvols')

let btnResult = document.querySelector('.btn-result')



btnResult.addEventListener('click' , function(){
    let intNumbersValue = intNumbers.value
    let intNumbers2Value = intNumbers2.value
    let resultAll 

    switch(selektSimvols.value) {
        case '+': 
        resultAll = Number.parseInt(intNumbersValue) + Number.parseInt(intNumbers2Value) 
        alert(resultAll)
        break

        case '-': 
        resultAll = Number.parseInt(intNumbersValue) - Number.parseInt(intNumbers2Value) 
        alert(resultAll)
        break

        case "/":
                if (Number.parseInt(intNumbers2Value) !== 0 && Number.parseInt(intNumbersValue) !== 0) {
                    resultAll = Number.parseInt(intNumbersValue)  / Number.parseInt(intNumbers2Value);
                } 
                else {
                alert("You cannot divide by 0")
                }
                break;

        case '*': 
        resultAll = Number.parseInt(intNumbersValue) * Number.parseInt(intNumbers2Value) 
        alert(resultAll)
        break

        default:
            alert('bobo')
    }
}) */
/* 
let num = 1;
while (num < 11) {
    console.log(num)
    num = num + 1;
} 


for (let i = 2; i < 22; i++) {
    if (i % 2 !== 0) {
        continue
    } 
    console.log(i)
} 


for (let i = 7; i < 77; i+=7) {
        console.log(i)
    }  




let num = [1, 2, 3, 4, 5]
let i = 0

while (i < numbers.length) {
    console.log(num[i])
    i++
}

let num = 10
for(let i = 0 ; i < num ; i ++){
    let reult = i * 7
    console.log(result)
}

let n = 42

for(i = 0; i<= n; i++){
    if(i >= n ){
        break
    }
    console.log(i)
} */



/* let clients = ['Anna' , 'Conia' , 'Artur']
console.log(clients)

clients[2] = 'Anna'
console.log(clients)

let numbs = [768 , 'Anika' , 56 , 7]
console.log(numbs)

numbs.length = 6 
console.log(typeof numbs[5])

let names = ['Anna' , 'Conia' , 'Artur']
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

let numbers = [];
for (let i = 0; i < 4; i++){
    numbers.push(i)
}
    console.log(numbers) */

/* let names = ['Anna' , 'Conia' , 'Artur']
for (name of names){
    console.log(name)
}

let numbers = 'Elephant'
for (number of numbers){
    console.log(number)
} */

/* let names = ['Anna', 'Conia', 'Artur']
let nameToFind 'Artur'

for (name of names) {
if (neme === nameToFind){
    alert('True')
    break
    }
}
 */

/* let arr1 = [1,5,'4','hi']
let arr2 = [true,2,{},['a'],222]
let reSult = arr1[1] + arr2[1]
console.log(reSult) */

/* let arrays = ['GoI'. 'Alex', 'Dub']
console.log(arrays[0])
arrays[3] = 5
console.log(arrays) */

/* let names = ['Voitek', 'Marz', 'All']
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}
for(name of names){
    console.log(name)
} */

/* let sUm = [23. 45, 567]
let result = 0
for(i = 0; i < sUm.length; i++){
    result+= sUm[i]
}
console.log(result) */

/* let nums = [35, 567, 98, 78, 12345, 6785]
nums[5] = 22
console.log(nums)
for(i = 0; i < nums.length; i++){
    console.log(nums[i])
} */
/* 
let slovo = 'kiss him now'
console.log(slovo.split(' '))

let arrays = ['anton', 'max', 'lemon']
console.log(arrays.join('...')) 


let names =['anna', 'max', 'samantha', 'sasha']
/* console.log(names.indexOf('samantha')) */
/* console.log(names.includes('anna')) */
/* console.log(names.splice 3, 1, 'anna' , 'max')

let array1 = [1, 45, 67]
console.log(array1.pop(12))

let nume = ['all', 'everything', 'ollen']
console.log(nume.slice(0,3))

let oldK = ['Andrei', 'Max', 'Sofia']
let newK = ['Dima', 'Roma', 'Oleg']
let allK = oldK.concat(newK)
console.log(allK) */

/* let numbers = [ 23 , 456, 76, 45, 90]
console.log(numbers.push(345))
console.log(numbers) */

/* function comeback(){
    return "Hi!"
}
console.log(comeback())

function hello2(name){
    return "Hi " + name
}
console.log(hello2("Anna"))

function mul(n, m){
    let sum = n + m
    let dobut = n * m
    let minus = n - m 
    return [sum, dobut, minus]
}
let result = mul(5, 8)
console.log('sum', result[0])
console.log('sum', result[1])
console.log('sum', result[2])

function myAverageScore() {
    let sum = 0
    for(let i = 0; i < marks.length; i ++){
        sum += marks[i]
    }
    let result = sum / marks.length

    switch(true) {
        case(result >= 91 && result <= 100):
            console.log('A')
            break
        
        case(result >= 81 && result <= 90):
            console.log('B')
            break

        case(result >= 71 && result <= 80):
            console.log('C')
            break
        
        default
            console.log('D')
            break
    }
    return result
} 

console.log(myAverageScore([100, 75, 81, 96]))
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96])); */
/* 
function logItems(array){
    for(let i = 0; i < array.length; i++){
        console.log(`${i + 1} - ${array[1]}`)
    }
}
console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']))
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]))

function calculateEngravingPrice(message, pricePerWord){
    let arr = message.split('')
    let result = arr.length * pricePerWord

    return result
}

const findLongestWord = function(string){
    let words = string.split('')
    let longword = ''
    for(let i = 0; i < string.length; i++){
        if(words[i].length > longword.length){
            longword = words[i]
        }
    }
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you')); */


/* function formatString(string){
    if(string.length <= 40){
        return string
    }
    else{
        return string.slice(0, 40) + '...'
    }
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')) */

/* let arr1 = [911 , 111 , 888]
arr1[1] = 10
console.log(arr1)

let arr2 = ['1string' , '2string' , '3string']
arr2.length = 4
console.log(arr2)

let mathArr = [2 , 4 , 3 , 1 , 4]
let sum = 0
for(let i = 0; i < mathArr.length; i++){
    sum += mathArr[i]
}
console.log(sum)

let arrNumbers = [3 , 2 , 6 , 1 , 7]
for(let i = 0; i < arrNumbers.length; i++){
    alert(arrNumbers[i])
}

let arrStr = ['seven' , 'one' , 'twenty' , 'two' , 'nope']
for(let i = 0; i < arrStr.length; i++){
    if(arrStr[i].length >= 5){
        console.log(arrStr[i])
    }
}

let arrNumbers = [1 , 5 , 2 , 8 , 18]
let maxNumb = arrNumbers[0]
for(let i = 0; i < arrNumbers.length; i++){
    if(arrNumbers[i] > maxNumb){
        maxNumb = arrNumbers[i]
    }
}
console.log(maxNumb)

let arr3 = [1 , 3 , 6 , 9 , 4 , 8 , 10 , 21 , 82 , 37]
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] % 2 === 0){
        console.log(arr3[i])
    }
} */
/* 
function checkForSpam(message){
    let messageLowerCase = message.toLowerCase()
    return messageLowerCase.includes('sale') || messageLowerCase.includes('spam')
    }
    console.log(checkForSpam('Latest technology news')); // false
    
    console.log(checkForSpam('JavaScript weekly newsletter')); // false
    
    console.log(checkForSpam('Get best sale offers now!')); // true
    
    console.log(checkForSpam('[SPAM] How to earn fast money?')); // true */

/*     function numberSum(){
let input
const numbers = []

while(true){
    input = prompt('write the number')
    if(input === null){
        break
    }
    let numbInt = Number(input)
    numbers.push(numbInt)
} 
let total = 0
for(let i = 0; i < numbers.length; i++){
    total += numbers[i]
}
console.log(total)
    }
    numberSum() */


/*     const hello2 = (name) => 'Hi ' + name
    console.log(hello2('Anna')) */
/* 
    let btnSms = document.querySelector('.btn_sms')
    function sendAsms() {
        alert('Hello world!')
    }
    btnSms.addEventListener('click' , sendAsms)


    
    function checkGuess(){
        let input = Number(document.getElementById('guessfield').value)
        let randomN = Math.floor(Math.random()*(10-1)+1)
        if(input === randomN){
            alert('corect')
        }
        else{
            alert('wrong')
        }
        console.log(randomN)
    } */

 /*    function alertMath(){
        setTimeout(function(){
            alert('first fubction done')
        },2000)
        callBack()
    }
    function alertMathCallBack(){
        setTimeout(function(){
            alert('second fubction done')
        },3000)
    }
    alertMath(alertMathCallBack) */

    /* function callBackArray(array, callBack){
        let arrays = []
        for(let i = 0; i < array.length; i++){
            arrays.push(callBack(array[i]))
        }
        return arrays
    }
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    function squareNum(number){
        return number * number 
    }
    console.log(callBackArray(numbers, squareNum)) */


   /*  function callBackArray(nums, callBack){
        let sum = []
        for(let i = 0; i < array.length; i++){
            if(i % 2 !== 0){
                sum += nums[i]
            }
        }
        callBack(sum)
    }
    let array = [1, 2, 3, 48, 5, 63, 7, 81, 92, 0]
    function callBack(result){
        console.log(result)
    }
    callBackArray(array, callBack) */

/* 
    const calculateDiscountedPrice = (price, discount, callback) => {
        const discountedPrice = price - (price * discount / 100);
        callback(discountedPrice);
    };
    
    const showDiscountedPrice = (discountedPrice) => {
        console.log("Дисконтна ціна товару:", discountedPrice);
    };
    
    calculateDiscountedPrice(100, 10, showDiscountedPrice); */

  /*   const book = {
        name: 'Math',
        autor: 'Kopernik',
        year: 2018,
    }
    book.pages = 600
    delete book.name 
    console.log(book) */


    const bankAccount = {
        ownerName: "Anastasia Tsymbala",
        accountNumber: "123456789",
        balance: 0,
  
        deposit: function(amount) {
          this.balance += amount;
          updateUI();
          alert(`Рахунок поповнено на ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
        },
  
        withdraw: function(amount) {
          if (this.balance >= amount) {
            this.balance -= amount;
            updateUI();
            alert(`Знято ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
          } else {
            alert("Недостатньо коштів на рахунку.");
          }
        }
      };
  
      function updateUI() {
        document.getElementById("ownerName").textContent = bankAccount.ownerName;
        document.getElementById("accountNumber").textContent = bankAccount.accountNumber;
        document.getElementById("balance").textContent = bankAccount.balance;
      }
  
      function deposit() {
        const amount = parseFloat(prompt("Введіть суму для поповнення:"));
        if (!isNaN(amount) && amount > 0) {
          bankAccount.deposit(amount);
        } else {
          alert("Будь ласка, введіть коректну суму.");
        }
      }
  
      function withdraw() {
        const amount = parseFloat(prompt("Введіть суму для зняття:"));
        if (!isNaN(amount) && amount > 0) {
          bankAccount.withdraw(amount);
        } else {
          alert("Будь ласка, введіть коректну суму.");
        }
      }
  
      updateUI();





      const weather = {
        temperature: 0,
        humidity: 0,
        windSpeed: 0,
    
        isBelowZero: function() {
          return this.temperature < 0;
        }
      };
    
      function checkTemperature() {
        const inputTemperature = parseFloat(document.getElementById("temperature").value);
        if (!isNaN(inputTemperature)) {
          weather.temperature = inputTemperature;
          const isBelowZero = weather.isBelowZero();
          if (isBelowZero) {
            alert("Температура нижче 0 градусів Цельсія");
          } else {
            alert("Температура вище або рівна 0 градусів Цельсія");
          }
        } else {
          alert("Будь ласка, введіть коректну температуру.");
        }
      }


/*       const user = {
        name: "Anastasia",
        email: "tsymbala2007@gmail.com",
        password: "1707",
    
        login: function() {
          const enteredEmail = document.getElementById("email").value;
          const enteredPassword = document.getElementById("password").value;
          
          if (enteredEmail === this.email && enteredPassword === this.password) {
            alert("Login successful!");
          } else {
            alert("Incorrect email or password. Please try again.");
          }
        }
      }; */

      let btn = document.querySelector('.btn')

let user = {
    name: 'aa',
    password: '123',
    email: 'frog',
    
    login() {
        let userName = document.querySelector('.name')
        let userPassword = document.querySelector('.password')
        let userEmail = document.querySelector('.email')

        let userNameValue = userName.value
        let userPasswordValue = userPassword.value
        let userEmailValue = userEmail.value

        if(userEmailValue === this.email && userPasswordValue === this.password) {
            console.log('TRUE')
        }
        else {
            console.log('FALSE')
        }
    },
}

btn.addEventListener('click' ,function(){
    user.login()
})




      const movie = {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 5,
  
        isRatingAboveEight: function() {
          return this.rating > 8;
        }
      };
  
      // Функція для оновлення вмісту сторінки
      function updatePageContent() {
        document.getElementById("title").textContent = movie.title;
        document.getElementById("director").textContent = movie.director;
        document.getElementById("year").textContent = movie.year;
        document.getElementById("rating").textContent = movie.rating;
  
        // Перевіряємо рейтинг фільму та змінюємо колір тексту, якщо вище 8
        const titleElement = document.getElementById("title");
        if (movie.isRatingAboveEight()) {
          titleElement.style.color = "green";
        } else {
          titleElement.style.color = "black";
        }
      }
  
      // Оновлення вмісту сторінки при завантаженні
      updatePageContent();