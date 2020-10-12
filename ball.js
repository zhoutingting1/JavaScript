/*1.计算john，mike的平均分 */
let Johnaverage = (89+120+103)/3;
let mikeaverage = (116+94+123)/3;
console.log("john的平均分是："+Johnaverage+"\n"+"mike的平均分是："+mikeaverage+"\n");
/*2.比较两队平均分，平均分高获胜 */
if(Johnaverage>mikeaverage){
    console.log("john的队伍获胜！"+"john的平均分是："+Johnaverage);
}
else if (Johnaverage<mikeaverage){
    console.log("mike的队伍获胜!"+"mike的平均分是："+mikeaverage);
}
else{
    console.log("平局！")
}
/*3改变分数来显示不同的赢家*/
let Johnaverage2 = (90+100+110)/3;
let mikeaverage2 = (95+95+120)/3;
console.log("john的平均分是："+Johnaverage2+"\n"+"mike的平均分是："+mikeaverage2+"\n");
if(Johnaverage2>mikeaverage2){
    console.log("john的队伍获胜！"+"john的平均分是："+Johnaverage2);
}
else if (Johnaverage2<mikeaverage2){
    console.log("mike的队伍获胜!"+"mike的平均分是："+mikeaverage2);
}
else{
    console.log("平局！");
}
/*4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；*/
let maryaverage = (97+134+105)/3;
if ((Johnaverage>mikeaverage)&&(Johnaverage>maryaverage)){
    console.log("john的队伍获胜！"+"john的平均分是："+Johnaverage);
}
else if ((mikeaverage>Johnaverage)&&(mikeaverage>maryaverage)){
    console.log("mike的队伍获胜!"+"mike的平均分是："+mikeaverage);
}
else if ((maryaverage>Johnaverage)&&(maryaverage>mikeaverage)){
    console.log("mary的队伍获胜！"+"mary的平均分是："+maryaverage);
}
else{
    console.log("平局！")
}
/* */