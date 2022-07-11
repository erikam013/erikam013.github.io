Array = [1, 2, 3, 4, 5, 6];
A = [1,2,3];
B = [2, 2, 2];



function Sum (A){
    let tamanho = A.length;
    let soma = 0;
    for(i = 0; i < tamanho; i++){
        soma += A[i];
    }
    console.log(soma);
}

Sum(B);
Sum(Array);
Sum(A);

