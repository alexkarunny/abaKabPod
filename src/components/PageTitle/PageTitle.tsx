import React from "react";

type PageTitlePropsType = {
    title: string
}

export function PageTitle(props: PageTitlePropsType) {
    debugger
    return <h1>{props.title}</h1>
}