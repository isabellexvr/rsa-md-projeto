#include <stdio.h>
#include <math.h>

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

int mdc(int n1, int n2, int resto) { 
    while(n2!=0){ 
        resto = n1%n2; 
        n1 = n2; 
        n2 = resto; 
    } 

    return n1;
}

int phi(int number){
    if(isPrime(number)){
        return number-1;
    }

    int factors[number/2], size;
    double formula = number;

    size = getNotRepFactors(number, factors);

    for (int i = 0; i < size; i++){
        formula = formula * (1 - (1/(double)factors[i]) );
        //printf("formula %d\n", formula);
    }
    
    return formula;
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

int modThroughFactors(int base, int exp, int mod){
    int factors[10] = {0}, pendente = 1, novaBase = base, arrSize;

    if(isPrime(exp)){
        pendente = base;
        exp --;
    }

    arrSize = getAllFactors(exp, 0, factors);

    for (int i = 0; i < (arrSize ); i++){
        printf("fator: %d\n", factors[i]);
        int squared;
        squared = pow(novaBase, factors[i]);
        //printf("elevado ao quadrado: %d\n", squared);
        novaBase = squared % mod;

    }

    novaBase *= pendente;
    //printf("pendente %d\n", pendente);
    //printf("nova base %d\n", novaBase);

    return novaBase;
}

int main(int argc, char const *argv[]){
    int newB, newE, newM, answer, totiente;
    long long int squared;
    int b,e,m; // base, expoente e valor do módulo

    printf("Insira a base, o expoente e o valor do módulo: ");
    scanf("%d%d%d", &b, &e, &m);

    newB = modThroughFactors(b,e,m);

    answer = newB % m;

    while(answer < 0){
        answer += m;
    }

    printf("%d^%d mod %d é %d\n", b,e,m,answer);
    return 0;
}
