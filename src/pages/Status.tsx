import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

/*
 * Fluxo de renderização:
 *  1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 *  2. Toda vez que seu componente PAI renderizar
 *  3. Toda vez que alguma das suas propriedades mudarem
 */

/*
 * Algoritmo de reconciliação:
 *  1. Cria em memória a nova versão do HTML do componente
 *  2. Compara essa nova versão com a versão anterior do HTML(Diff)
 *  3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Faz todo sentido!",
    "Parabéns pelo progresso.",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Home" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem non sequi ut, commodi tempora eveniet! Aliquam cumque corrupti distinctio?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/GuiGubert.png" alt="Guilherme Gubert" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
