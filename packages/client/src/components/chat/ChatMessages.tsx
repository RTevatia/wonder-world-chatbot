import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export type Message = {
   content: string;
   role: 'user' | 'bot';
};

type Props = {
   messages: Message[];
};

const ChatMessages = ({ messages }: Props) => {
   const lastMessageRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (lastMessageRef.current) {
         lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   }, [messages]);

   const handleCopyMessage = (
      e: React.ClipboardEvent<HTMLParagraphElement>
   ): void => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (text) {
         e.preventDefault();
         e.clipboardData.setData('text/plain', text);
      }
   };

   return (
      <div className="flex flex-col gap-3">
         {messages.map((message, index) => (
            <div
               key={index}
               onCopy={handleCopyMessage}
               ref={index === messages.length - 1 ? lastMessageRef : null}
               className={`px-3 py-1 rounded-xl ${
                  message.role === 'user'
                     ? 'bg-blue-600 text-white self-end'
                     : 'bg-gray-100 text-black self-start'
               }`}
            >
               <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
         ))}
      </div>
   );
};

export default ChatMessages;
