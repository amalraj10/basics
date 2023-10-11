//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case
c=covid_data.reduce((a1,a2)=>a1[2]>a2[2]?a1:a2)
console.log(c[1]);
console.log('__________________________________');
//2. district having Highest 1st dose vaccine
d=covid_data.reduce((a1,a2)=>a1[5]>a2[5]?a1:a2)
console.log(d[1]);
console.log('__________________________________');
//3. district having lowest death rate
e=covid_data.reduce((a1,a2)=>a1[4]>a2[4]?a1:a2)
console.log(c[1]);
console.log('__________________________________');
//4. sort data with +ve case in descending order
l=covid_data.sort((d1,d2)=>d2[2]-d1[2] )
console.log(covid_data);

//5. is district with +ve cases > 15000
pv=covid_data.some(p=>p[2]>15000)
console.log(pv?'yes':'no');

console.log('_________________________');
//6. sort data with 1st dose vaccine decending order
m=covid_data.sort((d1,d2)=>d2[5]-d1[5] )
console.log(covid_data);
//7. Print Thrissur details

th=covid_data.find(nm =>nm[1]=='Thrissur')
console.log(th);

console.log('_________________________');
//8. Print total number of positive cases
k=covid_data.map(e=>e[2])
total=k.reduce((n,m)=>n+m)
console.log(total);
console.log('-------------------------------------');
//9. Print total number of curred cases
cure=covid_data.map(i=>i[4])
totall=cure.reduce((j,k)=>j+k)
console.log(totall);
console.log();
console.log('--------------------------------------');
//10. Print curred cases in Idukki

cri=covid_data.find(idk=>idk[1]=='Idukki')
console.log(cri[4]);

