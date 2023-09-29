#include <stdio.h>
#include <string.h>

int main(){
    char text[10];
    int i, size, number[10];
    
    printf("Digite os digitos ASCII: ");
    for(i=0;i<10;i++){
        scanf("%d", &number[i]);
    }

    for(i=0;i<10;i++){
        text[i] = number[i];
    }

    printf("%s\n", text);

    return 0;
}