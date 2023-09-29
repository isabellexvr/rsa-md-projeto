//#include "getNotRepFactors.h"
//#include "isPrime.h"

int totient(int number){
    if(isPrime(number)){
        return number-1;
    }

    int factors[number/2], size;
    double formula = number;

    size = getNotRepFactors(number, factors);

    for (int i = 0; i < size; i++){
        formula = formula * (1 - (1/(double)factors[i]) );
    }
    
    return formula;
}