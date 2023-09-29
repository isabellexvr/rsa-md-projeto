#ifndef FUNCTIONS_H
#define FUNCTIONS_H

int isPrime(int n);

int getNextPrime(int n);

int mdc(int n1, int n2, int resto);

int totient(int number);

int extendMDC(int n1, int n2, int resto, int *addressA, int *addressB);

int inverso(int num1, int num2);

int fermatEuler(int b, int e, long long int m);

int getAllFactors(int number, int arrIndex, int arr[]);

int getNotRepFactors(int number, int arr[]);

int modThroughFactors(int base, int exp, int mod);


#endif // FUNCTIONS_H