// The model for fetching FAQ data from CMS and rendering it in the FAQ component
export default class FAQ {
    question: string
    answer: string
    category: string

    constructor(question: string, answer: string, category: string) {
        this.question = question
        this.answer = answer
        this.category = category
    }
}
