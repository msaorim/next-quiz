import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[] = [

    new QuestaoModel(1, 'Quanto é 2 + 2?', [
        RespostaModel.errada('3'),
        RespostaModel.errada('5'),
        RespostaModel.certa('4'),
        RespostaModel.errada('2')
    ]),
    new QuestaoModel(2, 'Quanto é 2 x 6?', [
        RespostaModel.errada('13'),
        RespostaModel.errada('15'),
        RespostaModel.errada('14'),
        RespostaModel.certa('12')
    ]),
    new QuestaoModel(3, 'Quanto é 2 ao quadrado?', [
        RespostaModel.errada('3'),
        RespostaModel.errada('5'),
        RespostaModel.certa('4'),
        RespostaModel.errada('2')
    ])
]

export default questoes