import React from "react";
import { IoMdMoon, IoMdSunny} from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import { LocaleConsumer } from "../contexts/LocaleContext";

function GlobalNavigation() {
    return (
        <LocaleConsumer>
        {({ locale, toggleLocale, theme, toggleTheme }) => (
            <nav className="global-navigation">
                <ul>
                    <li onClick={toggleTheme}>
                        {theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
                    </li>
                    <li onClick={toggleLocale}>
                        <BsTranslate />
                    </li>
                </ul>
            </nav>
        )}
        </LocaleConsumer>
    );
}

export default GlobalNavigation;
