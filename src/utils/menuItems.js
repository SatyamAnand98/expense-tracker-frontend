import { MenuItemsElements } from "../store/menuItems.enum.js";
import { menuIcons } from "./icons.js";

export const menuItems = [
    {
        id: 1,
        title: MenuItemsElements.Dashboard,
        icon: menuIcons.dashboard,
        link: "/dashboard",
    },
    {
        id: 2,
        title: MenuItemsElements.ViewTransactions,
        icon: menuIcons.transactions,
        link: "/transactions",
    },
    {
        id: 3,
        title: MenuItemsElements.Incomes,
        icon: menuIcons.trend,
        link: "/incomes",
    },
    {
        id: 4,
        title: MenuItemsElements.Expenses,
        icon: menuIcons.expenses,
        link: "/expenses",
    },
    // {
    //     id: 5,
    //     title: MenuItemsElements.Budget,
    //     icon: menuIcons.budget,
    //     link: "/budget",
    // },
    // {
    //     id: 6,
    //     title: MenuItemsElements.Reports,
    //     icon: menuIcons.reports,
    //     link: "/reports",
    // },
    // {
    //     id: 7,
    //     title: MenuItemsElements.Settings,
    //     icon: menuIcons.settings,
    //     link: "/settings",
    // },
    // {
    //     id: 8,
    //     title: MenuItemsElements.Logout,
    //     icon: menuIcons.signOut,
    //     link: "/logout",
    // },
    // {
    //     id: 9,
    //     title: MenuItemsElements.Login,
    //     icon: menuIcons.login,
    //     link: "/login",
    // },
];
