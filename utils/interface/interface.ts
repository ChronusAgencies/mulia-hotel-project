import React, { HTMLProps } from "react";

export interface classProps{
    name?: string,
    clickEvent?: (event: React.MouseEvent<HTMLElement>) => void,
    children?: React.ReactNode
}