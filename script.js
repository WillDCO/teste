document.getElementById('form-calc').addEventListener('submit', function (e) {
  e.preventDefault();

  const altura = parseFloat(document.getElementById('altura').value);
  const largura = parseFloat(document.getElementById('largura').value);
  const tipo = document.getElementById('tipo').value;
  const acabamento = document.getElementById('acabamento').value;

  const area = (altura / 100) * (largura / 100);
  let precoBase = tipo === 'temperado' ? 250 : 180;
  if (acabamento === 'bisotado') precoBase += 30;

  const precoFinal = (area * precoBase).toFixed(2);

  document.getElementById('resultado').innerHTML = `
    <p>Área: ${area.toFixed(2)} m²</p>
    <p>Preço estimado: R$ ${precoFinal}</p>
    <a href="https://wa.me/55SEUNUMERO?text=Olá! Gostaria de orçamento para vidro sob medida com área de ${area.toFixed(2)}m², tipo ${tipo}, acabamento ${acabamento}. Valor estimado: R$ ${precoFinal}" target="_blank">
      <button>Quero esse orçamento no WhatsApp</button>
    </a>
  `;
});
