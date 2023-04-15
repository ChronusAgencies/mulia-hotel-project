type TButton = {
    btnType? : "submit" | "reset" | "button",
    name? : string,
    clickEvent? : (event : React.MouseEvent<HTMLElement>) => void,
    children? : React.ReactNode
}