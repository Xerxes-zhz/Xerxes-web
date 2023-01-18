const tableTag = document.querySelector("#day"),
monthTag = document.querySelector("#month"),
table = document.getElementsByTagName('table')[0];

let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

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
        if (i===date.getDate() && currentYear === date.getFullYear() && currentMonth === date.getMonth()){
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
    
    monthTag.innerHTML=`${currentYear}年${currentMonth+1}月`
    function checkTr(){
        console.log(td_count)
        if(td_count%7==0){
            table.insertRow
            tr_tag = `<tr>${td_tag}</tr>`
            tableTag.innerHTML+=tr_tag;
            td_tag=""
        }
        
    }

}
renderCalendar();