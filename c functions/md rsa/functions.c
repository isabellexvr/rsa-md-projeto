#include <stdio.h>
#include <string.h>
#include <math.h>
#include "functions.h"
#include <limits.h>
#include <gmp.h>


int isPrime(int n){
    if(n < 2) return 0;
    if(n != 2 && n % 2 == 0) return 0;

    for (int i = 3; i * i <= n; i += 2) {
        if(n % i == 0) return 0;
    }

    return 1;
}

int getNextPrime(int n){
    int newPrime = n + 1;
    while (!isPrime(newPrime)){
        newPrime ++;
    }

    return newPrime;
}

int mdc(int n1, int n2, int resto) { 
    while(n2!=0){ 
        resto = n1%n2; 
        n1 = n2; 
        n2 = resto; 
    } 

    return n1;
}

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

int extendMDC(int n1, int n2, int resto, int *addressA, int *addressB){
    int a=1, b=0, quociente, candidateS, s, t, mdc;
    
    *addressA = n1;
    *addressB = n2;
    
    while( (n2!=0) && (n1 % n2 != 0) ){
        resto = n1 % n2;
        quociente = n1 / n2;
        candidateS = a - (b * quociente);
        a = b;
        b = candidateS;
        n1 = n2; 
        n2 = resto; 
    }
    
    s = candidateS;
    mdc = n2;
    
    t = (mdc - (*addressA * s) ) / *addressB;
    
    if(s < 0){
        s += *addressB;
    }else if(s >= *addressB){
        s = s % *addressB;
    }
    
    return s;
}

int inverso(int num1, int num2){
    int numero1, numero2;

    scanf("%d%d", &numero1, &numero2);
    
    extendMDC(numero1, numero2, 0, &numero1, &numero2);
    
    return 0;
}

int fermatEuler(int b, int e, long long m){
    long long int maximum = LLONG_MAX;

    int newB, newE, newM, answer, totiente;
    long long int squared;
    long double exponenciacao;

    if(b > (b - m)){
        //newB = b - m;
        newB = b;
    }else{
        newB = b;
    }

    squared = pow(newB, e);
    //printf("sqr: %lld\n", squared);
    
    if((squared > maximum && squared > 0) || (squared < maximum && squared < 0)){
        //printf("execeu\n");
        totiente = totient(m);
        //printf("totiente: %d\n ", totiente);

        if(e > totiente){
            newE = e % totiente;
        }else{
            newE = totiente % e;
        }

        //printf("expoente %d \n", newE);

        if(newE > 4){
            newB = modThroughFactors(b,newE,m);
            answer = newB % m;
        }

        squared = pow(newB, newE);
        answer = squared % m;

    }else{
        answer = squared % m;
    }

    while(answer < 0){
            answer += m;
    }
    
    //printf("resultado: %d\n", answer);
    return answer;
}

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


int modThroughFactors(int base, int exp, int mod){
    int factors[10] = {0}, pendente = 1, arrSize;
    long long int novaBase = base;

    if(isPrime(exp)){
        pendente = base;
        exp --;
    }

    arrSize = getAllFactors(exp, 0, factors);

    for (int i = 0; i < (arrSize ); i++){
        printf("fator: %d\n", factors[i]);
        long long int squared;
        squared = pow(novaBase, factors[i]);
        printf("elevado ao quadrado: %lld\n", squared);
        novaBase = squared % mod;



    }

    novaBase *= pendente;
    //printf("pendente %d\n", pendente);
    //printf("nova base %d\n", novaBase);

    return novaBase;
}

int chave_privada(int totiente, int e){
    int d = 0;

    while( (d*e) % totiente != 1 ){
        d +=1;
    }

    return d;
}



