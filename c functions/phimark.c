#include <stdio.h>
#include <math.h>

int isPrime(int n){
    if(n < 2) return 0;
    if(n % 2 == 0) return 0;

    for (int i = 3; i * i <= n; i += 2) {
        if(n % i == 0) return 0;
    }

    return 1;
}

int getNotRepFactors(int number, int arr[]){

    int candidatePrime = 2, i = 0, arrIndex = 0;

    for (i = 2; i < number; i++){
        if(!isPrime(i)) continue;

        if(number % i == 0){
            arr[arrIndex] = i;
            arrIndex++;
            number = number / i;
        }
    }
    return arrIndex;
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
        printf("formula %lf\n", formula);
    }
    
    return formula;
}

int main(int argc, char const *argv[]){
    int number;
    printf("qual vai ser seu belo phi hj? ");
    scanf("%d", &number);
    printf("phi foda: %d\n", phi(number));
    return 0;
}
