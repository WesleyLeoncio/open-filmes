export class AvaliacaoRequest {
  private idFilme: string;
  private idUsuario: string;
  private nota: number;


    constructor(idFilme: string, idUsuario: string, nota: number) {
        this.idFilme = idFilme;
        this.idUsuario = idUsuario;
        this.nota = nota;
    }
}
