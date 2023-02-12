const weekDays = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednessday",
                "Thursday",
                "Friday",
                "Saturday"
            ];
           const month_days = [
               "January",
               "February",
               "March",
               "April",
               "May",
               "June",
               "July",
               "August",
               "September",
               "October",
               "November",
               "December"
               ]
        
        const time_show = document.querySelectorAll('.time-show');
        const day_show  = document.querySelectorAll('.days');
        const dayt = document.querySelector(".dayT");
        const greetings = document.querySelector('.greets');
               
             
            let dayTime = 24 * 60 * 60 * 1000;
            //let dateTime = Math.floor(Date.getHours() * 60 * 60 * 1000);
            //let rDay =  Math.floor(dayTime / dateTime);
            let hourR = new Date().getHours();
            
        /*function calcDay(hours) {
            
            if(hours <= 12){
                dayt.textContent = "AM";
            }
            else {
                dayt.textContent = "PM";
            }
        }
        console.log(calcDay(dayT));*/
            function addZero(item) {
                    if(item < 10) {
                     return item = `0${item}`
                    }
                    else {
                        return item
                    }
                }
            function time() {
                let todayH = new Date().getHours();
                let greet = todayH + 12;
                greet = todayH ? 12 : todayH;
                if(todayH <= 11) {
                    greetings.textContent= 'Good Morning 🌅';
                }else if (todayH <= 15){
                     greetings.textContent = 'Good Afternoon ☀️';
                }else if (todayH <= 21) {
                    greetings.textContent = 'Good Evening 🌆';
                }
                else {
                    greetings.textContent = 'Good Night 🌃';
                }
      
             let ampm = todayH >= 12 ? 'pm' : 'am';
             todayH = todayH % 12;
             todayH = todayH ? todayH : 12;
                const todayM = new Date().getMinutes();
                const todayS = new Date().getSeconds();
                const times = [todayH, todayM, todayS];
          dayt.textContent = ampm;
                time_show.forEach((time, value) => {
                    time.textContent = addZero(times[value]);
                })

            }
            function day() {
                const day = new Date().getDay();
                const day1 = new Date().getDate();
                const month = new Date().getMonth();
                const year = new Date().getFullYear();
                var dayT;
                switch (day1) {
                    case 1: 
                      dayT = 'st';
                    break;
                    case 2: 
                      dayT = 'nd';
                    break;
                    case 3: 
                      dayT = "rd";
                    break;
                    default: 
                      dayT = 'th'
                }
                const dates = [weekDays[day] + ",", month_days[month], addZero(day1) + dayT, year];
                
                day_show.forEach((days, index) => {
                    days.textContent = dates[index];
                
                })
               
               
            }
            day();
            
            time();
            let interval = setInterval(time, 1000);
            
            
            
            const formCont = document.querySelector('.formCont');
            const formBtn = document.querySelector('.btn');
            const btn2 = document.querySelector('.but');
            const inps = document.querySelector('#name');
            const warn = document.querySelector('.warn');
            const connt = document.querySelector(".container");
            let userName = document.querySelector('.nameGot');
            
            formBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if(inps.value == "") {
                    warn.textContent = "Please Input Name";
                }
                else {
                    formCont.classList.add('slideup');
                    connt.classList.add('pop');
                }
                userName.textContent = `${inps.value}😍`;
inps.value = "";
            })
            
            btn2.addEventListener('click', (e) => {
                e.preventDefault();
                formCont.classList.remove('slideup');
                    connt.classList.remove('pop')
            })
            
            
            
