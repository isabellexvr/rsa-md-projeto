#include <stdio.h>
//#include "fermatEuler.h"
#include <math.h>
#include <string.h>
//#include "extendedMdc.h"
#include "functions.h"

int main(int argc, char const *argv[]){
    int p, q, e, num1, num2, inverse;
    long long int n, product;

    int mockedArr[4] = {1,6,15,13};
    int mockedArrSize = 4, asciiArr[4] = {-1};
    char decryptedMessage[4];

    printf("Digite p, q e e: ");
    scanf("%d %d %d", &p, &q, &e);

    n = p*q;
    printf("valor do n: %d\n", n);

    product = (p-1)*(q-1);
    printf("produto (m): %d\n", product);

    num1 = e;
    num2 = product;

    inverse = extendMDC(num1, num2, 0, &num1, &num2);
    printf("inverso: %d\n", inverse);

    for (int i = 0; i < mockedArrSize; i++){
        int ascii;
        ascii = fermatEuler(mockedArr[i], inverse, n);
        printf("ascii: %d ", ascii);
        asciiArr[i] = ascii;
    }
    printf("\n");
    

    return 0;
}
