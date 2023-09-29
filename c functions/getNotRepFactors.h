#include "functions.h"

int getNotRepFactors(int number, int arr[]){

    int candidatePrime = 2, i = 0, arrIndex = 0, cuttedNum = number;

    for (i = 2; i < number; i++){
        if(cuttedNum <= 1) break;
        if(!isPrime(i)) continue;
        if(cuttedNum % i == 0){
            arr[arrIndex] = i;
            //printf("fator: %d\n", i);
            arrIndex++;
            cuttedNum = cuttedNum / i;
        }
    }
    return arrIndex;
}