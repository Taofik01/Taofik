import React from 'react'
import PageHeaderContent from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss'

export default function Contact() {
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
              <input required name='name' className='inputName' type={'text'} />
              <label htmlFor='name' className='nameLabel'>Name</label>
            </div>
            <div className='emailWrapper'>
            <input required name='email' className='inputEmail' type={'email'} />
              <label htmlFor='email' className='emailLabel'>Email</label>
            </div>
            <div className='descriptionWrapper'>
            <textarea rows={5} required name='description' className='inputDescription' type={'text'} />
              <label htmlFor='description' className='descriptionLabel'>Name</label>
            </div>
            </div>
            <button className='submit_button'>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  )
}
