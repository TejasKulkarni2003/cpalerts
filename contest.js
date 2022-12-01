
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

// var data;
// fetch('https://codeforces.com/api/contest.list?gym=true')
// .then((data)=> {
//     return data.json();
// })
// .then((data)=> console.log(data.result[1472]))


var data;
fetch('https://clist.by/api/v1/contest/?username=Tejas_11K&api_key=b2e8ad0a7b2b2fc0e702335bd482fc318d6f4845')
.then((data)=> {
    return data.json();
})
.then((data)=> console.log(data))
