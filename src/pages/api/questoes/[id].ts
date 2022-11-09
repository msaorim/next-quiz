/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import questoes from './questoes_banco'

export default (req, res) => {
    const idSelected = +req.query.id

    const questaoAtual = questoes.filter(questao => questao.id === idSelected)

    if (questaoAtual.length === 1) {
        const questaoSelecionada = questaoAtual[0].embaralharRespostas()
        const obj = questaoSelecionada.responderCom(0).toObject()
        res.status(200).json(obj)
    } else {
        res.status(204).send()
    }
}
