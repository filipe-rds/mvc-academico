class Disciplina {
    
    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get nome() {
        return this._nome;
    }

    get codigo() {
        return this._codigo;
    }

    get alunos() {
        return this._alunos;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    set codigo(novoCodigo){
        this._codigo = novoCodigo;
    }

    set alunos(novosAlunos) {
        this._alunos = novosAlunos;
    }

    inserirAluno(aluno) {
        this._alunos.push(aluno);
    }
}