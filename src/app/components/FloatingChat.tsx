import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { useState } from 'react';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '(206) 919-6886',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call - replace with actual form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '(206) 919-6886', message: '' });
      setErrors({});
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Widget Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-cinzel">Send me a message</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {/* Name Field */}
            <div>
              <label htmlFor="chat-name" className="block text-sm mb-2 text-gray-900 font-medium" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                Your Name *
              </label>
              <Input 
                type="text"
                id="chat-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What should I call you?"
                className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="chat-email" className="block text-sm mb-2 text-gray-900 font-medium" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                Your Email *
              </label>
              <Input 
                type="email"
                id="chat-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="chat-phone" className="block text-sm mb-2 text-gray-900 font-medium" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                Phone Number (Optional)
              </label>
              <Input 
                type="tel"
                id="chat-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="chat-message" className="block text-sm mb-2 text-gray-900 font-medium" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                What Can I Help You With? *
              </label>
              <Textarea
                id="chat-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about what you're looking for, your timeline, or any questions you have. I'm here to help!"
                rows={5}
                className={`w-full resize-none ${errors.message ? 'border-red-500' : ''}`}
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  {errors.message}
                </p>
              )}
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                Something went wrong. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            {/* reCAPTCHA Disclaimer */}
            <div className="bg-gray-100 px-4 py-3 rounded text-xs text-gray-600" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
              {' '}apply.
            </div>
          </form>
        </div>
      )}
    </>
  );
}
