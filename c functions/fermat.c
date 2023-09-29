#include <stdio.h>
#include <math.h>
//#include "isPrime.h"
#include "mdc.h"
#include "getNextPrime.h"
#include "getNotRepFactors.h"
#include "totient.h"
#include "getAllFactors.h"
#include "modThroughFactors.h"

int fermatEuler(int b, int e, int m){
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

int main(int argc, char const *argv[]){
    int newB, newE, newM, answer, totiente;
    long long int squared;
    int b,e,m; // base, expoente e valor do módulo

    printf("Insira a base, o expoente e o valor do módulo: ");
    scanf("%d%d%d", &b, &e, &m);

    if(b == 10){
        newB = modThroughFactors(b,e,m);
        answer = newB % m;
        while(answer < 0){
            answer += m;
        }
        //printf("%d^%d mod %d é %d\n", b,e,m,answer);
        return answer;
    }

    if(b > (b - m)){
        newB = b - m;
       // newB = b;
    }else{
        newB = b;
    }

    totiente = totient(m);
    //printf("phi de %d: %d \n", m,totiente);

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
        //printf("%d^%d mod %d é %d\n", b,e,m,answer);
        return answer;
    }

    squared = pow(newB, newE);

    answer = squared % m;

    //printf("resposta antes: %d\n", answer);

    while(answer < 0){
        answer += m;
    }

    //printf("novas vars: %d^%d mod %d\n", newB, newE, m);

    //printf("valor elevado ao quadrado: %lld\n", squared);

    //printf("%d^%d mod %d é %d\n", b,e,m,answer);

    
    return answer;
}
