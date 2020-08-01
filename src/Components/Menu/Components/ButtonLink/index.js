import React from 'react'

export default function ButtonLink(props) {
    // Props => { className: "O que alguém passar", href:"/" }
    console.log(props)
    return (
        <div>
            <a href={props.href} className={props.className}>
                {props.children}
            </a>
        </div>
    )
}
