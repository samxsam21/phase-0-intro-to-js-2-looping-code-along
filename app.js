function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  