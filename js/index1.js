// ==========================
// LISTA DE PRODUTOS COM ID AUTOMÁTICO
// ==========================
const produtos = [
  //Mercearia:
  { nome:"Arroz Parborizado Pop 1KG", preco:3.59, foto:"img/pop.png", categoria:"Mercearia", tipo:"und", ativo:1 },
  { nome:"Sal Leste 1kg", preco:1.25, foto:"img/sal.png", categoria:"Mercearia", tipo:"und", ativo:1 },

  //Frios:
  { nome:"Queijo Mussarela KG", preco:32.50, foto:"img/mussarela.png", categoria:"Frios", tipo:"kg", ativo:1 },
  { nome:"Queijo Coalho Natural KG", preco:27.99, foto:"img/coalho.png", categoria:"Frios", tipo:"kg", ativo:1 },
  { nome:"Queijo Coalho Furadinho KG", preco:27.99, foto:"img/furadinho.png", categoria:"Frios", tipo:"kg", ativo:1 },

  //Hortifruti:
  { nome:"Ovos", preco:0, foto:"img/ovos.png", categoria:"Hortifruti", tipo:"und", ativo:1, variacoes:[
    {nome:"Unidade", preco:0.70, ativo:1},
    {nome:"Meia Bandeija C/15UND", preco:8.49, ativo:1},
    {nome:"Bandeija C/30UND", preco:15.99, ativo:1},
  ]},

  //Confeitaria:
  { nome:"Chantilly Amélia Supreme 1L", preco:25.99, foto:"img/amelia.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Condensado Triangulo 395G", preco:5.49, foto:"img/leitetriangulo.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Condensado Natville 395G", preco:5.79, foto:"img/condnatvile.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Condensado Piracanjuba 395G", preco:6.49, foto:"img/leitepira.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Condensado Italac 395G", preco:6.79, foto:"img/leite.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Condensado Camponesa 395G", preco:6.99, foto:"img/condcamponesa.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Creme Culinario Triangulo 200G", preco:1.99, foto:"img/trianguloculi.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Creme Culinario Damaré 200G", preco:2.35, foto:"img/damare.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Creme De Leite Piracanjuba 200G", preco:3.25, foto:"img/cremepira.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Creme De Leite Betânia 200G", preco:3.25, foto:"img/cremebeta.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Creme De Leite Italac Leve 200G", preco:3.39, foto:"img/cremeitalac.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Liquido Integral Valedourado 1LT", preco:5.79, foto:"img/leitevale.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Liquido Integral Elegê 1LT", preco:5.79, foto:"img/leiteele.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Chocolate Fracionado 50%", preco:45.99, foto:"img/fracionado.png", categoria:"Confeitaria", tipo:"kg", ativo:1 },
  { nome:"Chocolate Doceiro 50% 1KG", preco:39.99, foto:"img/doceiro.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Chocolate Damare 50% 1KG", preco:39.99, foto:"img/damare50.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Chocolate Selecta Namur 50% 1KG", preco:45.99, foto:"img/namur.png", categoria:"Confeitaria", tipo:"und", ativo:1 },

  { nome:"Corante em Gel Vovó Deli 25G", preco:4.99, foto:"img/corante.png", categoria:"Confeitaria", tipo:"und", ativo:1, variacoes:[
    {nome:"Azul", ativo:1},
    {nome:"Azul Turquesa", ativo:1},
    {nome:"Laranja", ativo:1},
    {nome:"Rosa", ativo:1},
    {nome:"Vermelho", ativo:1},
    {nome:"Verde", ativo:1},
    {nome:"Violeta", ativo:1}
  ]},

  { nome:"Corante em Gel Vovó Deli 50G", preco:7.99, foto:"img/corante.png", categoria:"Confeitaria", tipo:"und", ativo:1, variacoes:[
    {nome:"Amarelo", ativo:1},
    {nome:"Preto", ativo:1},
    {nome:"Vermelho", ativo:1},
  ]},

  { nome:"Cake Board Redondo Liso", preco:0, foto:"img/cake.png", categoria:"Confeitaria", tipo:"und", ativo:1, variacoes:[
    {nome:"20CM", preco:3.75, ativo:1},
    {nome:"22CM", preco:4.25, ativo:1},
    {nome:"24CM", preco:4.99, ativo:1},
    {nome:"26CM", preco:5.99, ativo:1},
    {nome:"28CM", preco:6.89, ativo:1},
    {nome:"30CM", preco:7.65, ativo:1},
  ]},

  { nome:"Açucar Impalpável Harald 1KG", preco:16.99, foto:"img/harald.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Fermento Quimico Em Pó Lider 1KG", preco:24.99, foto:"img/lider.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Nutella 140G", preco:13.99, foto:"img/nutella.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Nutella 350G", preco:29.99, foto:"img/nutella.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Ninho Forti+ Instantâneo 150G", preco:7.65, foto:"img/forti+.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite Ninho Integral 350G", preco:21.99, foto:"img/ninho.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Composto Lácteo Campinho 174G", preco:3.99, foto:"img/campinho.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite em Pó CCGL 200G", preco:6.99, foto:"img/ccgl.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite em Pó Itambé 200G", preco:7.79, foto:"img/itambe.png", categoria:"Confeitaria", tipo:"und", ativo:1 },
  { nome:"Leite em Pó Camponesa 200G", preco:7.99, foto:"img/camponesa.png", categoria:"Confeitaria", tipo:"und", ativo:1 },

  //Embalagens:
  { nome:"Hamburgueira H1", preco:0, foto:"img/h1.png", categoria:"Embalagens", tipo:"und", ativo:1, variacoes:[
    {nome:"Unidades", preco:0.20, ativo:1},
    {nome:"Pacote c/100UND", preco:16.99, ativo:1},
  ]},

  { nome:"Hamburgueira H2", preco:0, foto:"img/h1.png", categoria:"Embalagens", tipo:"und", ativo:1, variacoes:[
    {nome:"Unidades", preco:0.25, ativo:1},
    {nome:"Pacote c/100UND", preco:21.99, ativo:1},
  ]},

  { nome:"Marmita Rasa", preco:0, foto:"img/rasa.png", categoria:"Embalagens", tipo:"und", ativo:1, variacoes:[
    {nome:"Unidades", preco:0.40, ativo:1},
    {nome:"Pacote c/50UND", preco:17.99, ativo:1},
    {nome:"Pacote c/100UND", preco:34.99, ativo:1},
  ]},

  { nome:"Marmita Funda", preco:0, foto:"img/funda.png", categoria:"Embalagens", tipo:"und", ativo:1, variacoes:[
    {nome:"Unidades", preco:0.50, ativo:1},
    {nome:"Pacote c/50UND", preco:22.49, ativo:1},
    {nome:"Pacote c/100UND", preco:39.99, ativo:1},
  ]},

  { nome:"Copo Descartavel CristalCopo C/100UND", preco:2.49, foto:"img/50ml.png", categoria:"Embalagens", tipo:"und", ativo:1, variacoes:[
    {nome:"50ML", preco:2.49, ativo:1},
    {nome:"150ML", preco:3.99, ativo:1},
    {nome:"180ML", preco:4.49, ativo:1},
    {nome:"200ML", preco:5.75, ativo:1},
    {nome:"250ML", preco:7.49, ativo:1},
    {nome:"300ML", preco:8.99, ativo:1},
  ]},

  { nome:"Copo Descartavel Ultra Copos C/50UND", preco:2.49, foto:"img/400.png", categoria:"Embalagens", tipo:"und", ativo:1, variacoes:[
    {nome:"400ML", preco:2.49, ativo:1},
    {nome:"500ML", preco:3.99, ativo:1},
  ]},

  { nome:"Garfo Sobremesa Plazapel C/50UND", preco:2.99, foto:"img/sobremesa.png", categoria:"Embalagens", tipo:"und", ativo:1 },
  { nome:"Garfo Refeição Plazapel C/50UND", preco:3.99, foto:"img/refeicao.png", categoria:"Embalagens", tipo:"und", ativo:1 },
  { nome:"Garfo Master Ultratalher C/50UND", preco:6.99, foto:"img/masterultra.png", categoria:"Embalagens", tipo:"und", ativo:1 },
  { nome:"Colher Sobremesa Plazapel C/50UND", preco:2.99, foto:"img/colher.png", categoria:"Embalagens", tipo:"und", ativo:1 },
  { nome:"Colher Refeição Plazapel C/50UND", preco:3.99, foto:"img/colherref.png", categoria:"Embalagens", tipo:"und", ativo:1 },
  { nome:"Faca Refeição Plazapel C/50UND", preco:3.99, foto:"img/faca.png", categoria:"Embalagens", tipo:"und", ativo:1 },
  { nome:"Faca Master Plazapel C/50UND", preco:7.99, foto:"img/facamaster.png", categoria:"Embalagens", tipo:"und", ativo:1 },
  { nome:"Sacola Branca Fracionada", preco:15.99, foto:"img/branca.png", categoria:"Embalagens", tipo:"kg", ativo:1 },
  { nome:"Sacola Verde Fracionada", preco:12.99, foto:"img/verde.png", categoria:"Embalagens", tipo:"kg", ativo:1 },
];

// Gerar ID automaticamente
produtos.forEach((p, i) => p.id = i + 1);

// ==========================
// CUPONS DE DESCONTO
// ==========================
const cupons = {
  "DESCONTO10": 0.10,
  "BOASVINDAS": 0.05
};

// ==========================
// CARRINHO
// ==========================
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let descontoVal = 0;
let taxaEntrega = 0;

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ==========================
// RENDERIZAR PRODUTOS
// ==========================
function renderProdutos(filtro = "", categoriaFiltro = "") {
  const area = document.getElementById("produtos");
  area.innerHTML = "";

  let lista = produtos.filter(p => p.ativo === 1);

  if (filtro.trim() !== "") {
    lista = lista.filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()));
  }

  if (categoriaFiltro.trim() !== "") {
    lista = lista.filter(p => p.categoria === categoriaFiltro);
  }

  const categorias = [...new Set(lista.map(p => p.categoria))];

  categorias.forEach(cat => {
    area.innerHTML += `<h2 class="category-title">${cat}</h2>`;

    lista
      .filter(p => p.categoria === cat)
      .forEach(prod => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="thumb">
            <img src="${prod.foto}">
          </div>
          <h3>${prod.nome}</h3>
          ${!prod.variacoes ? `<div class="price-row"><div class="price">R$ ${prod.preco.toFixed(2)} ${prod.tipo==="kg"?"/KG":""}${prod.tipo==="und"?"/UND":""}</div></div>` : ""}
          <button class="add-btn" onclick="addCarrinho(${prod.id})">Adicionar</button>
        `;
        area.appendChild(card);
      });
  });
}

renderProdutos();

// ==========================
// BUSCA
// ==========================
document.getElementById("busca").addEventListener("input", e => {
  renderProdutos(e.target.value);
});

// ==========================
// BOTÃO DE CATEGORIAS
// ==========================
const btnCategorias = document.createElement("button");
btnCategorias.innerText = "Categorias";
btnCategorias.className = "btn-categorias";
document.querySelector(".top-actions").appendChild(btnCategorias);

const menuCategorias = document.createElement("div");
menuCategorias.className = "menu-categorias";
menuCategorias.style.display = "none";
document.querySelector(".top-actions").appendChild(menuCategorias);

[...new Set(produtos.map(p => p.categoria))].forEach(cat => {
  const b = document.createElement("button");
  b.innerText = cat;
  b.onclick = () => {
    renderProdutos("", cat);
    menuCategorias.style.display = "none";
  };
  menuCategorias.appendChild(b);
});

btnCategorias.onclick = () => {
  menuCategorias.style.display = menuCategorias.style.display === "block" ? "none" : "block";
};

// ==========================
// ADICIONAR AO CARRINHO
// ==========================
function addCarrinho(id) {
  const p = produtos.find(x => x.id === id);
  if (!p || p.ativo === 0) return alert("Este item está inativo!");

  let escolhaVariacao = "";
  let precoEscolhido = p.preco;

  if (p.variacoes) {
    const variacoesAtivas = p.variacoes.filter(v => v.ativo === 1);

    if (variacoesAtivas.length === 0) {
      return alert("Nenhuma variação ativa disponível!");
    }

    let opcoes = variacoesAtivas.map((v,i) => `${i+1} - ${v.nome} — R$ ${(v.preco ?? p.preco).toFixed(2)}`).join("\n");

    let sel = prompt(`Escolha uma opção para ${p.nome}:\n${opcoes}`);
    sel = parseInt(sel);

    if (isNaN(sel) || sel < 1 || sel > variacoesAtivas.length) return alert("Opção inválida!");

    let varSelecionada = variacoesAtivas[sel-1];
    escolhaVariacao = varSelecionada.nome;
    precoEscolhido = varSelecionada.preco ?? p.preco;
  }

  let qtd = 0;
  let total = 0;

  if (p.tipo === "kg") {
    qtd = prompt("Digite o peso em KG (ex: 0.250):");
    qtd = parseFloat(qtd);
    if (isNaN(qtd) || qtd <= 0) return alert("Valor inválido!");
    total = qtd * precoEscolhido;
    carrinho.push({ id:p.id, nome:p.nome, tipo:"kg", peso:qtd, precoKG:precoEscolhido, total, variacao:escolhaVariacao });
  } else {
    qtd = prompt("Quantidade:");
    qtd = parseInt(qtd);
    if (isNaN(qtd) || qtd <= 0) return alert("Quantidade inválida!");
    total = qtd * precoEscolhido;
    carrinho.push({ id:p.id, nome:p.nome, tipo:"und", qtd, preco:precoEscolhido, total, variacao:escolhaVariacao });
  }

  salvarCarrinho();
  renderCarrinho();
}

// ==========================
// RENDERIZAR CARRINHO
// ==========================
function renderCarrinho() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (!carrinho.length) {
    lista.innerHTML = `<div style="color:#999;">Nenhum item adicionado.</div>`;
    atualizarResumo();
    return;
  }

  carrinho.forEach((item, i) => {
    lista.innerHTML += `
      <div class="item-card">
        <div class="item-name">
          ${item.nome}${item.variacao ? " — " + item.variacao : ""}
        </div>
        <div class="item-info">
          ${item.tipo === "kg" ? `${item.peso.toFixed(3)} kg` : `${item.qtd} un`}
          <strong>R$ ${item.total.toFixed(2)}</strong>
        </div>
        <button class="delete-btn" onclick="removerItem(${i})">Remover</button>
      </div>
    `;
  });

  atualizarResumo();
}

// ==========================
// REMOVER ITEM
// ==========================
function removerItem(i) {
  carrinho.splice(i, 1);
  salvarCarrinho();
  renderCarrinho();
}

// ==========================
// CALCULAR RESUMO
// ==========================
function atualizarResumo() {
  let subtotal = carrinho.reduce((acc, p) => acc + p.total, 0);

  const entrega = document.querySelector("input[name='modalRetirada']:checked")?.value || "Retirada";

  taxaEntrega = (entrega === "Entrega" && subtotal < 60) ? 4 : 0;

  let total = subtotal - descontoVal + taxaEntrega;
  if (total < 0) total = 0;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("desconto").innerText = descontoVal.toFixed(2);
  document.getElementById("taxa").innerText = taxaEntrega.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);

  document.getElementById("m_subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("m_desconto").innerText = descontoVal.toFixed(2);
  document.getElementById("m_taxa").innerText = taxaEntrega.toFixed(2);
  document.getElementById("m_total").innerText = total.toFixed(2);
}

// ==========================
// CAMPOS DE ENDEREÇO
// ==========================
document.querySelectorAll("input[name='modalRetirada']").forEach(r => {
  r.addEventListener("change", () => {
    const entrega = document.querySelector("input[name='modalRetirada']:checked").value;
    document.getElementById("m_endereco_box").style.display = entrega === "Entrega" ? "block" : "none";
    atualizarResumo();
  });
});

// ==========================
// APLICAR CUPOM
// ==========================
descontoVal = 0;

document.getElementById("m_aplicar_cupom").onclick = function () {
  const codigo = document.getElementById("m_cupom").value.trim().toUpperCase();

  if (!codigo) return alert("Digite um cupom!");
  if (!cupons[codigo]) return alert("Cupom inválido!");

  if (codigo === "BOASVINDAS" && localStorage.getItem("boasVindasUsado")) {
    return alert("O cupom BOASVINDAS só pode ser usado na primeira compra!");
  }

  let subtotal = carrinho.reduce((acc, p) => acc + p.total, 0);

  descontoVal = subtotal * cupons[codigo];

  const campoDesconto = document.getElementById("desconto_valor");
  if (campoDesconto) campoDesconto.textContent = descontoVal.toFixed(2);

  alert(`Cupom aplicado: ${(cupons[codigo] * 100).toFixed(0)}% OFF`);

  if (codigo === "BOASVINDAS") {
    localStorage.setItem("boasVindasUsado", "true");
  }

  atualizarResumo();
};

// ==========================
// MODAL
// ==========================
const modal = document.getElementById("modalFinalizar");

function abrirModal() {
  if (carrinho.length === 0) return alert("Adicione itens!");
  atualizarResumo();
  modal.style.display = "flex";
}
function fecharModal() { modal.style.display = "none"; }

document.getElementById("btnFinalizar").onclick = abrirModal;
document.getElementById("modalClose").onclick = fecharModal;
document.getElementById("m_cancelar").onclick = fecharModal;

window.onclick = e => { if(e.target === modal) fecharModal(); };

// ==========================
// ENVIAR WHATSAPP
// ==========================
document.getElementById("m_confirmar").onclick = () => {
  let formaEntrega = document.querySelector("input[name='modalRetirada']:checked")?.value || "Retirada";
  let pagamento = document.querySelector("input[name='modalPagamento']:checked")?.value || "Dinheiro";

  let txtEndereco = "";
  if(formaEntrega === "Entrega") {
    const rua = document.getElementById("m_rua").value.trim();
    const numero = document.getElementById("m_numero").value.trim();
    const bairro = document.getElementById("m_bairro").value.trim();
    const ref = document.getElementById("m_referencia").value.trim();
    if(!rua || !numero || !bairro) return alert("Preencha Rua, Número e Bairro!");
    txtEndereco = `\nEndereço:\nRua: ${rua}\nNúmero: ${numero}\nBairro: ${bairro}` + (ref?`\nReferência: ${ref}`:"");
  }

  const itens = carrinho.map(i =>
    i.tipo==="kg"
      ? `${i.nome}${i.variacao ? " — "+i.variacao : ""} — ${i.peso.toFixed(3)} kg — R$ ${i.total.toFixed(2)}`
      : `${i.nome}${i.variacao ? " — "+i.variacao : ""} — ${i.qtd} un — R$ ${i.total.toFixed(2)}`
  ).join("\n");

  const totalFinal = (carrinho.reduce((a,b)=>a+b.total,0) - descontoVal + taxaEntrega).toFixed(2);
  atualizarResumo();

  const msg = `PEDIDO VAREJÃO J. ANDRADE\n\n*${itens}*\n\nDesconto: R$ ${descontoVal.toFixed(2)}\nTaxa: R$ ${taxaEntrega.toFixed(2)}\n*Total: R$ ${totalFinal}*\n\nPagamento: ${pagamento}\nEntrega: ${formaEntrega}${txtEndereco}`;

  window.open(`https://wa.me/5581996864080?text=${encodeURIComponent(msg)}`,"_blank");

  carrinho = [];
  salvarCarrinho();
  renderCarrinho();
  fecharModal();
};

// ==========================
// LIMPAR CARRINHO
// ==========================
document.getElementById("btnLimpar").onclick = () => {
  carrinho = [];
  salvarCarrinho();
  renderCarrinho();
};

renderCarrinho();
