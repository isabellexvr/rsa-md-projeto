#include <stdio.h>
#include <gmp.h>
#include "functions.h"

void expMod(mpz_t result, const mpz_t base, const mpz_t exponent, const mpz_t modulus) {
    mpz_powm(result, base, exponent, modulus);
}

int main(int argc, char const *argv[]){
    mpz_t p, q, e, n, product, num1, num2, inverse;

    mpz_init(p);
    mpz_init(q);
    mpz_init(e);
    mpz_init(n);
    mpz_init(product);
    mpz_init(num1);
    mpz_init(num2);
    mpz_init(inverse);

    // Solicitar p, q e e do usuário
    printf("Digite p: ");
    gmp_scanf("%Zd", p);
    printf("Digite q: ");
    gmp_scanf("%Zd", q);
    printf("Digite e: ");
    gmp_scanf("%Zd", e);

    // Calcular n e produto (phi)
    mpz_mul(n, p, q);
    mpz_sub_ui(p, p, 1);
    mpz_sub_ui(q, q, 1);
    mpz_mul(product, p, q);

    // Calcular o inverso de e mod product
    mpz_invert(inverse, e, product);

    // Abra o arquivo de entrada
    FILE *inputFile = fopen("valores_encriptados.txt", "r");
    if (inputFile == NULL) {
        perror("Erro ao abrir o arquivo de entrada");
        return 1;
    }

    printf("Valores descriptografados:\n");

    FILE *outputFile = fopen("mensagem_descriptografada.bin", "wb"); // Abrir em modo binário
    if (outputFile == NULL) {
        perror("Erro ao abrir o arquivo de saída");
        return 1;
    }

    mpz_t ciphertext;
    mpz_init(ciphertext);

    while (gmp_fscanf(inputFile, "%Zd", ciphertext) != EOF) {
        mpz_t ascii;
        mpz_init(ascii);

        // Descriptografa o valor e armazena em ascii
        expMod(ascii, ciphertext, inverse, n);

        unsigned long int asciiValue = mpz_get_ui(ascii);
        char decryptedChar = (char)asciiValue;
        printf("%c", decryptedChar);

        // Escreva o caractere descriptografado no arquivo binário
        fwrite(&decryptedChar, sizeof(char), 1, outputFile);

        mpz_clear(ascii);
    }

    printf("\n");

    // Feche os arquivos
    fclose(inputFile);
    fclose(outputFile);

    // Libere a memória alocada
    mpz_clear(p);
    mpz_clear(q);
    mpz_clear(e);
    mpz_clear(n);
    mpz_clear(product);
    mpz_clear(num1);
    mpz_clear(num2);
    mpz_clear(inverse);
    mpz_clear(ciphertext);

    return 0;
}
