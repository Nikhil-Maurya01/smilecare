import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const handleClick = () => {
    window.open('https://wa.me/1234567890?text=Hi, I have a question about your dental services', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="WhatsApp Contact"
    >
      <MessageCircle size={28} />
    </button>
  );
}
