class DisciplinaControlador {

    constructor(alunoControlador) {
        this.servico = new DisciplinaService(alunoControlador.servico);
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nomeDisciplina");
        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);

        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Codigo: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirAluno() {
        const codigoDisciplinaElemento = document.querySelector("#disciplinaCodigo");
        const matriculaElemento = document.querySelector("#alunoMatricula");
        this.servico.inserirAlunoNaDisciplina(matriculaElemento.value, codigoDisciplinaElemento.value);
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

    listarAlunos() {
        const codigoDisciplinaElemento = document.querySelector("#disciplinaCodigoConsulta");
        const listaAlunosElemento = document.querySelector("#listaAlunosDisciplina");
        const alunos = this.servico.pesquisarPorCodigo(codigoDisciplinaElemento.value)[0].alunos;
        listaAlunosElemento.innerHTML = "";
        alunos.forEach(aluno => {
            this.inserirAlunoNoHtml(aluno, listaAlunosElemento);
        });
    }
}