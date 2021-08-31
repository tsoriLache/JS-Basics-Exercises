"use strict"
function guessCity(capital, coastal, famous, ancient) {
    if(capital&&famous&&ancient&&!coastal)return "Jerusalem";
    if(!capital&&famous&&!ancient&&coastal)return "Tel Aviv";
    if(!capital&&!famous&&ancient&&coastal)return "Acre";
    if(!capital&&!famous&&ancient&&!coastal)return"Katzrin";
    if(!capital&&!famous&&!ancient&&!coastal) return "Musmus";
}
console.log(guessCity(false, true, false, true));

