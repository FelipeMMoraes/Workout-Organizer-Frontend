import React, { useState } from 'react'
import { DATA_TREINOS } from '../../data/Treinos' // Importe seus dados iniciais aqui

import { Button, Form, Input, Label, Select } from './styles'

import { Typography } from '../../components/Typography'
import * as S from './styles'

function Workout() {
  const [treinoAtual, setTreinoAtual] = useState({
    nome: 'A', // Inicialize com 'A' como valor padrão
    gruposMusculares: {}
  })

  const [grupoMuscular, setGrupoMuscular] = useState('')
  const [exercicio, setExercicio] = useState('')
  const [repeticoes, setRepeticoes] = useState(0)
  const [series, setSeries] = useState(0)
  const [carga, setCarga] = useState(0)

  // Função para lidar com a adição de um novo exercício ao treino
  const adicionarExercicio = () => {
    if (
      !grupoMuscular ||
      !exercicio ||
      repeticoes <= 0 ||
      series <= 0 ||
      carga <= 0
    ) {
      // Validar os campos antes de adicionar o exercício
      alert('Por favor, preencha todos os campos corretamente.')
      return
    }

    const novoExercicio = {
      nome: exercicio,
      repeticoes,
      series,
      carga
    }

    setTreinoAtual((prevTreino) => ({
      ...prevTreino,
      gruposMusculares: {
        ...prevTreino.gruposMusculares,
        [grupoMuscular]: [
          ...(prevTreino.gruposMusculares[grupoMuscular] || []),
          novoExercicio
        ]
      }
    }))

    // Limpar os campos após a adição do exercício
    setGrupoMuscular('')
    setExercicio('')
    setRepeticoes(0)
    setSeries(0)
    setCarga(0)
  }

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Adicione o treino atual aos seus dados de treinos
    DATA_TREINOS.push(treinoAtual)

    // Limpar o estado de treino atual
    setTreinoAtual({
      nome: 'A', // Defina 'A' como valor padrão após a submissão
      gruposMusculares: {}
    })

    // Você pode querer atualizar ou salvar seus dados em algum local permanente, como um banco de dados aqui
    console.log('Treino a ser salvo:', treinoAtual)
  }

  return (
    <S.FormContainer>
      <Typography size="headingSm" weight="bold" tag="h1">
        Criar Novo Treino
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Label>
          Nome do Treino:
          <Select
            value={treinoAtual.nome}
            onChange={(e) =>
              setTreinoAtual({ ...treinoAtual, nome: e.target.value })
            }
            required
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </Select>
        </Label>
        <br />
        <Label>
          Grupo Muscular:
          <Select
            value={grupoMuscular}
            onChange={(e) => setGrupoMuscular(e.target.value)}
            required
          >
            <option value="Peito">Peito</option>
            <option value="Biceps">Biceps</option>
            <option value="Triceps">Triceps</option>
            <option value="Deltoides">Deltoides</option>
            <option value="Dorsais">Dorsais</option>
            <option value="Pernas">Pernas</option>
          </Select>
        </Label>
        <br />
        <Label>
          Nome do Exercício:
          <Input
            type="text"
            value={exercicio}
            onChange={(e) => setExercicio(e.target.value)}
            required
          />
        </Label>
        <br />
        <Label>
          Repetições:
          <Input
            type="number"
            value={repeticoes}
            onChange={(e) => setRepeticoes(parseInt(e.target.value, 10))}
            required
          />
        </Label>
        <br />
        <Label>
          Séries:
          <Input
            type="number"
            value={series}
            onChange={(e) => setSeries(parseInt(e.target.value, 10))}
            required
          />
        </Label>
        <br />
        <Label>
          Carga (em kg):
          <Input
            type="number"
            value={carga}
            onChange={(e) => setCarga(parseInt(e.target.value, 10))}
            required
          />
        </Label>
        <br />
        <S.ButtonContainer>
          <Button type="button" onClick={adicionarExercicio}>
            Adicionar Exercício
          </Button>
          <br />
          <Button type="submit">Salvar Treino</Button>
        </S.ButtonContainer>
      </Form>
    </S.FormContainer>
  )
}

export { Workout }
