export class cl_operacao {
  public valor1: number = 0;
  public valor2: number = 0;
  public tipo_operacao: number = 0;
  public resultado: number = 0;
  public str_operacao: string = '';

  // ==================================
  constructor() {
    // Cria um operacao matematica aleatoria
    this.valor1 = this.gerarValorAleatorio(1, 10);
    this.valor2 = this.gerarValorAleatorio(1, 10);
    this.tipo_operacao = this.gerarValorAleatorio(1, 4);

    switch (this.tipo_operacao) {
      case 1:
        this.resultado = this.valor1 + this.valor2;
        this.str_operacao = this.valor1 + ' + ' + this.valor2 + ' = ' + this.resultado;
        break;

      case 2:
        this.resultado = this.valor1 - this.valor2;
        this.str_operacao = this.valor1 + ' - ' + this.valor2 + ' = ' + this.resultado;
        break;

      case 3:
        this.resultado = this.valor1 * this.valor2;
        this.str_operacao = this.valor1 + ' x ' + this.valor2 + ' = ' + this.resultado;
        break;

      case 4:
        this.resultado = this.valor1 / this.valor2;
        this.str_operacao = this.valor1 + ' : ' + this.valor2 + ' = ' + this.resultado;
        break;
    }
  }

  gerarValorAleatorio(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
