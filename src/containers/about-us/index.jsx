import { AboutStyled } from "./style";
import { TitleStyled } from "../../components/title/style";

function About () {
    return (<AboutStyled>
        <TitleStyled>About us</TitleStyled>
        <p>This project was created to make converting values ​​between different currencies quick, simple, and intuitive. Whether you are planning a trip, tracking international investments, or simply curious about current exchange rates, the Currency Converter offers a practical, straightforward experience.</p>
        <p>Using up-to-date exchange rate data, the tool allows you to check conversion values ​​between various currencies in just a few clicks—hassle-free. We focus on delivering a clean, accessible interface so that anyone, regardless of their financial expertise, can use the site with ease.</p>
        <p>This project was developed as a personal learning initiative, combining modern technologies from the React ecosystem to create a functional, responsive, and easily maintainable application. The goal is to continue enhancing the site with new features over time, always striving to improve the user experience.</p>
    </AboutStyled>)
}

export default About;