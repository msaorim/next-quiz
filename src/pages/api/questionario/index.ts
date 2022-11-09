/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

import { embaralhar } from '../../../functions/arrays'
import questoes from '../questoes/questoes_banco'

export default (req, res) => {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}