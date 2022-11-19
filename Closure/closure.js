const outerFunc = () => {
    let counter = 0;
    console.log('OUTER SCOPE: counter =', counter);

    const innerFunc = () => {
        ++counter; 
        console.log('INNER SCOPE: counter =', counter)
        return counter
    }
    return innerFunc;
}

const initialiseClosure = outerFunc();
initialiseClosure();
initialiseClosure();
initialiseClosure();