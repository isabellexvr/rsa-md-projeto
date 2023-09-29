#include <stdio.h>
#include <math.h>
//#include "isPrime.h"
/*#include "mdc.h"
//#include "getNextPrime.h"
#include "getNotRepFactors.h"
#include "totient.h"
//#include "getAllFactors.h"
#include "modThroughFactors.h"*/
#include "functions.h"

int fermatEuler(int b, int e, long long int m){
    int newB, newE, newM, answer, totiente;
    long long int squared;

        if(b == 10){
        newB = modThroughFactors(b,e,m);
        answer = newB % m;
        while(answer < 0){
            answer += m;
        }
        return answer;
    }

    if(b > (b - m)){
        newB = b - m;
    }else{
        newB = b;
    }

    totiente = totient(m);

    if(e > totiente){
        newE = e % totiente;
    }else{
        newE = totiente % e;
    }

    //printf("expoente %d \n", newE);

    if(newE > 4){
        newB = modThroughFactors(b,newE,m);
        answer = newB % m;
        while(answer < 0){
            answer += m;
        }
        return answer;
    }

    squared = pow(newB, newE);

    answer = squared % m;

    while(answer < 0){
        answer += m;
    }
    
    return answer;
}