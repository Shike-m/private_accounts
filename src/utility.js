
export const padLeft = (n)=>{
    return n<10?'0'+n:n;
} 

export const range = (size,startAt=0)=>{
    const arr=[];
    for(let i=0;i<size;i++){
        arr[i]=startAt+i;
    }
    return arr;
}

export const parseToYearAndMonth = (str) => {
    const date = str ? new Date(str) : new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
    }
}

export const isValidate = (date) => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!date.match(regEx)) return false;
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return false;
    return d.toISOString().slice(0, 10) === date;
}