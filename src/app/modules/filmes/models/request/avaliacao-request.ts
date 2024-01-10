export class AvaliacaoRequest {
  private idFilme: number;
  private idUsuario: number;
  private nota: number;


    constructor(idFilme: number, idUsuario: number, nota: number) {
        this.idFilme = idFilme;
        this.idUsuario = idUsuario;
        this.nota = nota;
    }
}
