'use client';

import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '+15557074708'; // Formatted for WhatsApp URL
  const message = 'Hi! I\'m interested in learning more about the AI Workshop. Can you provide more details?';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        bg-green-500 hover:bg-green-600
        text-white
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        transform hover:scale-110
        flex items-center justify-center
        group
        animate-bounce
      "
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <svg 
        className="w-7 h-7 md:w-8 md:h-8" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
      
      {/* Tooltip */}
      <div className="
        absolute bottom-full right-0 mb-2
        bg-gray-900 dark:bg-gray-100
        text-white dark:text-gray-900
        text-xs
        px-3 py-2
        rounded-lg
        whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
        shadow-lg
        before:content-['']
        before:absolute
        before:top-full
        before:right-4
        before:border-4
        before:border-transparent
        before:border-t-gray-900
        before:dark:border-t-gray-100
      ">
        Need help? Chat with us!
      </div>
    </button>
  );
}; 