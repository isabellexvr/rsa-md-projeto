#include <stdio.h>

int extendMDC(int n1, int n2, int resto, int *addressA, int *addressB){
    int a=1, b=0, quociente, candidateS, s, t, mdc;
    
    *addressA = n1;
    *addressB = n2;
    
    while( (n2!=0) && (n1 % n2 != 0) ){
        resto = n1 % n2;
        quociente = n1 / n2;
        candidateS = a - (b * quociente);
        a = b;
        b = candidateS;
        n1 = n2; 
        n2 = resto; 
    }
    
    s = candidateS;
    mdc = n2;
    
    t = (mdc - (*addressA * s) ) / *addressB;

    if(s < 0){
        s += *addressB;
    }else if(s >= *addressB){
        s = s % *addressB;
    }
    
    return s;
}

int mdc(int n1, int n2, int resto) { 

    while(n2!=0){ 
        resto = n1%n2; 
        n1 = n2; 
        n2 = resto; 
    } 

    return n1;
}

int congruencia(int A, int B, int M, int numberOfSolutions){
    int solutions, s, addressA = A, addressB = B, x, solution;
    
    s = extendMDC(A,M,0, &addressA, &addressB);
    printf("A: %d, M: %d\n", A, M);
    printf("s: %d\n", s);
    
    x = B * s;

    if(x > M){
        x = x % M;
    }
    
    if(numberOfSolutions == 1){
        solution = (x + M*0);
        
        while(solution <= 0 && solution < M){
            solution += M;
        }
        
        if(solution > M){
            solution = solution % M;
        }
        
        printf("Solução: %d\n", solution);
        
        return 0;
        
    }

    for(int i = 0; i<numberOfSolutions; i++){
        
        printf("Solução %d: %d\n", i, (x + M*i));
    }
    
    return 0;
}

int main()
{
    int a, b, m, d;
    printf("Questão 8: encontrar a solução de uma congruência linear.\n");
    printf("Insira os inteiros a, b e m da congruência linear:\n");
    scanf("%d%d%d", &a, &b, &m);
    
    d = mdc(a,m,0);
    
    if( b % d != 0 ){
        printf("Não há soluções\n");
        return 0;    
    }
    
    congruencia(a/d,b/d,m/d, d);
    
    return 0;
}