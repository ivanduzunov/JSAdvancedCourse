class MailBox {
    constructor() {
        this.mailBox = []
    }

    addMessage(subject, text) {
        this.mailBox.push({subject: subject, text: text})
        return this.mailBox
    }

    get messageCount() {
        return this.mailBox.length
    }

    deleteAllMessages() {
        return this.mailBox = []
    }

    findBySubject(substr) {
        return this.mailBox.filter(m => m.subject.includes(substr))
    }

    toString() {
        if (this.messageCount === 0) {
            return "* (empty mailbox)"
        } else {
            let result = ''
            this.mailBox.forEach(m => result += (`* [${m.subject}] ${m.text}\n`))
            return result
        }
    }
}