'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <form onSubmit={handleSubmit}>
        <input
          className="fixed top-20 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="What is your command?"
          onChange={handleInputChange}
        />
      </form>
      
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap generated relative top-20">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      
    </div>
  );
}