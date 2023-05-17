const isValidNumber = num => {
    const parsedNum = parseInt(num)

    if(!isFinite(parsedNumb) || isNaN(parsedNum))
        return false;

    if(parsedNum != num)
        return false;
    
    return parsedNum>=1 && parsedNum<=9;
}