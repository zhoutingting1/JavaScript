let markBMI;
let johnBMI;
/*mark的身高体重 */
let markmass = 60;
let markheight = 1.80;
/*john的身高体重 */
let johnmass = 70;
let johnheight = 1.85;
/*mark的BMI */
markBMI = markmass/(markheight*markheight);
console.log("mark的BMI为：",markBMI);
/*john的bMI */
johnBMI = johnmass/(johnheight*johnheight);
console.log("john的BMI为：",johnBMI);
/*比较mark和john的bmi*/
let contrast = (markBMI>johnBMI)?true:false;
console.log(contrast);
/*打印字符串，包含BMI*/
console.log("mark的BMI是否比John更高？",String(contrast));
