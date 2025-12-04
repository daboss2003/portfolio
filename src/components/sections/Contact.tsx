import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '../ui/GlowCard';

const socialLinks = [
  {
    name: 'LinkedIn',
    command: '--connect linkedin',
    url: 'https://linkedin.com/in/samson-oluwafemi-6502a8278',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    command: '--view github',
    url: 'https://github.com/daboss2003',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    command: '--follow twitter',
    url: 'https://x.com/DABOSS_FEMI',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    command: '--send email',
    url: 'mailto:samsonoluwafemi203@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      // Clear form immediately
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24! md:py-32! overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 matrix-bg" />

      <div className="relative z-10 container mx-auto px-4! md:px-12!">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16! text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4!">
            <div className="flex-1 h-px bg-terminal-border max-w-[100px]" />
            <span className="text-terminal-green font-mono text-sm">06.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-terminal-text">
              Open Orders
            </h2>
            <div className="flex-1 h-px bg-terminal-border max-w-[100px]" />
          </div>
          <p className="font-mono text-terminal-text-dim text-sm">
            &gt; initiate_connection --type=professional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlowCard className="p-4! md:p-6!" glowColor="green">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6! pb-4! border-b border-terminal-border">
                <div className="w-3 h-3 rounded-full bg-terminal-red" />
                <div className="w-3 h-3 rounded-full bg-terminal-amber" />
                <div className="w-3 h-3 rounded-full bg-terminal-green" />
                <span className="ml-4! font-mono text-xs text-terminal-text-dim">
                  contact_form.sh
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12!"
                >
                  <div className="text-6xl mb-4!">✓</div>
                  <h3 className="font-display text-xl font-bold text-terminal-green mb-2!">
                    Message Sent!
                  </h3>
                  <p className="font-mono text-sm text-terminal-text-dim">
                    &gt; execute_response() initiated...
                  </p>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6!"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label className="block font-mono text-xs text-terminal-text-dim mb-2!">
                      &gt; enter_name:
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-terminal-gray/50 border border-terminal-border rounded-lg px-4! py-3!
                               font-mono text-sm text-terminal-text placeholder-terminal-text-dim
                               focus:outline-none focus:border-terminal-green transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-terminal-text-dim mb-2!">
                      &gt; enter_email:
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-terminal-gray/50 border border-terminal-border rounded-lg px-4! py-3!
                               font-mono text-sm text-terminal-text placeholder-terminal-text-dim
                               focus:outline-none focus:border-terminal-green transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-terminal-text-dim mb-2!">
                      &gt; enter_message:
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-terminal-gray/50 border border-terminal-border rounded-lg px-4! py-3!
                               font-mono text-sm text-terminal-text placeholder-terminal-text-dim
                               focus:outline-none focus:border-terminal-green transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3! bg-terminal-green text-terminal-black font-mono font-semibold
                             rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-terminal-black/30 border-t-terminal-black rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      '> execute_connection()'
                    )}
                  </motion.button>
                </form>
              )}
            </GlowCard>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <GlowCard className="p-4! md:p-8!" glowColor="green">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-terminal-green/20 flex items-center justify-center">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-terminal-green rounded-full border-2 border-terminal-dark animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-terminal-text mb-1!">
                    Available for Hire
                  </h3>
                  <p className="font-mono text-sm text-terminal-text-dim">
                    Open to remote opportunities
                  </p>
                  <p className="font-mono text-xs text-terminal-green mt-1!">
                    ● Currently online
                  </p>
                </div>
              </div>
            </GlowCard>

            {/* Social Links */}
            <GlowCard className="p-4! md:p-8!" glowColor="cyan">
              <h3 className="font-mono text-sm text-terminal-text-dim mb-4!">
                &gt; social_links:
              </h3>
              <div className="space-y-4!">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3! rounded-lg bg-terminal-gray/30 border border-terminal-border
                             hover:border-terminal-cyan/50 hover:bg-terminal-gray/50 transition-all group"
                  >
                    <span className="text-terminal-cyan group-hover:text-terminal-green transition-colors">
                      {link.icon}
                    </span>
                    <div>
                      <div className="font-mono text-sm text-terminal-text group-hover:text-terminal-cyan transition-colors">
                        {link.name}
                      </div>
                      <div className="font-mono text-xs text-terminal-text-dim">
                        {link.command}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlowCard>

            {/* Quick Contact */}
            <GlowCard className="p-4! md:p-8!" glowColor="amber">
              <h3 className="font-mono text-sm text-terminal-text-dim mb-4!">
                &gt; quick_contact:
              </h3>
              <div className="space-y-3! font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-terminal-amber">📧</span>
                  <span className="text-terminal-text">samsonoluwafemi203@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-terminal-amber">📱</span>
                  <span className="text-terminal-text">+234 902 407 1583</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-terminal-amber">📍</span>
                  <span className="text-terminal-text">Ilorin, Kwara State, Nigeria</span>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

