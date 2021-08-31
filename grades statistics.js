"use strict"
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92,100,120,34,75];
const secondHalfGrades=[...grades.slice(Math.floor(grades.length/2))];
function rangeOfGrades(grades)
{
    return Math.max(...grades)-Math.min(...grades);
}
function medianGrade(grades)
{
    let localGrades=grades.slice().sort(function(a, b){return a-b}); 
    return grades[Math.floor(grades.length/2)]
}

console.log("Stats:"+"\n\t"+"Range: "+rangeOfGrades(grades)+"\n\t"+"Median: "+medianGrade(grades)+"\n\t"+"Half Range: "+rangeOfGrades(secondHalfGrades));
