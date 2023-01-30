const tableTag = document.querySelector("#day"),
monthTag = document.querySelector("#month");

let dateToday = new Date(), 
currentYear = 0,
currentMonth = 0;

function getToday(){
    currentYear = dateToday.getFullYear();
    currentMonth = dateToday.getMonth();
}
getToday()

const months_en = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"] 

const renderCalendar = () =>{
    let firstDayCurrentMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDayCurrentMonth = new Date(currentYear, currentMonth+1,0).getDay();

    let lastDateCurrentMonth = new Date(currentYear, currentMonth+1, 0).getDate(),
    lastDateLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    
    let td_tag="",
    td_count=0,
    tr_tag="";
    //days before 1st
    for(let i=firstDayCurrentMonth; i>0; i--){
        td_tag += `<td class="inactive"><font class="f">${lastDateLastMonth-i+1}</font></td>`
        td_count++;
        checkTr();
    }
    //days in the month
    for(let i=1;i<=lastDateCurrentMonth;i++){
        if (i===dateToday.getDate() && currentYear === dateToday.getFullYear() && currentMonth === dateToday.getMonth()){
            td_tag += `<td class="active today"><font class="f">${i}</font></td>`
        }else{
            td_tag += `<td class="active" ><font class="f">${i}</font</td>`
        }
        td_count++;
        checkTr();
    }
    //days after last day in a month
    for(let i=lastDayCurrentMonth; i<6; i++){
        td_tag += `<td class="inactive"><font class="f">${i-lastDayCurrentMonth+1}</font></td>`
        td_count++;
        checkTr();
    }
    
    monthTag.innerHTML=`${months_en[currentMonth]} ${currentYear}`
    function checkTr(){
        if(td_count%7==0){
            tr_tag += `<tr>${td_tag}</tr>`
            td_tag=""
        }
        
    }
    tableTag.innerHTML=tr_tag;
}

function clickFunc(direction){
    function isMonth(month){
        if (month<0 || month>11){
            return false
        }else{
            return true
        }
    }
    if(direction==="next"){
        currentMonth++;
    }else if(direction==="prev"){
        currentMonth--;
    }
    if(!isMonth(currentMonth)){
        newDate = new Date(currentYear,currentMonth,1);
        currentYear = newDate.getFullYear();
        currentMonth = newDate.getMonth();
    }
    renderCalendar();

}

renderCalendar();

function display_pop_up(){
    document.getElementById("timeSelect").style.display='inline'
}

function go_to_date(){
    undisplay_pop_up()
    input = document.querySelectorAll(".windowPopUp input")
    if(input[0].value && inpuy[1].value){
        currentMonth = input[1].value
        currentYear =  input[0].value
        renderCalendar()
    }
   
}

function undisplay_pop_up(){
    document.getElementById("timeSelect").style.display='none'
}

function go_to_today(){
    undisplay_pop_up()
    getToday()
    renderCalendar()
}