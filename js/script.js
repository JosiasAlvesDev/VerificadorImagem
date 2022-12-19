function verificar(){
    var data = new Date();   //Pegando a data atual no meu sistema;
    var ano = data.getFullYear();  ///Pegando o ano atual com 4 digitos;
    var FormularioAno = document.getElementById('txtano');  //Pegando o ano de nascimento que o usuario informou;
    var res = document.getElementById('resultado');               //Pegando o resultado da minha div;

    //Verificar se o ano que o usuario informou é maior que o ano atual;
    if (FormularioAno.value.length == 0 || FormularioAno.value > ano) {
        window.alert("Verifique os dados e tente novamente");
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(FormularioAno.value);
        var genero = ``
        //Criando uma variavel com o id
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')


        //Verificando se é amsculino ou feminino
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'img/criancaMasc.jpg')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src' , 'img/jovemMasc.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src' , 'img/adultoMasc.jpg')
            }else if (idade < 120) {
                //Idoso
                img.setAttribute('src' , 'img/idosoMasc.jpg')
            }else{
                //está morto
            }
        }else{
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'img/criancaFemi.jpg')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src' , 'img/jovemFemi.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src' , 'img/adultoFemi.jpg')
            }else if (idade < 120) {
                //Idoso
                img.setAttribute('src' , 'img/idosaFemi.jpg')
            }else{
                //está morto
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o sexo ${genero} e tem ${idade} anos`
        res.appendChild(img)
    }
}