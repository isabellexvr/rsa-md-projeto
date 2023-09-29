#include <stdio.h>
#include "extendedMdc.h"

int inverso(int num1, int num2){
    int numero1, numero2;

    scanf("%d%d", &numero1, &numero2);
    
    extendMDC(numero1, numero2, 0, &numero1, &numero2);
    
    return 0;
}