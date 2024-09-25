const monthName = document.getElementById("month-name")
const dayName = document.getElementById("day")
const dayNum = document.getElementById("number")
const year = document.getElementById("year")

const date = new Date();
const month = date.getMonth()
monthName.innerText = date.toLocaleDateString("en", {
  month:"long"
})

dayName.innerText = date.getDay()
dayName.innerText = date.toLocaleTimeString("en",{
  weekday:"long"
})
dayNum.innerText = date.getDate()
year.innerText = date.getFullYear()
