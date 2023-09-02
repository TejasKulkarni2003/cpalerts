let responsec = fetch("https://kontests.net/api/v1/code_chef")
console.log(responsec)
responsec.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest)
    var v = contest[contest.length-1].name
    showcc(contest);
})

let responsel = fetch("https://kontests.net/api/v1/leet_code")
responsel.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest)
    showlc(contest);
})


let responsecf = fetch("https://kontests.net/api/v1/codeforces")
responsecf.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest)
    showcf(contest);
})

function showcc(data){
    var latest = data.length-1;
    var localDate = new Date(data[latest].start_time)
    console.log(localDate)
    var s = localDate + " ";
    console.log(s)
    var day = s.slice(0, 3)
    var time = s.slice(16, 24)
    var conDate = s.slice(4, 16)

    setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = localDate.getTime() - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("t1").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("t1").innerHTML = "EXPIRED";
        }
      }, 1000);
    
    $("#con-namecc").text(data[latest].name);
    $("#datecc").text("Date :  " + conDate + "( " + day + " )")
    $("#stcc").text("Time :  " + time)
    $("#durcc").text("Duration " + Number(data[latest].duration)/3600 + " Hrs")
    $("#cc-btncc").click(function(){
        window.location.href = data[latest].url;
    })
    $("#con-namecc").click(function(){
        window.location.href = data[latest].url;
    })

}


function showlc(data){
    var latest = data.length-1;
    var localDate = new Date(data[latest].start_time)
    console.log(localDate)
    var s = localDate + " ";
    console.log(s)
    var day = s.slice(0, 3)
    var time = s.slice(16, 24)
    var conDate = s.slice(4, 16)

    setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = localDate.getTime() - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("t3").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("t3").innerHTML = "EXPIRED";
        }
      }, 1000);
    
    $("#con-namelc").text(data[latest].name);
    $("#datelc").text("Date :  " + conDate + "( " + day + " )")
    $("#stlc").text("Time :  " + time)
    $("#durlc").text("Duration " + Number(data[latest].duration)/3600 + " Hrs")
    $("#cc-btnlc").click(function(){
        window.location.href = data[latest].url;
    })
    $("#con-namelc").click(function(){
        window.location.href = data[latest].url;
    })

}


function showcf(data){
    var latest = 0;
    var localDate = new Date(data[latest].start_time)
    console.log(localDate)
    var s = localDate + " ";
    console.log(s)
    var day = s.slice(0, 3)
    var time = s.slice(16, 24)
    var conDate = s.slice(4, 16)

    setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = localDate.getTime() - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("t2").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("t2").innerHTML = "EXPIRED";
        }
      }, 1000);
    
    $("#con-namecf").text(data[latest].name);
    $("#datecf").text("Date :  " + conDate + "( " + day + " )")
    $("#stcf").text("Time :  " + time)
    $("#durcf").text("Duration " + Number(data[latest].duration)/3600 + " Hrs")
    $("#cc-btncf").click(function(){
        window.location.href = data[latest].url;
    })
    $("#con-namecf").click(function(){
        window.location.href = data[latest].url;
    })

}
