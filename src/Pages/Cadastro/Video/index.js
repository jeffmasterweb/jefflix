import React, { useEffect, useState } from 'react'
import PageDefault from '../../../Components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChange, values } = useForm({
        titulo: 'Vídeo padrão',
        url: 'https://www.youtube.com/watch?v=uy1tiAPGW2k',
        categoria: 'Front End',
    });

    useEffect(() => {
        categoriasRepository
        .getAll()
        .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
        });
       
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <from onSubmit={(event) => {
                event.preventDefault();
                // alert('Vídeo cadastrado com sucesso!!!');

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
                })

                .then(() => {

                history.push('/');
                });

                
            }} >
                <FormField
                label="Título do Vídeo"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
                />

                <FormField
                label="URL"
                name="url"
                value={values.url}
                onChange={handleChange}
                />

                <FormField
                label="Categoria"
                name="categoria"
                value={values.categoria}
                onChange={handleChange}
                suggestions={categoryTitles}
                />

                <Button type="submit">
                Cadastrar
                </Button>

            </from>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}
