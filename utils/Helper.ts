export const _ = (array: any[number | string]) =>
  [...array].sort(() => Math.random() - 0.7);

export enum QuestionDifficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuizProps = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizPropsState = QuizProps & { answers: string[] };

export const grabQuizQuestions = async (
  total_questions: number,
  difficulty: QuestionDifficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${total_questions}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((quizprops: QuizProps) => ({
      ...quizprops,
      answers: _([quizprops.correct_answer, ...quizprops.incorrect_answers])
  }));
};
