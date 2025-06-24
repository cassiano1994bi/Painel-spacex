import { useState } from 'react';

export default function PainelCassiano() {
  const [saldo, setSaldo] = useState(0);
  const [metaMilhao] = useState(1000000);
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [nota, setNota] = useState('');
  const [notas, setNotas] = useState([]);
  const [obras, setObras] = useState([]);
  const [novaObra, setNovaObra] = useState('');

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  const adicionarNota = () => {
    if (nota.trim()) {
      setNotas([...notas, nota]);
      setNota('');
    }
  };

  const adicionarObra = () => {
    if (novaObra.trim()) {
      setObras([...obras, novaObra]);
      setNovaObra('');
    }
  };

  return (
    <div>
      <h2>💰 Gestão Financeira</h2>
      <p>Saldo atual: R$ {saldo.toLocaleString('pt-BR')}</p>
      <p>Meta: R$ {metaMilhao.toLocaleString('pt-BR')}</p>

      <h2>📋 Tarefas do Dia</h2>
      <input value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder="Nova tarefa" />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>{tarefas.map((t, i) => <li key={i}>{t}</li>)}</ul>

      <h2>📝 Anotações</h2>
      <textarea value={nota} onChange={(e) => setNota(e.target.value)} placeholder="Escreva uma anotação" />
      <button onClick={adicionarNota}>Salvar</button>
      <ul>{notas.map((n, i) => <li key={i}>{n}</li>)}</ul>

      <h2>🏗️ Relatórios de Obras</h2>
      <input value={novaObra} onChange={(e) => setNovaObra(e.target.value)} placeholder="Nova obra" />
      <button onClick={adicionarObra}>Cadastrar</button>
      <ul>{obras.map((obra, i) => <li key={i}>{obra}</li>)}</ul>
    </div>
  );
}
