#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include <gmp.h>

//variáveis constantes para exponenciação modular rápida
void expMod(mpz_t result, const mpz_t base, const mpz_t expoente, const mpz_t mod) {
    mpz_powm(result, base, expoente, mod);
}

int main() {
    char stringMessage[3000];
    int i, arrSize, n, e;
    mpz_t asciiNum, n_mpz, e_mpz, result;

    mpz_init(asciiNum);
    mpz_init(n_mpz);
    mpz_init(e_mpz);
    mpz_init(result);

    printf("Digite a sua mensagem: ");
    scanf(" %[^\n]s", stringMessage);

    printf("Digite a chave pública (O par ordenado (n,e)):\n");
    printf("n(p*q): ");
    gmp_scanf("%Zd", n_mpz);
    printf("e: ");
    gmp_scanf("%Zd", e_mpz);

    arrSize = strlen(stringMessage);

    // array dinâmica para armazenar os valores encriptados
    mpz_t *encryptedValues = malloc(arrSize * sizeof(mpz_t));

    printf("Digitos ASCII da mensagem: ");
    for (i = 0; i < arrSize; i++) {
        // pré-codificação:
        mpz_set_ui(asciiNum, (unsigned int)stringMessage[i]);
        mpz_init(encryptedValues[i]);
        expMod(encryptedValues[i], asciiNum, e_mpz, n_mpz);

        gmp_printf("%Zd ", encryptedValues[i]);
    }
    printf("\n");

    // valores encriptados salvos em um arquivo
    FILE *file = fopen("valores_encriptados.txt", "w");
    if (file) {
        for (i = 0; i < arrSize; i++) {
            gmp_fprintf(file, "%Zd\n", encryptedValues[i]);
            mpz_clear(encryptedValues[i]);
        }
        fclose(file);
    } else {
        printf("Erro ao abrir o arquivo para escrita.\n");
    }


    free(encryptedValues);
    mpz_clear(asciiNum);
    mpz_clear(n_mpz);
    mpz_clear(e_mpz);
    mpz_clear(result);

    return 0;
}
