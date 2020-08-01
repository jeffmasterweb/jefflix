import React from 'react'
import { Link } from 'react-router-dom'
import jefflix from '../../assets/imagens/jefflix.png'
import './Menu.css'
import Button from '../Button'

export default function Menu() {
    return (
        <div>
            <nav className="Menu">
                <Link to="/">
                <img className="Logo" src={jefflix} alt="jefflix logo" />
                </Link>

                <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                    Novo vídeo
                </Button>
            </nav>
        </div>
    )
}
