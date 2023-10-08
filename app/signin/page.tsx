"use client"

import { useRouter } from "next/navigation";
import SocialLogin from "../components/SocialLogin";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../components/Button";
import { FieldValues,useForm,FormSubmitHandler, SubmitHandler} from "react-hook-form"
import Input from "../components/Input";
import { useState } from "react";
import { BarLoader } from "react-spinners";

const Page = () => {
    const router = useRouter();
    const [loading,setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{
            errors
        },
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            email:'',
            password:'',
        }
    })
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            reset();
            router.push('/');
        }, 6000)
    }
  return (

    <div className="h-full w-full grid place-items-center bg-primarry relative">
        <form className="flex flex-col gap-8 items-center" 
        onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-semibold text-3xl text-white">
                Connectez-vous
            </h1>
            <div className="flex flex-col gap-4">
                <Input 
                errors={errors}
                register={register}
                id="email"
                label="Email"
                type="email"
                required
                disabled={loading}
                />
                <Input 
                errors={errors}
                register={register}
                id="password"
                label="Mot de passe"
                type="password"
                required
                disabled={loading}
                showPassword
                />
                <span className="font-light text-neutral-300 hover:text-neutral-600 hover:underline cursor-pointer"
                onClick={() => router.push('/')}>
                    Mot de passe oublié ?
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <Button 
                actionLabel={loading ? <BarLoader color="#E44949" /> : 'Se connecter'}
                outline
                type="submit"
                disabled={loading}
                />
                <div className="font-semibold text-neutral-800">
                    <p>Vous n&apos;avez pas de compte ? </p>
                    <span className="font-medium text-neutral-200 cursor-pointer mt-4"
                    onClick={() => router.push('/register')}>
                        Créer un compte
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <SocialLogin 
                icon={FaGoogle}
                onClick={() => {}}
                />
                <SocialLogin
                icon={FaFacebookF}
                onClick={() => {}}
                />
                <SocialLogin 
                icon={FaGithub}
                onClick={() => {}}
                />
            </div>
        </form>
        <div className="absolute self-end mb-4 text-white">
            © 2023 Meet<span className="text-black">Up</span>. All rights reserved.
        </div>
    </div>
  )
}

export default Page