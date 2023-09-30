#include <stdio.h>
#include <math.h>
#include "functions.h"
#include <limits.h>



int main(){
    int b, e;
    long long int m;

    printf("Valor de b: ");
    scanf("%d", &b);
    printf("Valor de e: ");
    scanf("%d", &e);
    printf("Valor de m: ");
    scanf("%lld", &m);

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
    printf("totiente: %d\n ", totiente);

    if(e > totiente){
        newE = e % totiente;
    }else{
        //newE = totiente % e;
        newB = modThroughFactors(b,newE,m);
        answer = newB % m;
        while(answer < 0){
            answer += m;
        }
        printf("resultado: %d\n", answer);
        return 0;
    }

    printf("expoente %d \n", newE);

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
    
    printf("resultado: %d\n", answer);
    return answer;
}