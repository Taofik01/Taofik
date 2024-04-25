import React, { useState } from 'react'
import PageHeaderContent from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import app from '../../firebase.config'
import { getDatabase, ref, set, push } from 'firebase/database'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const submit = async () => {
    const db = getDatabase(app);
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name: name,
      email: email,
      description: description
    }).then(() => {
      alert('Message sent successfully')
    }).catch((error) => {
      alert(error)
    })
  }
  return (
    <section>
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='contact_content'>
        <Animate play duration={1}
        delay={0}
        start={{
          transform  : 'translateX(-200px)'
        }}
        end={{
          transform : 'translateX(0px)'
        }}
        >
          <h3 className="contact_header_text">Let's Talk</h3>
        </Animate>
        <Animate play duration={1}
        delay={0}
        start={{
          transform  : 'translateX(200px)'
        }}
        end={{
          transform : 'translateX(0px)'
        }}>
          <div className='contact_form'>
            <div className='contact_form_wrapper'>
            <div className='nameWrapper'>
              <input required name='name' className='inputName' type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor='name' className='nameLabel'>Name</label>
            </div>
            <div className='emailWrapper'>
            <input required name='email' className='inputEmail' type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor='email' className='emailLabel'>Email</label>
            </div>
            <div className='descriptionWrapper'>
            <textarea rows={5} required name='description' className='inputDescription' type={'text'} value={description} onChange={(e) => setDescription(e.target.value)} />
              <label htmlFor='description' className='descriptionLabel'>Description</label>
            </div>
            </div>
            <button className='submit_button' onClick={submit}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  )
}
