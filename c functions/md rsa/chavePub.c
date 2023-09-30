#include <stdio.h>
#include "functions.h"

int main(int argc, char const *argv[])
{
    int p, q, e, flag = 0;
    printf("Entre um par de números p e q, primos, e um expoente e, relativamente a (p-1)(q-1): \n");
    scanf("%d%d%d", &p,&q, &e);

    while (!flag){
        if(mdc(e, (p-1)*(q-1), 0) != 1){
            printf("p e q não são relativamente primos a (p-1)(q-1), tente novamente.\n");
        }

        if(!isPrime(q) || !isPrime(p)){
            printf("p e q não são primos tente novamente.\n");
        }

        if(e > (p-1)*(q-1)){
            printf("p e q não são primos tente novamente.\n");
        }

        if(isPrime(q) && isPrime(p) && mdc(e, (p-1)*(q-1), 0)  && e < (p-1)*(q-1)) flag = 1;
    }

    printf("chave publica: p = %d q = %d\n", p*q, e);
    

    return 0;
}
