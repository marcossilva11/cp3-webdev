const btn = document.getElementById('cadastrar')

btn.addEventListener('click', (event) => {
    event.preventDefault()

    let nome = document.getElementById('nome').value
    let preco = document.getElementById('preco').value
    let categoria = document.getElementById('categoria').options[document.getElementById('categoria').selectedIndex].value

    let mensagem = document.getElementById('mensagem')
    mensagem.textContent = ''

    const lista = document.getElementById('lista-produtos')
    const formulario = document.getElementById('formulario')

    if (!nome || !preco || !categoria) {
        mensagem.textContent = 'Preencha todos os campos!'
        return
    }

    preco = preco.replace(',', '.')
    const precoFormatado = parseFloat(preco)

    if (isNaN(precoFormatado)) {
        mensagem.textContent = 'Preço inválido, deve ser um número!'
        return
    } else if (precoFormatado < 0) {
        mensagem.textContent = 'O preço deve ser maior ou igual a 0!'
        return
    }

    let li = document.createElement('li')
    li.textContent = `Produto: ${nome} - R$ ${precoFormatado.toFixed(2)} - Categoria: ${categoria}`

    if (categoria === 'tecnologia') {
        li.classList.add('tecnologia')
    } else if (categoria === 'alimentos') {
        li.classList.add('alimentos')
    }

    lista.appendChild(li)
    mensagem.textContent = 'Produto cadastrado com sucesso!'

    formulario.reset()
})


