#include "functions.h"
//#include "isPrime.h"

int getAllFactors(int number, int arrIndex, int arr[]){
    int candidatePrime = 2;

    while (number >= 1 && candidatePrime <= number){
        if(!isPrime(candidatePrime)){
            candidatePrime ++;
            continue;
        }

        if(number % candidatePrime == 0){
            arr[arrIndex] = candidatePrime;
            arrIndex++;
            number = number / candidatePrime;
            continue;
        }else{
            candidatePrime = getNextPrime(candidatePrime);
            continue;
        }
    }
    return arrIndex;
}