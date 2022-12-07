import messages from "../messagesBot";
export default function chatBot(message) {
  const obj = messages.find((msg) => msg.send === message);
  if (message.toLowerCase() === "#commands") {
    const commands = messages.map((msg) => msg.send);
    return `Atualmente os comandos disponíveis para o bot são: ${commands.join(", ")}. Estaremos atualizando para sempre adicionar novas features!`
  }
  const text = "Este não é um comando válido, por favor, cheque a lista de comandos digitando #commands"
  return obj ? obj.response : text;
}
