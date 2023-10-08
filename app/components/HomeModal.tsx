import React from 'react'
import useHomeModal from '../hooks/useHomeModal'
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import Logo from './Logo';
import { HashLoader } from 'react-spinners';

interface HomeModalInterface {
    onSubmit: () => void,
    loading?: boolean,
}

const HomeModal = ({onSubmit,loading}:HomeModalInterface) => {
    const homeModal = useHomeModal();
    const router = useRouter();
    let bodyContent = (
        <div className='flex flex-col items-center gap-4'>
            <Logo />
            <div className='text-center text-lg'>
                Welcome to our dating app, please login to continue
            </div>
        </div>
    )
    if(loading) {
        bodyContent = (
            <div className='flex flex-col items-center gap-4'>
                <HashLoader 
                color='#E44949'
                />
                <div className='text-center text-lg'>
                    Please wait while we log you in
                </div>
            </div>
        )
    }
  return (
    <Modal 
    isOpen={homeModal.isOpen}
    onClose={homeModal.onClose}
    onSubmit={() => router.push('/login')}
    actionLabel='Login'
    secondaryActionLabel='I did log in'
    secondaryAction={onSubmit}
    body={bodyContent}
    disabled={loading}
    />
  )
}

export default HomeModal