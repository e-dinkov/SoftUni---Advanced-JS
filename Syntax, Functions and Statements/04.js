function identifyDate(y,m,d){
    let date = new Date(y,m - 1,d)
    date.setDate(date.getDate() -1)
    console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
}
identifyDate(2015, 5, 10)