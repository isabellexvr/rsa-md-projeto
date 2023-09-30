#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include <gmp.h>
#include "functions.c"

void expMod(mpz_t result, const mpz_t base, const mpz_t exponent, const mpz_t modulus) {
    mpz_powm(result, base, exponent, modulus);
}

int main(int argc, char const *argv[])
{
    int option;
    printf("Quer fazer o que, meu cumpadre?\n");
    printf("1. Gerar chave pública\n2. Encriptar\n3. Desencriptar\n");
    scanf("%d", &option);
    if (option == 1) {
        int p, q, e, flag = 0;
        printf("Entre um par de números p e q, primos, e um expoente e, relativamente a (p-1)(q-1): \n");
        scanf("%d%d%d", &p, &q, &e);

        while (!flag) {
            if (mdc(e, (p - 1) * (q - 1), 0) != 1) {
                printf("p e q não são relativamente primos a (p-1)(q-1), tente novamente.\n");
            }

            if (!isPrime(q) || !isPrime(p)) {
                printf("p e q não são primos tente novamente.\n");
            }

            if (e > (p - 1) * (q - 1)) {
                printf("p e q não são primos tente novamente.\n");
            }

            if (isPrime(q) && isPrime(p) && mdc(e, (p - 1) * (q - 1), 0) && e < (p - 1) * (q - 1)) {
                flag = 1;
            }
        }

        printf("Chave pública: n = %d e = %d\n", p * q, e);

        FILE *file = fopen("chave_publica.txt", "w");
        if (file == NULL) {
            perror("Erro ao abrir o arquivo");
            return 1;
        }

        fprintf(file, "%d %d", p * q, e);
        fclose(file);

    }else if(option == 2){

        char stringMessage[3000];
        int i, arrSize;
        mpz_t asciiNum, n_mpz, e_mpz, result;

        mpz_init(asciiNum);
        mpz_init(n_mpz);
        mpz_init(e_mpz);
        mpz_init(result);

        printf("Digite a sua mensagem: ");
        scanf(" %[^\n]s", stringMessage);

        // Ler os valores de n e e do arquivo "chave_publica.txt"
        FILE *keyFile = fopen("chave_publica.txt", "r");
        if (keyFile == NULL) {
            perror("Erro ao abrir o arquivo de chave pública");
            return 1;
        }

        gmp_fscanf(keyFile, "%Zd", n_mpz);
        gmp_fscanf(keyFile, "%Zd", e_mpz);

        fclose(keyFile);

        arrSize = strlen(stringMessage);

        // Crie uma array dinâmica para armazenar os valores encriptados
        mpz_t *encryptedValues = malloc(arrSize * sizeof(mpz_t));

        printf("Mensagem encriptada: ");
        for (i = 0; i < arrSize; i++) {
            // Pré-codificação:
            mpz_set_ui(asciiNum, (unsigned int)stringMessage[i]);
            mpz_init(encryptedValues[i]);
            expMod(encryptedValues[i], asciiNum, e_mpz, n_mpz);

            gmp_printf("%Zd ", encryptedValues[i]);
        }
        printf("\n");

        // Salve os valores encriptados em um arquivo
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
    }else if(option == 3){
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

        printf("A famigerada mensagem:\n");

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
    }

    return 0;
}
