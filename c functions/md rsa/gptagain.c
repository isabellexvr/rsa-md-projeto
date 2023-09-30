#include <stdio.h>
#include <string.h>
#include <locale.h>
#include "functions.h"
#include <math.h>

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
    for(i = 0; i < arrSize; i++){
        //pré-codificação:
        asciiNum[i] = stringMessage[i];
        encryptedMessage[i] = fermatEuler(asciiNum[i], e, n);
    }
    printf("\n");



    // Convert asciiNum array to a number string
    asciiNumStr[0] = '\0'; // Initialize the string as empty
    for (i = 0; i < arrSize; i++) {
        char temp[10]; // Temporary string buffer to hold the integer
        sprintf(temp, "%d", asciiNum[i]);
        strcat(asciiNumStr, temp); // Concatenate the integer as a string
    }

    printf("asciiNumStr: %s\n", asciiNumStr);

    // Split the number string into an integer array of two digits each
    asciiNum[0] = '\0'; // Initialize the integer array as empty
    int j = 0; // Index for the integer array

    for (i = 0; i < strlen(asciiNumStr); i += 2) {
        char temp[3]; // Temporary string buffer to hold two digits and null terminator
        strncpy(temp, &asciiNumStr[i], 2); // Copy two characters (digits)
        temp[2] = '\0'; // Null-terminate the string
        asciiNum[j] = atoi(temp); // Convert the string to an integer and store it in the array
        j++;
    }

    // Print the integer array of two-digit integers
    printf("Integer array: ");
    for (i = 0; i < j; i++) {
        printf("%d ", asciiNum[i]);
    }
    printf("\n");

    //encriptar:
    printf("Mensagem codificada: ");
    for(i = 0; i < j; i++){
        encryptedMessage[i] = fermatEuler(asciiNum[i], e, n);
        printf("%d ", encryptedMessage[i]);
    }
    printf("\n");

    return 0;
}
