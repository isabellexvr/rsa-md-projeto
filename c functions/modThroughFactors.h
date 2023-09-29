#include <math.h>
//#include "isPrime.h"
#include "functions.h"

int modThroughFactors(int base, int exp, int mod){
    int factors[10] = {0}, pendente = 1, arrSize;
    long long int novaBase = base;

    if(isPrime(exp)){
        pendente = base;
        exp --;
    }

    arrSize = getAllFactors(exp, 0, factors);

    for (int i = 0; i < (arrSize ); i++){
        //printf("fator: %d\n", factors[i]);
        long long int squared;
        squared = pow(novaBase, factors[i]);
        //printf("elevado ao quadrado: %d\n", squared);
        novaBase = squared % mod;

    }

    novaBase *= pendente;
    //printf("pendente %d\n", pendente);
    //printf("nova base %d\n", novaBase);

    return novaBase;
}