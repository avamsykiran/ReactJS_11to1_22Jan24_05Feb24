
export const sum = (a,b) => a+b;
export const dif = (a,b) => a-b;
export const prod = (a,b) => a*b;
export const qut = (a,b) => a/b;

const randomSeries = count => {
    let series = [];
    for(let i=1;i<=count;i++){
        series = [...series,Math.trunc(Math.random()*100)];
    }
    return series;
};

export default randomSeries;