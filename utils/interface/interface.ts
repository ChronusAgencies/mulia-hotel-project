import React, { HTMLProps } from "react";

export interface classProps extends IMessageData{
    name?: string,
    clickEvent?: (event: React.MouseEvent<HTMLElement>) => void,
    children?: React.ReactNode
}

export interface IMessageData{
    messages : string | null | undefined,
    time : string | null
}