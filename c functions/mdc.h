int mdc(int n1, int n2, int resto) { 
    while(n2!=0){ 
        resto = n1%n2; 
        n1 = n2; 
        n2 = resto; 
    } 

    return n1;
}