class DisciplinaService {

    constructor(alunoService) {
        this.repositorio = new DisciplinaRepositorio();
        this.alunoService = alunoService;
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAlunoNaDisciplina(matricula, codigo) {
        const alunoPesquisado = this.alunoService.pesquisarPorMatricula(matricula);
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);

        if (alunoPesquisado.length === 0) {
            throw new Error('Aluno inexistente!')
        }

        if (disciplinaPesquisada.length === 0) {
            throw new Error('Disciplina inexistente!')
        }

        if (disciplinaPesquisada[0].alunos.some(aluno => aluno.matricula === matricula)) {
            throw new Error('Aluno já cadastrado na disciplina!');
        }

        this.repositorio.inserirAlunoNaDisciplina(alunoPesquisado[0], disciplinaPesquisada[0]);
    }

}