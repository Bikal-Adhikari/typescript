interface Message {
  text: string;
  timestamp: number;
}

class Chatbot {
  private conversationHistory: Message[] = [];

  respondToMessage(message: string) {
    const response = this.generateResponse(message);
    this.conversationHistory.push({ text: response, timestamp: Date.now() });
    return response;
  }

  private generateResponse(message: string) {
    if (message.toLowerCase() === "hello") {
      return "Hello! How can I assist you today?";
    } else if (message.toLowerCase() === "goodbye") {
      return "Goodbye! It was nice chatting with you.";
    } else {
      return "I didn't understand that. Can you please rephrase?";
    }
  }

  getConversationHistory() {
    return this.conversationHistory;
  }
}

const chatbot = new Chatbot();
console.log(chatbot.respondToMessage("Hello!"));
console.log(chatbot.respondToMessage("Goodbye"));
console.log(chatbot.getConversationHistory());
