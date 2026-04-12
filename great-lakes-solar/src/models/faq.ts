// The model for fetching FAQ data from CMS and rendering it in the FAQ component
export default class FAQ {
    question: string
    answer: string

    constructor(question: string, answer: string) {
        this.question = question
        this.answer = answer
    }
}
