#include <stdio.h>
#include <string.h>
#include "fermatEuler.h"

int main(int argc, char const *argv[]){
    char stringMessage[3000], asciiNumStr[3000];
    int i, arrSize, asciiNum[3000], n, e, encryptedMessage[3000], nNumOfDigits = 0, temp;

    printf("Digite a sua mensagem: ");
    scanf("%[^\n]s", stringMessage);

    printf("Digite a chave pública (O par ordenado (n,e)):\n");
    printf("n(p*q): ");
    scanf("%d", &n);
    printf("e: ");
    scanf("%d", &e);

    temp = n;
    arrSize = strlen(stringMessage);

    // guarda a quantidade de dígitos de n, para poder separar a mensagem ASCII em blocos de tamanho igual
    while (temp!=0){
        temp = temp/10;
        nNumOfDigits++;
    }
    
    printf("Digitos ASCII da mensagem: ");
    for(i = 0; i < arrSize; i++){
        //pré-codificação:
        asciiNum[i] = stringMessage[i];
        //encriptação de cada bloco:
        encryptedMessage[i] = fermatEuler(asciiNum[i], e, n);
    }
    printf("\n");

    //mensagem encriptada:
    printf("Mensagem codificada: ");
    for(i = 0; i < arrSize; i++){
        printf("%d ", encryptedMessage[i]);
    }
    printf("\n");

    // Convert asciiNum array to a number string

    asciiNumStr[0] = '\0'; // Initialize the string as empty

    for (i = 0; i < arrSize; i++) {
        char temp[10]; // Temporary string buffer to hold the integer
        sprintf(temp, "%d", asciiNum[i]);
        strcat(asciiNumStr, temp); // Concatenate the integer as a string
    }

    for ( i = 0; i < arrSize; i++){
        int num1 = asciiNumStr[i] - '0';
        //printf("é isso msm marcos santos? %d\n", num1);
        
        
    }
    

    printf("asciiNumStr: %s\n", asciiNumStr);

    return 0;
}
