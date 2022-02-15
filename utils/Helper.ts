// https://opentdb.com/api.php?amount=10&category=9&type=multiple

export const _ = (array: any[number | string]) => [...array].sort(() => Math.random() - 0.7);

export enum QuestionDifficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
};

export type QuizProps = {};

export const grabQuizQuestions = () => {}