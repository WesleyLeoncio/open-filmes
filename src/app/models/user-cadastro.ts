export class UserCadastro {
    private nome: string;
    private login: string;
    private senha: string;

    constructor(nome: string, login: string, senha: string) {
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }
}
