import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const StickyWhatsApp = () => {
  return (
    <div className="sticky-cta">
      <a
        href="https://wa.me/201021252183"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>
      </a>
    </div>
  );
};

export default StickyWhatsApp;

