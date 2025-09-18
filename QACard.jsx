import { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';

export function QACard({ qa }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`P: ${qa.question}\n\nR: ${qa.answer}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Jurídicas': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Financeiras': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Operacionais': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      'Tecnológicas': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Bem-Estar': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getCategoryColor(qa.category)}>
                {qa.category}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground leading-tight">
              {qa.question}
            </h3>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 p-0"
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {qa.answer}
            </p>
          </div>
          
          {qa.tags && qa.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {qa.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

