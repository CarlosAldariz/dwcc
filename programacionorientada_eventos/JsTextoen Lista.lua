<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pulsador</title>


    <style>
        #cantidad_elementos{
            margin-top: 10px;
        }
    </style>
</head>


<body>
    <button id="incrementar">Incrementar Lista</button>
    <button id="reducir">Reducir Lista</button>
    <button id="reiniciar">Reiniciar Lista</button>
    <div id="cantidad_elementos">Elementos lista: 0</div>
    <ol id="lista"></ol>
    <script>
        let lista = document.querySelector("#lista")
        let cantidad_elementos = document.querySelector("#cantidad_elementos")


        function incremetarLista(){
            let li = document.createElement("li")
            let array_li = lista.querySelectorAll("li")
            let texto = prompt("Introduce o texto a escribir")
            li.textContent = texto
            lista.append(li)


            cantidad_elementos.textContent = `Elementos lista: ${array_li.length +1}`
        }


        function reducirLista(){
            let array_li = lista.querySelectorAll("li")
            if(array_li.length > 0){
                array_li[array_li.length-1].remove()
                cantidad_elementos.textContent = `Elementos lista: ${array_li.length -1}`
            }
        }


        function reiniciarLista(){
            let array_li = lista.querySelectorAll("li")
            array_li.forEach(element => {
                element.remove()
            });


            cantidad_elementos.textContent = `Elementos lista: 0`
        }


        let incrementar = document.querySelector("#incrementar")
        incrementar.addEventListener("click", incremetarLista)


        let reducir = document.querySelector("#reducir")
        reducir.addEventListener("click", reducirLista)


        let reiniciar = document.querySelector("#reiniciar")
        reiniciar.addEventListener("click", reiniciarLista)


    </script>
</body>


</html>