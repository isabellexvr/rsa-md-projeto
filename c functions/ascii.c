#include <stdio.h>
#include <string.h>

int main(){
    char message[3000];
    int i, arrSize, ascii[3000];

    printf("Digite a sua mensagem: ");
    scanf("%[^\n]s", message);

    arrSize = strlen(message);

    for(i=0;i<arrSize;i++){
        ascii[i] = message[i];
    }

    return 0;
}