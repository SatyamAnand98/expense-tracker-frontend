import axios from "axios";
import React, { useContext, useState } from "react";
import { AppConfigs } from "../store/configs.js";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        try {
            const response = await axios.post(
                `${AppConfigs.BACKEND_API_URL}/add-income`,
                income
            );
            // setIncomes([...incomes, response.data]);
            getIncome();
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const getIncome = async () => {
        try {
            const response = await axios.get(
                `${AppConfigs.BACKEND_API_URL}/get-incomes`
            );
            setIncomes(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const deleteIncome = async (id) => {
        try {
            await axios.delete(
                `${AppConfigs.BACKEND_API_URL}/delete-income/${id}`
            );
            getIncome();
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount;
        });

        return totalIncome;
    };

    const addExpense = async (expense) => {
        try {
            const response = await axios.post(
                `${AppConfigs.BACKEND_API_URL}/add-expense`,
                expense
            );
            // setExpenses([...expenses, response.data]);
            getExpense();
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const getExpense = async () => {
        try {
            const response = await axios.get(
                `${AppConfigs.BACKEND_API_URL}/get-expenses`
            );
            setExpenses(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(
                `${AppConfigs.BACKEND_API_URL}/delete-expense/${id}`
            );
            getExpense();
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense = totalExpense + expense.amount;
        });

        return totalExpense;
    };

    const totalBalance = () => {
        return totalIncome() - totalExpense();
    };

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        return history.slice(0, 3);
    };

    return (
        <GlobalContext.Provider
            value={{
                error,
                incomes,
                expenses,
                addIncome,
                setError,
                getIncome,
                setIncomes,
                setExpenses,
                totalIncome,
                addExpense,
                getExpense,
                totalExpense,
                totalBalance,
                transactionHistory,
                deleteIncome,
                deleteExpense,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
