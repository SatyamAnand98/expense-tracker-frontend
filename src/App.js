import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts.js";
import { Orb } from "./Components/Orb/Orb.js";
import Navigation from "./Components/Navigation/Navigation.js";
import { useState, useMemo } from "react";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Expenses from "./Components/Expenses/Expenses.js";
import Incomes from "./Components/Incomes/Incomes.js";
import { MenuItemsElements } from "./store/menuItems.enum.js";
import { useGlobalContext } from "./context/globalContext.js";

function App() {
    const [active, setActive] = useState("Dashboard");
    const global = useGlobalContext();

    const orbMemo = useMemo(() => {
        return <Orb />;
    }, []);

    const displayData = () => {
        switch (active) {
            case MenuItemsElements.Dashboard:
                return <Dashboard />;
            case MenuItemsElements.ViewTransactions:
                return <Dashboard />;
            case MenuItemsElements.Incomes:
                return <Incomes />;
            case MenuItemsElements.Expenses:
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <>
            <AppStyled bg={bg} className="App">
                {orbMemo}
                <MainLayout>
                    <Navigation active={active} setActive={setActive} />
                    <main>{displayData()}</main>
                </MainLayout>
            </AppStyled>
        </>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${(props) => props.bg});
    position: relative;
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

export default App;
