import { MenuStyled } from "./style";
import { TitleStyled } from "../../components/title/style";
import { currencyAPI } from "../../api/api.js"

function Menu() {
    return (
    <MenuStyled>
        <div id="menu-div">
            <TitleStyled>Want to convert some currency?</TitleStyled>
            <form onSubmit={currencyAPI}>
                <div className="currency-input-div">
                    <input id="amount" type="number" placeholder="Type a value" min="0" step="0.1" required/>
                    <select id="fromCurrency">
                        <option value="USD">USD - Dólar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="BRL" selected>BRL - Real</option>
                        <option value="GBP">GBP - Libra</option>
                        <option value="JPY">JPY - Iene</option>
                        <option value="CAD">CAD - Dólar Canadense</option>
                        <option value="AUD">AUD - Dólar Australiano</option>
                        <option value="CHF">CHF - Franco Suíço</option>
                        <option value="CNY">CNY - Yuan</option>
                        <option value="ARS">ARS - Peso Argentino</option>
                    </select>
                </div>
                <div className="currency-input-div">
                    <input id="convertedAmount" type="number" placeholder="Convertion result" min="0" step="0.1" readOnly/>
                    <select id="toCurrency">
                        <option value="USD" selected>USD - Dólar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="BRL">BRL - Real</option>
                        <option value="GBP">GBP - Libra</option>
                        <option value="JPY">JPY - Iene</option>
                        <option value="CAD">CAD - Dólar Canadense</option>
                        <option value="AUD">AUD - Dólar Australiano</option>
                        <option value="CHF">CHF - Franco Suíço</option>
                        <option value="CNY">CNY - Yuan</option>
                        <option value="ARS">ARS - Peso Argentino</option>
                    </select>
                </div>
                <div id='loading'>
                    <div id='spinner'></div>
                </div>
                <button type="submit" id="btn">Convert</button>
                <div id="result"></div>
            </form>
        </div>
    </MenuStyled>
    )
}

export default Menu;