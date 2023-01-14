
var i=0, j=0, k=0;
$("#menu-window").hide();

$("#hamburger").click(function(){
    $("#navb").hide();
    $("#main").hide();
    $("#title").hide();
    $("#menu-window").fadeIn(1500);
});
$("#close").click(function(){
    $("#navb").fadeIn(1500);
    $("#main").fadeIn(1500);
    $("#title").fadeIn(1500);
    $("#menu-window").hide();
})

$("#codechef").click(function(){
    if(i===0){
        $("#codechef").addClass("tch-col");
        $("#codechef").removeClass("ntch-col");
        $("#cchef").hide();
        i++;
    }
    else if(i===1){
        $("#codechef").addClass("ntch-col");
        $("#codechef").removeClass("tch-col");
        $("#cchef").show();
        i--;
    }
})

$("#codeforces").click(function(){
    if(j===0){
        $("#codeforces").addClass("tch-col");
        $("#codeforces").removeClass("ntch-col");
        $("#cforce").hide();
        j++;
    }
    else if(j===1){
        $("#codeforces").addClass("ntch-col");
        $("#codeforces").removeClass("tch-col");
        $("#cforce").show();
        j--;
    }
})

$("#leetcode").click(function(){
    if(k===0){
        $("#leetcode").addClass("tch-col");
        $("#leetcode").removeClass("ntch-col");
        $("#leetcd").hide();
        k++;
    }
    else if(k===1){
        $("#leetcode").addClass("ntch-col");
        $("#leetcode").removeClass("tch-col");
        $("#leetcd").show();
        k--;
    }
})



let responsec = fetch("https://kontests.net/api/v1/code_chef")
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

