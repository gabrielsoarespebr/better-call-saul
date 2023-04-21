import style from "./style.module.css"

export const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensagem enviada. Entrarei em contato em breve.");
    }

    return (
        <form action="" className={style.form}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input id="name" type="text" placeholder="Heisenberg" />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input id="email" type="email" placeholder="heisenberg@riseup.net" />
            </div>
            <div >
                <label htmlFor="subject">Assunto:</label>
                <select name="subject" id="subject">
                    <option value="">(Selecione o assunto)</option>
                    <option value="0">Consultoria jurídica</option>
                    <option value="1">Questões de família (divórcio, herança etc)</option>
                    <option value="2">Dano moral e/ou material</option>
                    <option value="3">Questões fiscais e tributárias</option>
                    <option value="4">Questões criminais (drogas, homicídio etc)</option>
                    <option value="5">Análise e elaboração de contratos</option>
                    <option value="6">Direito do consumidor</option>
                    <option value="7">Questões trabalhistas</option>
                    <option value="8">Questões imobiliárias</option>
                    <option value="9">Outros assuntos</option>
                </select>
            </div>

            <textarea name="message" id="message" cols="50" rows="5" style={{ resize: 'none' }} placeholder="Insira aqui sua mensagem"></textarea>
            <div>
                <label htmlFor="urgency">É caso de vida ou morte?</label>
                <input type="radio" name="urgency" id="highPriority" value="0" /><label htmlFor="highPriority">Sim</label>
                <input type="radio" name="urgency" id="lowPriority" value="1" /><label htmlFor="highPriority">Não</label>
            </div>
            <div>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Concordo que Saul Goodman é o melhor advogado de todos os tempos.</label>
            </div>
            <button className={style.btnContact} onClick={handleSubmit}>Enviar mensagem</button>
        </form>
    )
}