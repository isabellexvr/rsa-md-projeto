#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include "fermatEuler.h"

int main(int argc, char const *argv[]){
    char stringMessage[3000], asciiNumStr[3000];
    int i, arrSize, asciiNum[3000], n, e, encryptedMessage[3000];

    printf("Digite a sua mensagem: ");
    scanf("%[^\n]s", stringMessage);

    printf("Digite a chave pública (O par ordenado (n,e)):\n");
    printf("n(p*q): ");
    scanf("%d", &n);
    printf("e: ");
    scanf("%d", &e);

    setlocale (LC_ALL, ""); 
    setlocale(LC_ALL, "Portuguese_Brasil");
    arrSize = strlen(stringMessage);
    
    printf("Digitos ASCII da mensagem: ");
    for(i=0;i<arrSize;i++){
        //pré-codificação:
        asciiNum[i] = stringMessage[i];
        encryptedMessage[i] = fermatEuler(asciiNum[i], e, n);
    }
    printf("\n");

    //mensagem encriptada:
    printf("Mensagem codificada: ");
    for(i=0;i<arrSize;i++){
        printf("%d ", encryptedMessage[i]);
    }
    printf("\n");

    return 0;
}
