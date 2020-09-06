import {Request, Response} from "express";


export default class ProjectController{
    async index({query}:Request, response:Response){
        const subjects = ([
            {subject: "Analise e projetos de sistemas", year: 3, course: "TINFEM"},
            {subject: "Arquitetura de computadores", year: 1, course: "TINFEM"},
            {subject: "Artes I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Artes II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Artes III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Artes IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Banco de dados", year: 2, course: "TINFEM"},
            {subject: "Bioética e biosegurança", year: 1, course: "BIOTEC"},
            {subject: "Biologia I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Biologia II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Biologia III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Biologia IV", year: 4, course: "TINFEM"},
            {subject: "Biologia molecular", year: 3, course: "BIOTEC"},
            {subject: "Bioquímica", year: 3, course: "BIOTEC"},
            {subject: "Biotecnologia ambiental e agropecuária", year: 4, course: "BIOTEC"},
            {subject: "Biotecnologia de alimentos", year: 4, course: "BIOTEC"},
            {subject: "Biotecnologia de produtos naturais e biofármacos", year: 4, course: "BIOTEC"},
            {subject: "Biotecnologia industrial", year: 4, course: "BIOTEC"},
            {subject: "Controle de qualidade de bioprodutos", year: 4, course: "BIOTEC"},
            {subject: "Educação física I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Educação física II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Educação física III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Educação física IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Engenharia de software", year: 2, course: "TINFEM"},
            {subject: "Empreendedorismo", year: 4, course: "TINFEM"},
            {subject: "Espanhol I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Espanhol II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Espanhol III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Espanhol IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Extração, purificação, isolamento e identificação de bioprodutos", year: 4, course: "BIOTEC"},
            {subject: "Fermentação", year: 3, course: "BIOTEC"},
            {subject: "Filosofia I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Filosofia II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Filosofia III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Filosofia IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Física I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Física II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Física III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Física IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Geografia I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Geografia II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Geografia III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Geografia IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "História I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "História II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "História III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "História IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Introdução a biotecnologia", year: 1, course: "BIOTEC"},
            {subject: "Introdução a informática", year: 1, course: "TINFEM"},
            {subject: "Interação homem computador", year: 4, course: "TINFEM"},
            {subject: "Inglês I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Inglês II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Inglês III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Inglês IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Linguagem de programação para web", year: 3, course: "TINFEM"},
            {subject: "Lógica e linguagem de programação", year: 1, course: "TINFEM"},
            {subject: "Português I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Português II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Português III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Português IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Matemática I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Matemática II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Matemática III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Matemática IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Metodologia", year: 4, course: "TINFEM"},
            {subject: "Práticas de laboratório em biologia", year: 2, course: "BIOTEC"},
            {subject: "Programação orientada a objetos", year: 2, course: "TINFEM"},
            {subject: "Programação para dispositivos móveis", year: 4, course: "TINFEM"},
            {subject: "Projetos I", year: 1, course: "BIOTEC"},
            {subject: "Projetos II", year: 2, course: "BIOTEC"},
            {subject: "Projetos III", year: 3, course: "BIOTEC"},
            {subject: "Química I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Química II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Química III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Química IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "Química orgânica", year: 2, course: "BIOTEC"},
            {subject: "Redes de computadores", year: 2, course: "TINFEM"},
            {subject: "Sistemas operacionais", year: 4, course: "TINFEM"},
            {subject: "Sociologia I", year: 1, course: "TINFEMBIOTEC"},
            {subject: "Sociologia II", year: 2, course: "TINFEMBIOTEC"},
            {subject: "Sociologia III", year: 3, course: "TINFEMBIOTEC"},
            {subject: "Sociologia IV", year: 4, course: "TINFEMBIOTEC"},
            {subject: "TCC", year: 4, course: "BIOTEC"},
            {subject: "Tópicos especiais em tecnologia", year: 4, course: "TINFEM"}
        ])

        const options = {where: {...query}}
            if (!query)
                delete options.where
        
        let filteredSubjects = subjects

        if(!!query.course)
            filteredSubjects = subjects.filter(subject=>subject.course.includes(String(query.course)));

        if(!!query.year)
            filteredSubjects = subjects.filter(subject=> subject.year == Number(query.year));
        
        if(!!query.year && !!query.course)
            filteredSubjects = subjects.filter(subject=>subject.course.includes(String(query.course)) && subject.year == Number(query.year));

        
        return response.json(filteredSubjects.map(filteredSubject => filteredSubject.subject))
    }
}