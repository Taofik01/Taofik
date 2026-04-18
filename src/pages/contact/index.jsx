import React, { useState, useRef, useEffect } from 'react';
import PageHeaderContent from '../../component/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import './styles.scss';

const contactLinks = [
    {
        label: 'Email',
        value: 'sulaimontaofik08@gmail.com',
        href: 'mailto:sulaimontaofik08@gmail.com',
    },
    {
        label: 'Phone',
        value: '+234 810 951 5866',
        href: 'tel:+2348109515866',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/taofik-sulaimon',
        href: 'https://www.linkedin.com/in/taofik-sulaimon',
    },
    {
        label: 'GitHub',
        value: 'github.com/Taofik01',
        href: 'https://github.com/Taofik01',
    },
];

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setStatus('sending');

        const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Debug — remove after confirming it works
        console.log('EmailJS config:', { serviceId, templateId, publicKey });

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id='contact' className='contact'>
            <PageHeaderContent
                headerText="Contact"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className={`contact__body ${visible ? 'contact__body--visible' : ''}`}>

                {/* ── Left ── */}
                <div className='contact__left'>
                    <span className='contact__label'>GET IN TOUCH</span>

                    <h2 className='contact__headline'>
                        Let's build<br />
                        something <em>great.</em>
                    </h2>

                    <p className='contact__subtext'>
                        Open to remote roles, Hybrid roles, freelance projects and
                        interesting collaborations. Response within 24 hours.
                    </p>

                    <ul className='contact__links'>
                        {contactLinks.map((item, i) => (
                            <li key={i} className='contact__link-row'>
                                <span className='contact__link-label'>{item.label}</span>
                                <a
                                    href={item.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='contact__link-value'
                                >
                                    {item.value} ↗
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Right / Form ── */}
                <div className='contact__right'>
                    <form
                        ref={formRef}
                        className='contact__form'
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className='contact__field'>
                            <label className='contact__field-label'>Name</label>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder='Your name'
                                className='contact__input'
                                required
                            />
                        </div>

                        <div className='contact__field'>
                            <label className='contact__field-label'>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder='your@email.com'
                                className='contact__input'
                                required
                            />
                        </div>

                        <div className='contact__field contact__field--full'>
                            <label className='contact__field-label'>Message</label>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Tell me about your project or opportunity...'
                                className='contact__textarea'
                                rows={6}
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className={`contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''} ${status === 'success' ? 'contact__submit--success' : ''} ${status === 'error' ? 'contact__submit--error' : ''}`}
                            disabled={status === 'sending'}
                        >
                            {status === 'idle'    && 'Send Message ↗'}
                            {status === 'sending' && 'Sending...'}
                            {status === 'success' && '✓ Message Sent!'}
                            {status === 'error'   && 'Failed — Try Again'}
                        </button>

                        {status === 'error' && (
                            <p className='contact__error'>
                                Something went wrong. Email me directly at sulaimontaofik08@gmail.com
                            </p>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
}