
        let participantes = [];

        function adicionarParticipante() {
            let nome = document.getElementById("nome").value;
            if (nome && !participantes.includes(nome)) {
                participantes.push(nome);
                document.getElementById("nome").value = ""; // Limpar o campo
                atualizarLista();
            } else {
                alert("Por favor, insira um nome válido ou nome já adicionado.");
            }
        }

        function atualizarLista() {
            let lista = document.getElementById("listaParticipantes");
            lista.innerHTML = "";
            participantes.forEach(participante => {
                let item = document.createElement("li");
                item.textContent = participante;
                lista.appendChild(item);
            });
        }

        function sortearVencedor() {
            if (participantes.length === 0) {
                alert("Não há participantes para sortear.");
                return;
            }
            let vencedor = participantes[Math.floor(Math.random() * participantes.length)];
            document.getElementById("vencedor").innerText = "Vencedor: " + vencedor;
        }
 