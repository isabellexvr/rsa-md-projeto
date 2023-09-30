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

int main(int argc, char const *argv[])
{
    int factors[10];



    for (int i = 0; i < 10; i++)
    {
        printf("fator: %d\n", factors[i]);
    }
    

    return 0;
}
