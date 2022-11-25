<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

#  ReactJS | Aula 02 🚀 

Turma Online 20 - Todas em Tech  | Front-end | Semana 14 | 2022 | { Profa } Simara Conceição


![image](https://media2.giphy.com/media/D567hs4Dex0GEnAKOY/giphy.gif)

### Combinados

* Quem puder, manter a câmera ligada durante a aula
* Sempre levantar a mão antes de falar para não interromper outras pessoas
* Enviar as dúvidas no chat para as monitoras
* Teremos o momento de prestar atenção e o momento mão no código
---
### Objetivos da aula

* Reforçar base conceitual de React e uso de React Hooks
* Realizar uma introdução aos eventos, listas e chaves e aos hooks

### Resumo
O que veremos na aula de hoje?
* Introdução aos eventos
* Listas e chaves
* Introdução aos hooks (useState e use Effect)

## Conteúdo

### `Introdução aos eventos`

Agora, sabe os eventos de interação das usuárias que a gente usa no javascript? Com react também podemos usar. :) 
Vamos aprender como usar o onChange(para capturar input), onClick(para capturar título), onSubmit(para envio de formulário). 

Mas por quê a gente não vai ver tudo de evento?
 
São muitas possibilidades e não teríamos tempo suficiente. Mas essa aula aqui é uma introdução para que você saiba que tudo isso existe e que você pode e deve continuar estudando. 

Belezinha? <3

# Listas e Chaves

Mapeando dados no React.

Talvez você esteja se sentindo um pouco confusa e se perguntando quando finalmente vai criar um projetinho inteiro e que faça sentido. Calma!

Dando spoiler, nossa última aula será para a criação de um projeto lindão, mas até lá estou te preparando pra entender os principais conceitos de react que iremos usar.

Agora chegou a vez de entendermos como lidar com listas no React. Imagina que internamente tenhamos um array de objetos de filmes assim:

```
const filmes = [
    {
        id: 1,
        nome: "The Social Dilemma",
        genero: "documentário",
        capa: "https://static.wixstatic.com/media/00d1a3_e8a01dfe8cf0489d8ed6001d1ab6286f~mv2.jpeg/v1/fill/w_1000,h_1500,al_c,q_90,usm_0.66_1.00_0.01/00d1a3_e8a01dfe8cf0489d8ed6001d1ab6286f~mv2.jpeg"

    },
    {
        id: 2,
        nome: "Us",
        genero: "terror",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png"

    },
    {
        id: 3,
        nome: "Bubble Boy",
        genero: "comédia romântica",
        capa: "https://images-na.ssl-images-amazon.com/images/I/51hCG-ULh5L._AC_SY445_.jpg"

    },
    {
        id: 4,
        nome: "Get Out",
        genero: "terror",
        capa: "https://miro.medium.com/max/675/0*afTCZX9mMynUvqi2.jpg"

    }

]

export default filmes
```
Qual seria a melhor forma de pegar esses dados e passar para nosso componente Lista que irá aparecer na nossa tela tipo na netflix, rs. Bem tipo mesmo! haha

```
import filmes from '../Services/dados'

const Lista = () =>{
    return(
        <div>
            {filmes.map(filme => 
                <div>
                    <h1 key={filme.id}>
                        {filme.nome}
                    </h1>
                    <p>
                        {filme.genero}
                    </p>
                    <img alt={filme.nome} src={filme.capa}/>
                </div>
            )
                
            }
        </div>
    )
}

export default Lista
```
# ❤️ React hooks

Em 2018, os hooks chegaram como uma solução para que não precisassemos escrever componentes usando classes.
Nós temos hooks internos, que são algumas funções prontas que podemos usar em nossos projetos de react. E temos também a possibilidade de criar nossos próprios hooks costumizados.

Quando você se deparar por aí com alguma função dentro do react escrita assim, esses são os hooks: useState, useEffect, useMemo, useCallback entre outros.

Hoje, vamos aprender useState e useEffect. Já tô ansiosa para as coisas incríveis que vamos construir juntas.

Documentação oficial: https://reactjs.org/docs/hooks-intro.html

## State - useState

Lembra o exemplo do perfil do instagram na aula anterior? Eu disse que uma das soluções para se fazer isso é usando props. 

Um complemento seria usando state, que é o super poder passado para o componente para que ele possa lidar com dados e atualizar a tela toda vez que um evento acontecer (com uma pessoa usuária interagindo ou alguma configuração que a gente tenha criado).

Vamos aprender praticando:

1) Antes de tudo você precisa importar de dentro do react o hook useState

```
import { useState } from 'react'
```

2) Dentro do seu componente antes do retorno você destrutura um array que recebe duas informações
 >> uma variável onde vamos guardar nosso valor inicial e suas futuras atualizações
 >> uma função que vai receber a lógica para atualizar a variável

```
const [contador, setContador] = useState(0)
```
> dentro do seu estado inicial podemos passar valores de qualquer tipo de dados em javacript, nesse caso aqui começamos com o número zero, mas poderia ser um array, um objeto, uma string entr outros.

3) Podemos declarar a lógica da nossa função que irá atualizar nossa variável

```
setContador(contador += 1)
```
4) Podemos dizer quando queremos que nossa função atualizadora seja chamada a partir de uma configuração ou de um evento
```
setInterval(
  setContador(contador += 1),
  1000
)
```
ou 

```
function handleClick() {
  setContador(contador += 1)
}
```
5) Usar nosso evento no html do componente

```
<button onClick= {handleClick}>click me</button>
```

6) Chamar o estado no html do
```
<p>{contador}</>
```
## UseEffect - Consumindo API em React

O useEffect é o hook que nos possibilita gerar efeitos colaterais na tela quando alguma variável modifica. Com um exemplo vai ficar bem melhor de entender. Vamos lá!

1) Antes de tudo você precisa importar de dentro do react o hook useEffect

```
import { useEffect } from 'react'
```

2) Dentro do seu componente antes do retorno chama a função useEffect que recebe dois parametros.
 >> uma arrow function que vai determinar a ação do efeito colateral
 >> um array que recebe as dependências, ou seja as variáveis que determinam quando essas mudanças devem acontecer

```
useEffect(() => {
  setLista()
}, [])
```
> quando esse array aparece vazio, significa que a interface irá receber os efeitos colaterais quando a tela for carregada

> geralmente utilizamos useEffect com useState

***
## `Mão no código`

> Para sala

| Exemplo 01 | Descrição |
| --- | --- |
| `onClick` | Mostrando no console o evento de click funcionando! |

| Exemplo 02 | Descrição |
| --- | --- |
| `OnChange` | Mostrando no console o valor digitado num formulário! |

| Exemplo 03 | Descrição |
| --- | --- |
| `Vamos criar dados internos no react` | Vamos criar uma lista com 4 objetos , onde cada um possui quatro propriedades/valores e por fim vamos mapear esses objetos na nossa tela |

| Exemplo 04 | Descrição |
| --- | --- |
| `Contador de clicks` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela a quantidade de vezes que um botão está sendo clicado. |

| Exemplo 05 | Descrição |
| --- | --- |
| `API` |  Chegou o grande momento de consumir uma api externa e renderizar os dados na tela, vamos usar o useEffect, useState e a lib Axios para isso. |

| Exemplo 06 | Descrição |
| --- | --- |
| `Busca` |  Vamos criar um componente de busca para renderizar o dado filtrado na tela, vamos usar o useEffect, useState para isso. |

> Projeto da semana

Vamos iniciar um projetinho react do zero com direito a consumo de API, eventos e hooks.

O Projetinho será: "Meu github search"
E deverá conter os componentes como descrito abaixo.

`- Eu fiz o meu, vem aqui entender melhor e se inspirar`: [Meu site](https://projetinho-react3.netlify.app/) 

> O que deve ser feito:
1) Crie um projeto react com vite
2) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu nas últimas aulas. 
3) Atenção! A entrega deverá ser feita pelo classroom e será o link do seu repositório. Arraseee! E qualquer coisa, me chama!

# Dependências
>> utilizar o npm para instalar no projeto
react-icons (incluir ícones no projeto)
axios (para consumir api)

# Componentes maiores
>> componentes que usam os componentes menores recebendos os conteúdos por props

* Bio 
* Search (atenção pois aqui recebemos os dados consumindo da API do github e fazemos a busca)

# Componentes menores

> somente o esqueleto, os conteúdos serão inclusos por props

* Title 
* Subtitle
* Text
* Image
* Header
* Footer

# Estrutura do App

> recebe todos os conteúdos que devem aparecer na tela e recebe também o conteúdo do footer e header por props


```
import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Search } from './components/Search'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meu github search" />
      <Bio />
      <Search />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App

```

<p align="center">
Feito com 💜 por Simara Conceição
</p>
#   o n 2 0 - t e t - s 1 4  
 